import { SITE } from '../data/site';
import { ABOUT } from '../data/about';

export default function Footer() {
  const { availability } = ABOUT;

  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <p className="font-display text-sm text-ink mb-1">{SITE.name}</p>
          <p className="text-xs text-muted">{availability.roles}</p>
        </div>
        <p className="text-xs text-muted text-center lg:text-right max-w-sm leading-relaxed">
          {availability.status} · {availability.location} · {availability.start}
        </p>
        <p className="text-xs text-faint">© {new Date().getFullYear()} · {SITE.location}</p>
      </div>
    </footer>
  );
}
