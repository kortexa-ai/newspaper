import { SITE } from '../config.js';
import { formatDate } from '../lib/content.js';

export default function Masthead({ edition, isLatest }) {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <p className="dateline mono">
          {edition.welcome ? (
            <>Welcome · an introduction to this paper</>
          ) : (
            <>
              {formatDate(edition.date)} · No. {edition.number}
              {!isLatest && <span className="archive-flag"> · from the archive</span>}
            </>
          )}
        </p>
        <h1 className="masthead-title">{SITE.masthead}</h1>
        <p className="tagline">{SITE.tagline}</p>
      </div>
      <p className="scroll-hint mono" aria-hidden="true">
        scroll — the sun rises as you read
      </p>
    </header>
  );
}
