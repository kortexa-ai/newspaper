import { editions, formatDate } from '../lib/content.js';

export default function Archive({ current }) {
  if (editions.length <= 1) return null;
  return (
    <nav className="archive" aria-label="Past editions">
      <h3 className="archive-heading mono">Past mornings</h3>
      <ul className="archive-list mono">
        {editions.map((e) => (
          <li key={e.date}>
            {e === current ? (
              <span className="archive-current" aria-current="page">
                No. {e.number} — {formatDate(e.date)}
              </span>
            ) : (
              <a href={`#/${e.date}`}>
                No. {e.number} — {formatDate(e.date)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
