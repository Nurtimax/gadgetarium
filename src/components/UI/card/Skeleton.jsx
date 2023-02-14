import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={5}
    width="220px"
    height="500px"
    viewBox="0 0 250 600"
    backgroundColor="#b9b6b6"
    foregroundColor="#d9d9d9"
    {...props}
  >
    <rect x="40" y="90px" rx="0" ry="0" width="160px" height="190px" />
    <circle cx="30" cy="10" r="10" />
    <circle cx="180" cy="10" r="10" />
    <circle cx="210" cy="10" r="10" />
    <rect x="0" y="375" rx="10" ry="10" width="167" height="10" />
    <rect x="0" y="410" rx="10" ry="10" width="200" height="15" />
    <rect x="0" y="440" rx="10" ry="10" width="200" height="10" />
    <rect x="5" y="480" rx="15" ry="15" width="90px" height="50px" />
    <rect x="121" y="480" rx="10" ry="10" width="100px" height="50px" />
  </ContentLoader>
);

export default Skeleton;
