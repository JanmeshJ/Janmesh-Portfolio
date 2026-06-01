import { Mail, Github, Linkedin, X } from 'lucide-react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { NAV_LINKS, SOCIAL } from '../data/site';
import SectionLink from './SectionLink';
import ResumeLink from './ResumeLink';

export default function MobileMenu({ open, onClose, activeId }) {
  const trapRef = useFocusTrap(open);
  if (!open) return null;

  const socialIcons = { LinkedIn: Linkedin, GitHub: Github, Email: Mail };

  return (
    <div
      ref={trapRef}
      id="mobile-menu"
      className="fixed inset-0 z-40 bg-void flex flex-col pt-24 px-8 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-6 p-2 text-muted hover:text-ink"
        aria-label="Close menu"
      >
        <X size={20} />
      </button>

      <nav className="border-t border-line pt-8" aria-label="Mobile navigation links">
        {NAV_LINKS.map((l) => (
          <SectionLink
            key={l.href}
            href={l.href}
            onNavigate={onClose}
            className={`block font-display text-4xl py-3 border-b border-line transition-colors ${
              activeId === l.id ? 'text-accent' : 'text-ink'
            }`}
          >
            {l.label}
          </SectionLink>
        ))}
      </nav>

      <ResumeLink
        onClick={onClose}
        className="font-display text-xl text-muted mt-8 inline-block"
      >
        Download CV
      </ResumeLink>

      <div className="mt-auto pb-12 flex gap-4">
        {SOCIAL.filter((s) => socialIcons[s.label]).map(({ label, href }) => {
          const Icon = socialIcons[label];
          const external = href.startsWith('http');
          return (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-muted hover:text-ink p-2"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
