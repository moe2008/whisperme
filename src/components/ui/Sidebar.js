import React from "react";
import ProfileBox from "./SidebarComponents/ProfileBox";
import Divider from "./Divider";
import ChatList from "./SidebarComponents/ChatList";
import BottomBar from "./SidebarComponents/BottomBar";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { fetchUserData } from "@/helper/fetchSingleUser";
const Sidebar = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const getUserData = async () => {
      if (user?.id) {
        const data = await fetchUserData(user.id);
        if (data) {
          setUserData(data.username);
        }
      }
    };

    getUserData();
  }, [user?.id]);


  return (
    <div
      className="w-full md:w-1/5 h-full flex flex-col bg-mainbeige md:pt-4 pr-2 pl-2 md:gap-3 justify-around sb"
    >
      <ProfileBox name={userData} />
      <Divider />
      <ChatList />
      <Divider />
      <BottomBar />
    </div>
  );
};

export default Sidebar;
