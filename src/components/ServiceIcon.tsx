import type { ServiceIcon as IconKey } from '../data/services';

const ICONS: Record<IconKey, JSX.Element> = {
  engineering: (
    <>
      <path d="M4 20l8-16 8 16" />
      <path d="M8 14h8" />
      <circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  general: (
    <>
      <path d="M3 12l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  plumbing: (
    <>
      <path d="M5 4v6a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v2" />
      <circle cx="5" cy="4" r="2" />
      <path d="M16 18l3 3 3-3" />
    </>
  ),
  electrical: (
    <>
      <path d="M13 3L4 14h7l-1 7 9-11h-7z" />
    </>
  ),
  security: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tech: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
      <path d="M9 20l1-3M15 20l-1-3" />
    </>
  ),
  misc: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  climate: (
    <>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  paint: (
    <>
      <path d="M5 3h12v6H5z" />
      <path d="M5 9v3a2 2 0 0 0 2 2h2v3a2 2 0 0 0 2 2h2v-8" />
    </>
  ),
  garden: (
    <>
      <path d="M12 22V10" />
      <path d="M12 14c-3 0-6-2-6-6 3 0 6 2 6 6z" />
      <path d="M12 12c3 0 6-2 6-6-3 0-6 2-6 6z" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: IconKey }) {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden role="img">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[name]}
      </g>
    </svg>
  );
}
