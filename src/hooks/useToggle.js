import { useEffect, useState } from "react";

export const useToggle = (value) => {
  const [state, setState] = useState(value);

  const useToggleHandler = (changeValue) => {
    setState(changeValue);
  };
  useEffect(() => {
    setState(value);
  }, [value]);

  return [state, useToggleHandler];
};
