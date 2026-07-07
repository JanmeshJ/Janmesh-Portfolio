import { SITE } from '../data/site';
import { trackEvent } from '../utils/analytics';

export default function ResumeLink({ className, children, onClick, ...rest }) {
  return (
    <a
      href={SITE.resumePath}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        trackEvent('cv_click');
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
