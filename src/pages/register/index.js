import React from "react";
import RegisterScreen from "@/components/layout/RegisterScreen";
import LogoDark from "@/components/ui/LogoDark";

const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-mainbeige">
      <LogoDark />
      <RegisterScreen />
    </div>
  );
};

export default index;
