import React from "react";
import useCall from "../hooks/useCall";

const Card = ({ name, message, success, hostname, time }) => {

  const { info } = useCall(name)

  return (
    <div className="border-2 border-black p-2 m-2">
      <p>{info.hostname ? info.hostname : "Error 403"} </p>
      <p> </p>
    </div>
  );
};

export default Card;
