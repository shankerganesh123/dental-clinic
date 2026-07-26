const BUMPS = 12;
const BUMP_WIDTH = 1200 / BUMPS;
const RADIUS = BUMP_WIDTH / 2;
const ARCS = Array.from({ length: BUMPS }, () => `a${RADIUS},${RADIUS} 0 0 1 ${BUMP_WIDTH},0`).join(' ');
const PATH = `M0,0 ${ARCS} V60 H0 Z`;

export default function SmileDivider({ fill = '#FFFFFF', flip = false, className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`block w-full h-8 md:h-12 ${flip ? 'rotate-180' : ''}`}
      >
        <path d={PATH} fill={fill} />
      </svg>
    </div>
  );
}
