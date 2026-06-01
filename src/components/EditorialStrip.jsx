import { EDITORIAL_STRIP } from '../data/about';

export default function EditorialStrip() {
  const { line, quote } = EDITORIAL_STRIP;

  return (
    <div className="border-y border-line bg-surface" aria-label="Current focus">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-muted">
          <span className="text-accent font-medium">Now · </span>
          {line}
        </p>
        <blockquote className="text-xs text-faint sm:text-right max-w-md sm:max-w-xs leading-relaxed">
          <span className="text-muted">&ldquo;{quote.text}&rdquo;</span>
          <cite className="not-italic block mt-1 text-faint">{quote.context}</cite>
        </blockquote>
      </div>
    </div>
  );
}
