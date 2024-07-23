import React from "react";
import Button from "../ui/Button";

const RegisterScreen = () => {
  return (
    <div className="md:w-1/3 w-4/5 min-h-64 max-h-full bg-mainblue rounded-lg shadow-2xl">
      <div className="w-full min-h-1/5 flex items-center justify-center p-4">
        <h1 className="font-aloha text-3xl text-mainbeige">Register</h1>
      </div>
      <div className="w-full flex items-center justify-center flex-col p-4 gap-4 font-anderson text-beigewhite">
        <div>
          <h2>E-Mail</h2>
          <input className="rounded-md" />
        </div>
        <div>
          <h2>Password</h2>
          <input className="rounded-md" type="password" />
        </div>
        <Button text="Sign up" />
        <h3>
          Already have Account?{" "}
          <a className="font-aloha" href="/login">
            Sign in
          </a>
        </h3>
      </div>
    </div>
  );
};

export default RegisterScreen;
