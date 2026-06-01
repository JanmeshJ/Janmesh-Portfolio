import { useState, useCallback, useEffect } from 'react';
import { handleSectionClick } from './utils/scroll';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useActiveSection } from './hooks/useActiveSection';
import {
  LoadingScreen,
  ScrollProgress,
  Nav,
  MobileMenu,
  Hero,
  About,
  Stats,
  EditorialStrip,
  Experience,
  Projects,
  Skills,
  ContentSection,
  Contact,
  Footer,
} from './components';

export default function App() {
  const [loading, setLoading] = useState(process.env.NODE_ENV !== 'test');
  const [menuOpen, setMenuOpen] = useState(false);
  const { progress, scrolled } = useScrollProgress();
  const activeId = useActiveSection();

  useScrollReveal([loading]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      <div className={`min-h-screen bg-void text-zinc-50 ${loading ? 'overflow-hidden h-screen' : ''}`}>
        <a
          href="#main-content"
          onClick={(e) => handleSectionClick(e, '#main-content')}
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-ink focus:text-void focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>

        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress progress={progress} />

        <Nav scrolled={scrolled} activeId={activeId} menuOpen={menuOpen} onMenuOpen={() => setMenuOpen(true)} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />

        <main id="main-content">
          <Hero />
          <About />
          <Stats />
          <EditorialStrip />
          <Projects />
          <Experience />
          <Skills />
          <ContentSection />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
