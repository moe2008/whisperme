import React from "react";
import MessageList from "./Message/MessageList";
import MessageForm from "./Message/MessageForm";
import useMessages from "@/hooks/useMessage";

const Messages = () => {
  const { messages, setMessages } = useMessages();

  return (
    <>
      <MessageList messages={messages} />
      <MessageForm setMessages={setMessages} />
    </>
  );
};

export default Messages;

