import React from "react";
import Logo from "../ui/Logo";
import LandingContent from "../ui/LandingContent";

const LandingPage = () => {
  return (
    <div className="flex h-screen w-screen bg-mainblue flex-col items-center relative">
      <Logo />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
