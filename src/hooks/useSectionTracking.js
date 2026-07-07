import { useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

const SECTION_IDS = ['home', 'about', 'projects', 'experience', 'skills', 'content', 'contact'];

export function useSectionTracking() {
  useEffect(() => {
    const startTimes = new Map();

    const flush = (id) => {
      const start = startTimes.get(id);
      if (start === undefined) return;
      startTimes.delete(id);
      const seconds = Math.round((performance.now() - start) / 1000);
      if (seconds >= 1) trackEvent('section_engagement', { section: id, seconds });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) startTimes.set(id, performance.now());
          else flush(id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    sections.forEach((el) => observer.observe(el));

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        [...startTimes.keys()].forEach(flush);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', onVisibilityChange);
      [...startTimes.keys()].forEach(flush);
    };
  }, []);
}
