import React, { useState } from "react";
import Button from "../ui/Button";
import { signIn } from "@/helper/supabaseClient";
import { useRouter } from "next/router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const login = async () => {
    try {
      const { error } = await signIn(email, password);
      if (error) {
        setMessage("Invalid Login Data");
      } else {
        router.push("/app");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error");
    }
  };

  return (
    <div className="md:w-1/3 w-4/5 min-h-64 max-h-full bg-mainblue rounded-lg shadow-2xl">
      <div className="w-full min-h-1/5 flex items-center justify-center p-4">
        <h1 className="font-aloha text-3xl text-mainbeige">Login</h1>
      </div>
      <div className="w-full flex items-center justify-center flex-col p-4 gap-4 font-anderson text-beigewhite">
        <div>
          <h2>E-Mail</h2>
          <input
            className="rounded-md text-mainblue"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h2>Password</h2>
          <input
            className="rounded-md text-mainblue"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button text="Login" onClick={login} />
        <h3>
          Dont have account?{" "}
          <a className="font-aloha" href="/register">
            Sign up
          </a>
        </h3>
        {message && <h3 className="text-red-950">{message}</h3>}
      </div>
    </div>
  );
};

export default LoginScreen;
