import { ABOUT } from '../data/about';
import SectionLink from './SectionLink';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="reveal grid lg:grid-cols-[1fr_280px] gap-14 lg:gap-20">
          <div>
            <p className="eyebrow mb-6">About</p>
            <h2 className="section-heading mb-8 max-w-2xl">{ABOUT.headline}</h2>
            <div className="space-y-5 max-w-2xl">
              {ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="case-study-prose text-muted">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <SectionLink href="#projects" className="btn-secondary text-xs">
                See shipped work
              </SectionLink>
              <SectionLink href="#contact" className="btn-secondary text-xs">
                Get in touch
              </SectionLink>
            </div>
          </div>

          <aside className="reveal space-y-8" style={{ transitionDelay: '0.08s' }}>
            <div className="panel p-6">
              <p className="eyebrow mb-4">How I work</p>
              <ul className="space-y-4">
                {ABOUT.principles.map((p) => (
                  <li key={p.label}>
                    <p className="text-sm font-semibold text-ink tracking-tight">{p.label}</p>
                    <p className="text-xs text-muted mt-0.5">{p.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-accent pl-5">
              <p className="pull-quote text-ink">{ABOUT.availability.status}</p>
              <p className="text-xs text-muted mt-3 leading-relaxed">
                {ABOUT.availability.roles}
                <br />
                {ABOUT.availability.location} · {ABOUT.availability.start}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
