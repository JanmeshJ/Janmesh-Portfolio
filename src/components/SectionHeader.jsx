function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="eyebrow text-accent">{number}</span>
      <div className="h-px flex-1 bg-line" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function SectionHeader({ number, label, title, description }) {
  return (
    <div className="reveal mb-14 lg:mb-16">
      <SectionLabel number={number}>{label}</SectionLabel>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <p className="section-heading-serif mb-2">{title.serif}</p>
          <h2 className="section-heading">{title.main}</h2>
        </div>
        {description && (
          <p className="text-sm text-muted leading-relaxed max-w-sm lg:pb-1">{description}</p>
        )}
      </div>
    </div>
  );
}

export { SectionLabel };
