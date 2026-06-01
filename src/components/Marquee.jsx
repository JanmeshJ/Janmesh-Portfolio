import { MARQUEE_ITEMS } from '../data/site';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y border-line py-4 bg-surface" aria-hidden="true">
      <div className="flex gap-14 animate-marquee motion-reduce:animate-none whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-14 shrink-0">
            <span className="eyebrow">{item}</span>
            <span className="w-1 h-1 bg-faint" />
          </span>
        ))}
      </div>
    </div>
  );
}
