import React from "react";
import useCall from "../hooks/useCall";
import moment from "moment";

const Card = ({ name }) => {
  const { info } = useCall(name);

  return (
    <div className="transition-all duration-300 hover:translate-y-2 shadow-lg relative bg-white rounded-lg m-2">
      <div
        className={`w-full rounded-t-lg h-10 p-2 flex items-center justify-center ${
          info.success ? "bg-emerald-600" : "bg-rose-500"
        }`}
      >
        <p className="text-white capitalize font-semibold">{name}</p>
      </div>
      <div
        className={`w-full text-white text-xs font-semibold p-2 flex items-center justify-center ${
          info.success ? "bg-emerald-400" : "bg-rose-300"
        }`}
      >
        <p>{info.success ? info.message.slice(0, 7) : "Error 403"} </p>
      </div>

      {!info.success ? (
        <div className="w-full h-1/2 flex items-center justify-center flex-col text-center">
          <p className="text-xs font-semibold text-red-500">Outage</p>
          <p className="text-xs text-red-500">Forbidden</p>
        </div>
      ) : (
        <div>
          <div className="p-2 text-center text-xs w-full ">{info.hostname}</div>
          <div className="p-2 mb-4 text-center text-xs w-full">
            <p>{info.success && moment(info.time).format("LT")} </p>
          </div>
          <div className="absolute text-[10px] right-2 bottom-1">
            <p>{info.version} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
