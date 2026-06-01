import { useState, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WORDS = ['Ship', 'Measure', 'Learn'];
const DURATION = 900;

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return undefined;
    }

    const start = performance.now();
    let raf;

    const tick = (now) => {
      const c = Math.min(Math.round(((now - start) / DURATION) * 100), 100);
      setCount(c);
      if (c < 100) raf = requestAnimationFrame(tick);
      else setTimeout(onComplete, 300);
    };

    raf = requestAnimationFrame(tick);
    const iv = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 650);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-void flex flex-col" role="status" aria-live="polite" aria-label="Loading">
      <div className="absolute top-8 left-8 eyebrow">JJ · 2026</div>

      <div className="flex-1 flex items-center justify-center">
        <p className="font-display text-5xl sm:text-6xl text-ink">
          {WORDS[wordIdx]}<span className="text-accent">.</span>
        </p>
      </div>

      <div className="absolute bottom-16 right-10 font-display text-6xl text-faint tabular-nums">
        {String(count).padStart(3, '0')}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-line">
        <div className="h-full bg-accent transition-[width] duration-75" style={{ width: `${count}%` }} />
      </div>
    </div>
  );
}
