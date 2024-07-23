import React from "react";

const ReceiverMessage = (props) => {
  return (
    <div className="md:ml-70p ml-45p bg-mainblue  text-beigewhite p-2 rounded-md m-1">
      <h1>{props.msg}</h1>
    </div>
  );
};

export default ReceiverMessage;
