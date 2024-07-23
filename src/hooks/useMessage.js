import { useEffect, useState } from "react";
import { supabase } from "@/helper/supabaseClient";
import { useChat } from "@/context/ChatContext";
import { useAuth } from "@/context/AuthContext";

const useMessages = () => {
  const { receiverId } = useChat();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (user?.id && receiverId) {
      fetchMessages();
      setupRealtimeSubscription();
    }
    return () => {
      supabase.removeAllChannels();
    };
  }, [user?.id, receiverId]);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .or(
        `and(sender_id.eq.${receiverId},receiver_id.eq.${user.id}),and(sender_id.eq.${user.id},receiver_id.eq.${receiverId})`
      )
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data);
    }
  }

  function setupRealtimeSubscription() {
    const messageListener = supabase
      .channel("public:messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const newMessage = payload.new;
          if (
            (newMessage.sender_id === user.id &&
              newMessage.receiver_id === receiverId) ||
            (newMessage.sender_id === receiverId &&
              newMessage.receiver_id === user.id)
          ) {
            setMessages((currentMessages) => [...currentMessages, newMessage]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messageListener);
    };
  }

  return { messages, setMessages };
};

export default useMessages;
