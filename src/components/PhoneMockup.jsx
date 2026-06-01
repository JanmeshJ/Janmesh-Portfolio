export default function PhoneMockup() {
  const listings = [
    { price: '€900' },
    { price: '€750' },
    { price: '€1100' },
  ];

  return (
    <div className="relative mx-auto shrink-0 w-[130px]" aria-hidden="true">
      <div className="border border-line bg-void p-1.5">
        <div className="border border-line overflow-hidden bg-surface aspect-[9/19]">
          <div className="w-full h-full flex flex-col p-2 gap-2">
            <div className="flex justify-between items-center px-0.5">
              <span className="text-[5px] text-faint font-sans">9:41</span>
              <div className="w-3 h-1 bg-muted" />
            </div>
            <p className="text-[6px] font-medium text-ink px-0.5">MyNextRoom</p>
            <div className="h-3.5 border border-line flex items-center px-1.5">
              <div className="h-0.5 bg-faint flex-1" />
            </div>
            {listings.map((item, i) => (
              <div key={i} className="border border-line flex h-9 overflow-hidden">
                <div className="w-10 shrink-0 bg-surface-2 border-r border-line" />
                <div className="flex flex-col justify-center px-1.5 flex-1 gap-1">
                  <div className="h-0.5 bg-faint w-[70%]" />
                  <div className="h-0.5 bg-line w-1/2" />
                </div>
                <div className="flex items-center pr-1.5">
                  <span className="text-[5px] text-accent font-sans">{item.price}</span>
                </div>
              </div>
            ))}
            <div className="mt-auto flex justify-around border-t border-line pt-1.5 text-[7px] text-faint">
              <span className="text-accent">⌂</span>
              <span>♡</span><span>✉</span><span>☰</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
