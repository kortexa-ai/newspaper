import { useEffect, useRef, useState } from 'react';
import { editions, formatDate } from './lib/content.js';
import { SITE } from './config.js';
import { DawnSky } from './sky/DawnSky.js';
import Masthead from './components/Masthead.jsx';
import Story from './components/Story.jsx';
import Archive from './components/Archive.jsx';

function editionFromHash() {
  const m = window.location.hash.match(/^#\/(\d{4}-\d{2}-\d{2})$/);
  if (m) {
    const found = editions.find((e) => e.date === m[1]);
    if (found) return found;
  }
  return editions[0] || null;
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

        <main className="edition" aria-label={`Edition of ${formatDate(edition.date)}`}>
          {leadStory && <Story story={leadStory} lead />}
          {restStories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </main>

        <footer className="colophon reveal">
          <div className="sun-divider" aria-hidden="true">
            ☀
          </div>
          <p className="signoff">{SITE.signoff}</p>
          <Archive current={edition} />
          <p className="fine-print">
            {SITE.masthead} · published by {SITE.publisher} · new edition every morning
          </p>
        </footer>
      </div>
    </>
  );
}
