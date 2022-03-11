import axios from "axios";
import { useEffect, useState } from "react";
import useTimer from "./useTimer";

const useCall = (name) => {
  const [info, setInfo] = useState({});

  const { counter } = useTimer()

  useEffect(() => {
    if (counter === 0) {
      axios
        .get(`https://api.factoryfour.com/${name}/health/status`)
        .then((res) => {
          setInfo(res.data);
        });
    }
  }, [name, counter]);

  return { info };
};

export default useCall;
