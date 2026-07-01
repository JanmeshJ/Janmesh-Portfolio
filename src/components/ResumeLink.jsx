import { useCallback } from 'react';
import { SITE } from '../data/site';

const RESUME_PATHS = [
  '/janmesh-joshi-resume.pdf',
];

async function findResumeUrl() {
  for (const path of RESUME_PATHS) {
    try {
      const res = await fetch(path, { method: 'HEAD' });
      if (res.ok) return path;
    } catch {
      // try next path
    }
  }
  return null;
}

export default function ResumeLink({ className, children, onClick, ...rest }) {
  const handleClick = useCallback(async (e) => {
    e.preventDefault();
    onClick?.(e);

    const url = await findResumeUrl();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    window.open(
      `mailto:${SITE.email}?subject=${encodeURIComponent('Resume request')}`,
      '_self'
    );
  }, [onClick]);

  return (
    <a
      href={SITE.resumePath}
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
