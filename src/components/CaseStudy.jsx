function MetricChips({ metrics }) {
  if (!metrics?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2 mb-4" aria-label="Key metrics">
      {metrics.map((m) => (
        <li key={m} className="metric-chip">{m}</li>
      ))}
    </ul>
  );
}

function CaseStudyBlock({ study, title }) {
  if (!study) return null;

  return (
    <article className="reveal panel mt-16">
      <div className="p-8 lg:p-12 border-b border-line">
        <p className="eyebrow text-accent mb-3">Case study</p>
        <h3 className="project-title mb-2">{title}</h3>
        <p className="text-sm text-muted">Problem → approach → outcome</p>
      </div>

      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-line">
        <div className="p-8 lg:p-10">
          <p className="eyebrow mb-4">Problem</p>
          <p className="case-study-prose text-muted">{study.problem}</p>
        </div>
        <div className="p-8 lg:p-10">
          <p className="eyebrow mb-4">Approach</p>
          <p className="case-study-prose text-muted">{study.approach}</p>
        </div>
        <div className="p-8 lg:p-10">
          <p className="eyebrow mb-4">Outcome</p>
          <p className="case-study-prose text-muted">{study.outcome}</p>
        </div>
      </div>

      {study.stack && (
        <div className="border-t border-line p-8 lg:p-10">
          <p className="eyebrow mb-6">Architecture</p>
          <dl className="grid sm:grid-cols-2 gap-6">
            {study.stack.map((row) => (
              <div key={row.layer}>
                <dt className="text-xs font-semibold text-ink tracking-tight mb-1">{row.layer}</dt>
                <dd className="text-sm text-muted leading-relaxed">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {study.learned && (
        <div className="border-t border-line px-8 lg:px-10 py-8 bg-surface-2">
          <p className="pull-quote text-ink max-w-3xl">&ldquo;{study.learned}&rdquo;</p>
        </div>
      )}
    </article>
  );
}

export { MetricChips, CaseStudyBlock };
