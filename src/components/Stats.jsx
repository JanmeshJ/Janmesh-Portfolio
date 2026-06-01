import { HERO_STATS } from '../data/site';

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface" aria-label="Key metrics">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
          {HERO_STATS.map((s, i) => (
            <div key={s.l} className="reveal py-10 lg:py-12 px-6 lg:px-8" style={{ transitionDelay: `${i * 0.08}s` }}>
              <dt className="stat-value mb-2">{s.v}</dt>
              <dd className="text-sm font-medium text-ink tracking-tight">{s.l}</dd>
              <dd className="text-xs text-muted mt-1 leading-snug">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
