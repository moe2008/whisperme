import React from "react";
import LoginScreen from "@/components/layout/LoginScreen";
import LogoDark from "@/components/ui/LogoDark";
const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-mainbeige">
      <LogoDark />
      <LoginScreen />
    </div>
  );
};

export default index;
