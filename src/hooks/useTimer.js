import { useEffect, useState } from "react";

const useTimer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    if (counter === 0) setCounter(15)

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return { counter };
};

export default useTimer;
