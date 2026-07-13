export default function Story({ story, lead = false }) {
  return (
    <article className={`story reveal ${lead ? 'story-lead' : ''}`}>
      <div className="story-meta mono">
        {story.kicker && <span className="kicker">{story.kicker}</span>}
        <span className="read-time">{story.minutes} min</span>
      </div>
      <h2 className="story-title">{story.title}</h2>
      {story.summary && <p className="story-summary">{story.summary}</p>}
      {story.author && <p className="byline mono">by {story.author}</p>}
      <div className="story-body" dangerouslySetInnerHTML={{ __html: story.html }} />
    </article>
  );
}
