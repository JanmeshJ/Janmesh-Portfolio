import { ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../data/site';
import SectionLink from './SectionLink';
import ResumeLink from './ResumeLink';

export default function Nav({ scrolled, activeId, menuOpen, onMenuOpen }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 motion-reduce:transition-none ${
        scrolled ? 'bg-void/95 border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        <SectionLink
          href="#home"
          className="font-display text-lg text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
          aria-label="Home"
        >
          Janmesh Joshi
        </SectionLink>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <SectionLink
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${
                activeId === l.id
                  ? 'text-ink border-b border-accent pb-0.5'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {l.label}
            </SectionLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <ResumeLink className="text-sm text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 15V3m0 0L7 8m5-5 5 5M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            </svg>
            CV
          </ResumeLink>
          <SectionLink
            href="#contact"
            className="text-sm text-ink inline-flex items-center gap-1 hover:text-accent transition-colors"
          >
            Contact <ArrowUpRight size={13} aria-hidden="true" />
          </SectionLink>
        </div>

        <button
          type="button"
          onClick={onMenuOpen}
          className="md:hidden p-2 text-muted hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
