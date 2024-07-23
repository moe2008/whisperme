import React from "react";

const SenderMessage = (props) => {
  return (
    <div className="bg-beigewhite w-1/2 md:w-1/3 text-mainblue p-2 rounded-md m-1">
      <h1>{props.msg}</h1>
    </div>
  );
};

export default SenderMessage;
