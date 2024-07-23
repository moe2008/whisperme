import React, { useEffect, useState } from "react";
import ProfileBox from "./ProfileBox";
import { fetchUser } from "@/helper/fetchUser";
import { useChat } from "@/context/ChatContext";
import { openChat } from "@/helper/resizer";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const { setReceiverId } = useChat();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await fetchUser();
        setChats(data);
      } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll max-h-72 chatscroll">
      {Array.isArray(chats) &&
        chats.map((chat) => (
          <ProfileBox
            key={chat.id}
            name={chat.username}
            onClick={() => {
              setReceiverId(chat.id);
              openChat();
            }}
          />
        ))}
    </div>
  );
};

export default ChatList;
