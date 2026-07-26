export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-[26px] bg-teal" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
