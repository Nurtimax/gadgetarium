import { useState } from "react";

const useDropDown = () => {
  const [state, setState] = useState(null);

  const toggleHandler = (e) => {
    if (!state) {
      return setState(e.target);
    }
    return setState(null);
  };

  return [state, toggleHandler];
};

export default useDropDown;
