// Loads every markdown file under /content at build time.
//
// The publishing contract (what your scheduled task must do):
//   content/YYYY-MM-DD/<anything>.md   →  one file per story
//
// One special folder sits outside the dated editions:
//   content/welcome/<anything>.md      →  the evergreen intro edition,
//   shown to first-time visitors and linked as "about this paper".
//
// Frontmatter (all optional except title):
//   title:   Story headline
//   kicker:  Small section label (AI, Space, Open Source, ...)
//   author:  Byline
//   summary: One-sentence deck shown under the headline
//   lead:    true → this story opens the edition, gets the big treatment
//   order:   number → manual ordering within an edition (lower = earlier)

import { marked } from 'marked';

const files = import.meta.glob('../../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFrontmatter(raw) {
  const meta = {};
  let body = raw;
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (match) {
    body = raw.slice(match[0].length);
    for (const line of match[1].split(/\r?\n/)) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      if (/^(['"]).*\1$/.test(value)) value = value.slice(1, -1);
      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      else if (value !== '' && !isNaN(Number(value)) && key === 'order') value = Number(value);
      meta[key] = value;
    }
  }
  return { meta, body };
}

marked.setOptions({ gfm: true, breaks: false });

function buildStory(path, raw, date) {
  const { meta, body } = parseFrontmatter(raw);
  return {
    id: path,
    date,
    title: meta.title || 'Untitled',
    kicker: meta.kicker || '',
    author: meta.author || '',
    summary: meta.summary || '',
    lead: meta.lead === true,
    order: typeof meta.order === 'number' ? meta.order : 999,
    html: marked.parse(body.trim()),
    minutes: Math.max(1, Math.round(body.trim().split(/\s+/).length / 220)),
  };
}

function sortStories(stories) {
  stories.sort((a, b) => (b.lead ? 1 : 0) - (a.lead ? 1 : 0) || a.order - b.order || a.id.localeCompare(b.id));
  return stories;
}

function buildEditions() {
  const byDate = new Map();

  for (const [path, raw] of Object.entries(files)) {
    const dateMatch = path.match(/content\/(\d{4}-\d{2}-\d{2})\//);
    if (!dateMatch) continue;
    const date = dateMatch[1];
    if (!byDate.has(date)) byDate.set(date, []);
    byDate.get(date).push(buildStory(path, raw, date));
  }

  const dates = [...byDate.keys()].sort(); // ascending, oldest first
  return dates
    .map((date, i) => ({ date, number: i + 1, stories: sortStories(byDate.get(date)) }))
    .reverse(); // newest edition first
}

function buildWelcome() {
  const stories = [];
  for (const [path, raw] of Object.entries(files)) {
    if (!/content\/welcome\//.test(path)) continue;
    stories.push(buildStory(path, raw, null));
  }
  if (stories.length === 0) return null;
  return { date: null, welcome: true, stories: sortStories(stories) };
}

export const editions = buildEditions();
export const welcomeEdition = buildWelcome();

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
