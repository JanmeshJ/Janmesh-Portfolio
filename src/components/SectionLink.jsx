import { handleSectionClick } from '../utils/scroll';

export default function SectionLink({ href, children, className, onNavigate, ...rest }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => handleSectionClick(e, href, onNavigate)}
      {...rest}
    >
      {children}
    </a>
  );
}
