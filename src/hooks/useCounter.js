import { useState } from "react";

const useCounter = (initialValue, resetValue, maxNumber, minNumber) => {
  const [count, setCount] = useState(initialValue);

  const plusHandler = () => {
    if (count === maxNumber) return;

    setCount(count + 1);
  };

  const minusHandler = () => {
    if (count === minNumber) return;

    setCount(count - 1);
  };

  const resetHandler = () => setCount(resetValue);

  return [count, plusHandler, minusHandler, resetHandler];
};

export default useCounter;
