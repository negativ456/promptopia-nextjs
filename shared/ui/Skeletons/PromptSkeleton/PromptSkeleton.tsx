export const PromptSkeleton = () => (
  <svg
    role="img"
    width="360"
    height="170"
    viewBox="0 0 360 170"
    preserveAspectRatio="none"
  >
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{ fill: 'url("#fill")' }}
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <circle cx="44" cy="44" r="20" />
        <rect x="75" y="24" rx="2" ry="2" width="200" height="15" />
        <rect x="75" y="44" rx="2" ry="2" width="200" height="15" />
        <circle cx="304" cy="38" r="14" />
        <rect x="24" y="75" rx="2" ry="2" width="310" height="50" />
        <rect x="24" y="140" rx="2" ry="2" width="100" height="15" />
      </clipPath>
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
