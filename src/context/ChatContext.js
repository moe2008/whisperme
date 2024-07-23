import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [receiverId, setReceiverId] = useState(null);
  const [senderId, setSenderId] = useState(null);

  return (
    <ChatContext.Provider value={{ receiverId, setReceiverId, senderId, setSenderId }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
