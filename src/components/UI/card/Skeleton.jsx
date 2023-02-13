import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={510}
    viewBox="0 0 300 500"
    backgroundColor="#b9b6b6"
    foregroundColor="#d9d9d9"
    {...props}
  >
    <rect x="55" y="55" rx="0" ry="0" width="150" height="180" />
    <circle cx="12" cy="12" r="12" />
    <circle cx="220" cy="10" r="10" />
    <circle cx="259" cy="10" r="10" />
    <rect x="0" y="300" rx="10" ry="10" width="87" height="10" />
    <rect x="0" y="328" rx="10" ry="10" width="200" height="15" />
    <rect x="0" y="360" rx="10" ry="10" width="157" height="10" />
    <rect x="0" y="395" rx="15" ry="15" width="100" height="40" />
    <rect x="111" y="395" rx="10" ry="10" width="151" height="40" />
  </ContentLoader>
);

export default Skeleton;
