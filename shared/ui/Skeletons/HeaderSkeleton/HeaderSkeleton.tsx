import ContentLoader from "react-content-loader";

export const HeaderSkeleton = () => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={49}
    viewBox="0 0 1152 49"
    backgroundColor="#d4d3d3"
    foregroundColor="#ffffff"
  >
    <rect x="0" y="0" rx="5" ry="5" width="1152" height="49" />
  </ContentLoader>
);
