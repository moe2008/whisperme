import React, { useEffect, useState } from "react";
import Sidebar from "../ui/Sidebar";
import Logo from "../ui/Logo";
import Messages from "../ui/Messages";
import { fetchUserData } from "@/helper/fetchSingleUser";
import { useChat } from "@/context/ChatContext";
import leftIcon from "../../files/leftArrow.svg"
import { closeChat } from "@/helper/resizer";
const AppPage = () => {
  const { receiverId } = useChat();
  const [username, setUsername] = useState();
  useEffect(() => {
    const getUserData = async () => {
      if (receiverId) {
        const data = await fetchUserData(receiverId);
        if (data) {
          setUsername(data.username);
        }
      }
    };

    getUserData();
  }, [receiverId]);

  const dummy = (
    <div className="w-full flex items-center gap-4 p-4">
      <img src={leftIcon.src} className="w-4 h-4 hover:cursor-pointer" onClick={closeChat}/>
      <div>
        <img
          src="https://img.freepik.com/fotos-kostenlos/3d-illustration-eines-teenagers-mit-lustigem-gesicht-und-brille_1142-50955.jpg?w=740&t=st=1721305069~exp=1721305669~hmac=369615d3d2a3347075f2d76a37930f1993e32e9ce1a8ba878e5517bf36456482"
          className="h-16 w-16 p-1 rounded-3xl"
        />
      </div>
      <h2 className="font-anderson text-mainblue text-2xl">{username}</h2>
    </div>
  );
  return (
    <div className="flex h-screen w-screen overflow-x-hidden font-anderson">
      <Sidebar />
      <div className="bg-mainblue w-0 md:w-full h-full flex flex-col items-center justify-around chat">
        <Logo />
        <div className="bg-mainbeige w-4/5 h-4/5 rounded-xl mb-8 flex flex-col">
          {dummy}
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default AppPage;
