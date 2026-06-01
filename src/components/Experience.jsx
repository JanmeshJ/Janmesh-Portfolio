import { SectionHeader } from './SectionHeader';
import TypeBadge from './TypeBadge';
import { EXPERIENCES, EDUCATION } from '../data/experiences';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 border-t border-line bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          label="Background"
          title={{ serif: 'Career & education', main: 'Experience' }}
        />

        <div className="border-t border-line">
          {EXPERIENCES.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="reveal grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-14 py-10 border-b border-line"
            >
              <div>
                <time className="text-xs text-muted font-sans block mb-3">{exp.period}</time>
                <TypeBadge>{exp.type}</TypeBadge>
                <p className="text-sm text-muted mt-4">{exp.company}</p>
                <p className="text-xs text-faint mt-1">{exp.location}</p>
              </div>
              <div>
                <h3 className="project-title mb-4">{exp.role}</h3>
                <ul className="space-y-3">
                  {exp.points.map((p) => (
                    <li key={p.slice(0, 40)} className="text-sm text-muted leading-relaxed pl-4 border-l border-line">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="eyebrow mb-6">Education</p>
          <div className="grid sm:grid-cols-3 gap-px bg-line border border-line">
            {EDUCATION.map((edu) => (
              <article key={edu.degree} className="reveal bg-surface p-6">
                <h4 className="text-sm font-semibold text-ink tracking-tight mb-1">{edu.degree}</h4>
                <p className="text-xs text-muted">{edu.school}</p>
                <p className="text-[11px] text-faint mt-2">{edu.period}</p>
                <p className="text-xs text-muted mt-3 leading-relaxed">{edu.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
