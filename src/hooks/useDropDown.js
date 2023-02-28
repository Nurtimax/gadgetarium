import { useState } from "react";

const useDropDown = () => {
  const [state, setState] = useState(null);

  const open = Boolean(state);

  const setStateHandler = (e) => {
    if (!state) {
      return setState(e?.target);
    }
    return setState(null);
  };

  return [state, setStateHandler, open];
};

export default useDropDown;
