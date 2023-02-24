import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1.5}
    width="35vh"
    height="55vh"
    viewBox="0 0 50vh 200vh"
    backgroundColor="#d8d4d4"
    foregroundColor="#888686"
    {...props}
  >
    <rect x="0" y="2" rx="10" ry="10" width="100%" height="100%" />
  </ContentLoader>
);

export default Skeleton;
