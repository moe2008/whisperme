import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = "https://egyrbootpjlhztejresr.supabase.co";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const signIn = async (email, password) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signUp = async (email, password) => {
  return supabase.auth.signUp({ email, password });
};

export const signOut = async () => {
  return supabase.auth.signOut();
};
