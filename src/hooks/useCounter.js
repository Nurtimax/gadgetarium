import { useState } from "react";

const useCounter = (initialValueCount, maxNumberCount) => {
  const [count, setCount] = useState(initialValueCount);

  const plusHandler = () => {
    setCount(count + 1);
  };

  const minusHandler = () => {
    setCount(count - 1);
  };

  const isPlusDisabled = count === maxNumberCount;
  const isMinusDisabled = count === 1;

  return [count, plusHandler, minusHandler, isMinusDisabled, isPlusDisabled];
};

export default useCounter;
