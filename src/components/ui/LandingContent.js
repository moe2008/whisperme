import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
const LandingContent = () => {
  const router = useRouter();
  return (
    <div className="absolute top-1/3 flex flex-col gap-6 items-center">
      <h1 className="font-anderson text-5xl text-mainbeige text-center tracking-widest">
        Chat with your{" "}
        <span className="font-aloha">
          Friends
          <br />& <br /> Colleagues
        </span>
      </h1>
      <Button text={"Try App"} onClick={() => router.push("/app")} />
    </div>
  );
};

export default LandingContent;
