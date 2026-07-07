import { handleSectionClick } from '../utils/scroll';
import { trackEvent } from '../utils/analytics';

export default function SectionLink({ href, children, className, onNavigate, ...rest }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        trackEvent('nav_link_click', { href });
        handleSectionClick(e, href, onNavigate);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
