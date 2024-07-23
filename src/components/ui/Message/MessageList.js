import React from "react";
import SenderMessage from "../SenderMessage";
import ReceiverMessage from "../ReceiverMessage";
import { useAuth } from "@/context/AuthContext";

const MessageList = ({ messages }) => {
  const { user } = useAuth();

  return (
    <div className="w-full overflow-y-scroll h-3/5 p-4 msg">
      {messages.map((m) =>
        m.sender_id === user.id ? (
          <SenderMessage key={m.id} msg={m.content} />
        ) : (
          <ReceiverMessage key={m.id} msg={m.content} />
        )
      )}
    </div>
  );
};

export default MessageList;
