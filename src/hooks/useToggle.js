import { useEffect, useState } from "react";

export const useToggle = (value) => {
  const [status, setStatus] = useState(value);

  const useToggleHadler = (change) => {
    setStatus(change);
  };
  useEffect(() => {
    setStatus(value);
  }, [value]);

  return [status, useToggleHadler];
};
