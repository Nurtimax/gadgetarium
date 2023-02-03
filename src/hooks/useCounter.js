import { useState } from "react";

const useCounter = (
  initialValueCount,
  resetValueCount,
  maxNumberCount,
  minNumberCount
) => {
  const [count, setCount] = useState(initialValueCount);

  const plusHandler = () => {
    if (count === maxNumberCount) return;

    setCount(count + 1);
  };

  const minusHandler = () => {
    if (count === minNumberCount) return;

    setCount(count - 1);
  };

  const resetHandler = () => setCount(resetValueCount);

  return [count, plusHandler, minusHandler, resetHandler];
};

export default useCounter;
