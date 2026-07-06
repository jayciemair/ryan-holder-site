import { createClient } from "@supabase/supabase-js";

export type Memory = {
  id: string;
  name: string;
  message: string;
  image_url: string | null;
  created_at: string;
};

export function isMemoryBoardConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export function createMemoryAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Memory board is not configured.");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function createMemoryPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Memory board is not configured.");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function getApprovedMemories(): Promise<Memory[]> {
  if (!isMemoryBoardConfigured()) {
    return [];
  }

  const supabase = createMemoryPublicClient();
  const { data, error } = await supabase
    .from("memories")
    .select("id, name, message, image_url, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load memories:", error.message);
    return [];
  }

  return data ?? [];
}
