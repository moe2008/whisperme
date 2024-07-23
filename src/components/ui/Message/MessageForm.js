import React, { useState } from "react";
import { supabase } from "@/helper/supabaseClient";
import { useChat } from "@/context/ChatContext";
import { useAuth } from "@/context/AuthContext";

const MessageForm = ({ setMessages }) => {
  const [newMessage, setNewMessage] = useState("");
  const { receiverId } = useChat();
  const { user } = useAuth();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const { data, error } = await supabase
      .from("messages")
      .insert([
        { sender_id: user.id, receiver_id: receiverId, content: newMessage },
      ]);

    if (error) {
      console.error("Error sending message:", error);
    } else {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          sender_id: user.id,
          receiver_id: receiverId,
          content: newMessage,
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full p-2 h-1/3 flex items-center justify-evenly md:gap-4 relative">
      <form
        onSubmit={sendMessage}
        className="w-full h-full flex flex-col md:flex-row items-center justify-around"
      >
        <textarea
          className="w-full md:w-4/5 h-4/5 rounded-md p-2 resize-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-mainblue md:h-3/5 w-full md:w-1/6 m-2 flex items-center justify-center rounded-md text-beigewhite cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
