import { useEffect, useRef, useState } from 'react';
import { editions, welcomeEdition, formatDate } from './lib/content.js';
import { SITE } from './config.js';
import { DawnSky } from './sky/DawnSky.js';
import Masthead from './components/Masthead.jsx';
import Story from './components/Story.jsx';
import Archive from './components/Archive.jsx';

const INTRO_SEEN_KEY = 'daybreak.introSeen';

function hasSeenIntro() {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) === '1';
  } catch {
    return true; // storage unavailable — never trap the reader on the intro
  }
}

function markIntroSeen() {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, '1');
  } catch {
    // Private browsing etc. — they'll just see the intro again next time.
  }
}

function editionFromHash() {
  if (window.location.hash === '#/welcome' && welcomeEdition) return welcomeEdition;
  const m = window.location.hash.match(/^#\/(\d{4}-\d{2}-\d{2})$/);
  if (m) {
    const found = editions.find((e) => e.date === m[1]);
    if (found) return found;
  }
  // First visit gets the intro edition before the paper itself; it also
  // stands in whenever there are no dated editions yet.
  if (welcomeEdition && (!hasSeenIntro() || editions.length === 0)) return welcomeEdition;
  return editions[0] || welcomeEdition || null;
}

export default function App() {
  const canvasRef = useRef(null);
  const [edition, setEdition] = useState(editionFromHash);

  // Mount the sky once
  useEffect(() => {
    let sky;
    let cancelled = false;
    (async () => {
      try {
        sky = new DawnSky(canvasRef.current);
        if (!cancelled) await sky.init();
      } catch (err) {
        // No WebGPU and no WebGL2 — the CSS gradient fallback stays visible.
        console.warn('Sky renderer unavailable, using static background.', err);
      }
    })();
    return () => {
      cancelled = true;
      sky?.dispose();
    };
  }, []);

  // Hash routing between editions
  useEffect(() => {
    const onHash = () => {
      setEdition(editionFromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Once the intro edition has been on screen, don't lead with it again
  useEffect(() => {
    if (edition?.welcome) markIntroSeen();
  }, [edition]);

  // Scroll-reveal for stories
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal');
    if (reduced) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [edition]);

  if (!edition) {
    return (
      <main className="empty-state">
        <canvas ref={canvasRef} className="sky" aria-hidden="true" />
        <h1>{SITE.masthead}</h1>
        <p>
          No editions yet. Commit your first story to{' '}
          <code>content/YYYY-MM-DD/your-story.md</code> and the presses will roll.
        </p>
      </main>
    );
  }

  const [leadStory, ...restStories] = edition.stories;
  const isLatest = edition === editions[0];

  return (
    <>
      <canvas ref={canvasRef} className="sky" aria-hidden="true" />
      <div className="page">
        <Masthead edition={edition} isLatest={isLatest} />

        <main
          className="edition"
          aria-label={edition.welcome ? 'About this paper' : `Edition of ${formatDate(edition.date)}`}
        >
          {leadStory && <Story story={leadStory} lead />}
          {restStories.map((story) => (
            <Story key={story.id} story={story} />
          ))}

          {edition.welcome && (
            <div className="welcome-cta reveal">
              {editions.length > 0 ? (
                <a className="cta-link" href={`#/${editions[0].date}`}>
                  Read this morning’s paper →
                </a>
              ) : (
                <p className="cta-note mono">The first edition rolls off the presses soon.</p>
              )}
            </div>
          )}
        </main>

        <footer className="colophon reveal">
          <div className="sun-divider" aria-hidden="true">
            ☀
          </div>
          <p className="signoff">{SITE.signoff}</p>
          <Archive current={edition} />
          <p className="fine-print">
            {SITE.masthead} · published by {SITE.publisher} · new edition every morning
            {welcomeEdition && !edition.welcome && (
              <>
                {' · '}
                <a href="#/welcome">about this paper</a>
              </>
            )}
          </p>
        </footer>
      </div>
    </>
  );
}
