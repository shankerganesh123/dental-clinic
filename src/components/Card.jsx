export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}
