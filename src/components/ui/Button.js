import React from "react";

const Button = (props) => {
  return (
    <a
      class="group flex h-min max-w-96 min-w-32 items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-anderson py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-mainbeige border-b-beigewhite disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-mainblue border-b-4 hover:border-0 active:border-0 active:bg-accentblue active:text-gray-300 text-sm sm:text-md hover:cursor-pointer"
      onClick={props.onClick}
    >
      {props.text}
    </a>
  );
};

export default Button;
