export default function ToothMark({ className = 'h-8 w-8', filled = true }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 9c-5.4 0-8.2 3.6-12.6 3.6-6.4 0-11.4-4.3-11.4 6.4 0 12 4.2 22.6 8.4 30.8 2.8 5.4 5.4 7.2 7.2 7.2 2.4 0 3-7.4 4-13.2.8-4.6 1.8-6.8 4.4-6.8s3.6 2.2 4.4 6.8c1 5.8 1.6 13.2 4 13.2 1.8 0 4.4-1.8 7.2-7.2 4.2-8.2 8.4-18.8 8.4-30.8 0-10.7-5-6.4-11.4-6.4C40.2 12.6 37.4 9 32 9Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 2.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}
