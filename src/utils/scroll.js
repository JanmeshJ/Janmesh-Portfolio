export function scrollToSection(selector, { onDone } = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });

  if (window.location.hash !== selector) {
    window.history.replaceState(null, '', selector);
  }

  onDone?.();
}

export function handleSectionClick(e, selector, onDone) {
  e.preventDefault();
  scrollToSection(selector, { onDone });
}
