import { supabase } from "./supabaseClient";

export const fetchUser = async () => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: true });

  return data;
};
