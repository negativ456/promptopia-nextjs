export const HeaderSkeleton = () => (
  <svg
    role="img"
    width="100%"
    height="49"
    viewBox="0 0 1152 49"
    preserveAspectRatio="none"
  >
    <rect
      style={{ fill: 'url("#fill")' }}
      x="0"
      y="0"
      rx="5"
      ry="5"
      width="1152"
      height="49"
    />
    <defs>
      <linearGradient id="fill">
        <stop offset="0.599964" stopColor="#d4d3d3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stopColor="#ffffff" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stopColor="#d4d3d3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
);
