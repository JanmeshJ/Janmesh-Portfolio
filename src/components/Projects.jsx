import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { MetricChips, CaseStudyBlock } from './CaseStudy';
import { PROJECTS } from '../data/projects';

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const href = project.link || project.github;
  const hasCaseStudy = Boolean(project.caseStudy);

  const rowContent = (
    <div className="relative grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto] gap-5 sm:gap-10 py-9 sm:py-11 items-start">
      <span className="text-sm font-sans text-faint tabular-nums pt-1">{project.num}</span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <h3 className={`project-title transition-colors duration-200 ${hovered ? 'text-accent' : 'text-ink'}`}>
            {project.name}
          </h3>
          <span className="text-sm text-muted font-sans">{project.subtitle}</span>
        </div>
        <MetricChips metrics={project.metrics} />
        <p className="text-sm text-muted leading-relaxed max-w-xl mb-3">{project.description}</p>
        {project.architecture && (
          <p className="text-[11px] text-faint font-sans mb-3">{project.architecture}</p>
        )}
        {project.privateNote && (
          <p className="text-xs text-faint italic mb-3">{project.privateNote}</p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] text-faint">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end gap-3 shrink-0 pt-1">
        <span className="text-[11px] text-faint font-sans">{project.year}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint hover:text-ink transition-colors"
            aria-label={`Open ${project.name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </div>
  );

  const className = 'group block border-b border-line transition-colors hover:bg-surface focus-within:bg-surface reveal';

  return (
    <article
      className={className}
      style={{ transitionDelay: `${index * 0.06}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {rowContent}

      {hasCaseStudy && (
        <div className="px-6 sm:px-10 pb-6 -mt-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-muted hover:text-ink underline-offset-4 hover:underline transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? 'Hide case study' : 'Read case study'}
          </button>
        </div>
      )}

      {expanded && project.caseStudy && (
        <div className="pb-8 px-6 sm:px-10 sm:pl-[calc(56px+2.5rem)]">
          <div className="border-l border-line pl-6 space-y-5 max-w-2xl">
            <div>
              <p className="eyebrow mb-2">Problem</p>
              <p className="text-sm text-muted leading-relaxed">{project.caseStudy.problem}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Outcome</p>
              <p className="text-sm text-muted leading-relaxed">{project.caseStudy.outcome}</p>
            </div>
            {project.caseStudy.learned && (
              <p className="text-sm text-ink italic border-l-2 border-accent pl-4">{project.caseStudy.learned}</p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const featured = PROJECTS[0];
  const echoVerse = PROJECTS[1];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01"
          label="Selected Work"
          title={{ serif: 'Production systems', main: 'Projects' }}
          description="Mobile apps, cloud APIs, and ML pipelines, shipped end-to-end."
        />

        <div className="reveal panel mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-line">
              <p className="eyebrow text-accent mb-4">Flagship</p>
              <h3 className="section-heading mb-3">{featured.name}</h3>
              <MetricChips metrics={featured.metrics} />
              <p className="text-sm text-muted leading-relaxed mb-6 max-w-md">{featured.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-8 text-[11px] text-faint">
                {featured.highlights?.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="flex gap-4">
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                  mynextroom.ie <ExternalLink size={12} aria-hidden="true" />
                </a>
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs">
                  <Github size={13} aria-hidden="true" /> Code
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-6 lg:p-10 bg-surface-2 min-h-[280px] border-t lg:border-t-0 lg:border-l border-line overflow-hidden">
              {featured.img && (
                <img
                  src={featured.img}
                  alt="MyNextRoom mobile app screenshot"
                  className="max-h-[440px] w-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>

        <CaseStudyBlock study={featured.caseStudy} title={featured.name} />

        <div className="reveal panel mb-12 mt-16 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] overflow-hidden border-b lg:border-b-0 lg:border-r border-line bg-surface-2">
              {echoVerse.img && (
                <img
                  src={echoVerse.img}
                  alt="EchoVerse speech-to-text application"
                  className="w-full h-full object-cover opacity-95"
                  loading="lazy"
                />
              )}
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-sm text-faint font-sans mb-2">{echoVerse.num}</span>
              <h3 className="project-title mb-2">{echoVerse.name}</h3>
              <MetricChips metrics={echoVerse.metrics} />
              <p className="text-sm text-muted mb-4 leading-relaxed">{echoVerse.description}</p>
              <a href={echoVerse.link} target="_blank" rel="noopener noreferrer" className="link-underline text-sm w-fit inline-flex items-center gap-1.5">
                Live demo <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-line">
          {PROJECTS.slice(2).map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
