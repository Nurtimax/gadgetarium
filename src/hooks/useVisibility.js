import { useState } from "react";

const useVisibility = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((prevState) => !prevState);
  };

  return [visibility, toggleVisibility];
};

export default useVisibility;
