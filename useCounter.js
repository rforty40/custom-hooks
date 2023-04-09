import { useState } from "react";

export const useCounter = (inititalValue = 10) => {
  const [counter, setCounter] = useState(inititalValue);

  const increment = (value = 1) => {
    // console.log(value);
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    counter > 0 && setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(inititalValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
