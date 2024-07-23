import { supabase } from "./supabaseClient";


export const fetchUserData = async (id) => {
   
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching user data:", error);
    } else {
     return data;
    }
  };