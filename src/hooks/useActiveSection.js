import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/site';

export function useActiveSection() {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = [
      { id: 'home', el: document.getElementById('home') },
      ...NAV_LINKS.map(({ id }) => ({ id, el: document.getElementById(id) })),
    ].filter((s) => s.el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
