export default function ScrollProgress({ progress }) {
  return (
    <div
      className="fixed top-0 left-0 h-px z-[60] bg-accent transition-[width] duration-75 motion-reduce:transition-none"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    />
  );
}
