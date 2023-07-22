import ContentLoader from "react-content-loader";

export const PromptSkeleton = () => (
  <ContentLoader
    speed={2}
    width={360}
    height={170}
    viewBox="0 0 360 170"
    backgroundColor="#d4d3d3"
    foregroundColor="#ffffff"
  >
    <circle cx="44" cy="44" r="20" />
    <rect x="75" y="24" rx="2" ry="2" width="200" height="15" />
    <rect x="75" y="44" rx="2" ry="2" width="200" height="15" />
    <circle cx="304" cy="38" r="14" />
    <rect x="24" y="75" rx="2" ry="2" width="310" height="50" />
    <rect x="24" y="140" rx="2" ry="2" width="100" height="15" />
  </ContentLoader>
);
