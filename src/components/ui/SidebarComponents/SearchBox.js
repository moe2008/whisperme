import React from "react";
import addSvg from "../../../files/addSvg.svg";

const SearchBox = () => {
  return (
    <div className="w-full bg-white flex flex-row items-center gap-2">
      <img src={addSvg.src} className="h-8 w-8 p-1 hover:cursor-pointer" />
      <h2 className="font-anderson text-mainblue">New Chat</h2>
    </div>
  );
};

export default SearchBox;
