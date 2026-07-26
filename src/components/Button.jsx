export function PrimaryButton({ children, className = '', as: Tag = 'button', ...rest }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function GhostButton({ children, className = '', as: Tag = 'button', ...rest }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-line bg-transparent px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
