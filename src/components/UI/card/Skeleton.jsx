import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={5}
    width="65%"
    height="100%"
    viewBox="0 0 250 600"
    backgroundColor="#b9b6b6"
    foregroundColor="#d9d9d9"
    {...props}
  >
    <rect x="50" y="5%" rx="0" ry="0" width="60%" height="25%" />
    <circle cx="20" cy="10" r="10" />
    <circle cx="180" cy="10" r="10" />
    <circle cx="210" cy="10" r="10" />
    <rect x="0" y="35%" rx="10" ry="10" width="167" height="10" />
    <rect x="0" y="40%" rx="10" ry="10" width="100%" height="15" />
    <rect x="0" y="49%" rx="10" ry="10" width="100%" height="10" />
    <rect x="0" y="60%" rx="15" ry="15" width="40%" height="7%" />
    <rect x="45%" y="60%" rx="10" ry="10" width="60%" height="7%" />
  </ContentLoader>
);

export default Skeleton;
