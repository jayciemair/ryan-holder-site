import type { NextConfig } from "next";

function getSupabaseHost() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  if (!value) {
    return null;
  }

  try {
    return new URL(value).hostname;
  } catch {
    console.warn(
      "NEXT_PUBLIC_SUPABASE_URL is not a valid URL — memory board images will not be optimized until this is fixed.",
    );
    return null;
  }
}

const supabaseHost = getSupabaseHost();

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/memory", destination: "/", permanent: false }];
  },
  images: supabaseHost
    ? {
        remotePatterns: [
          {
            protocol: "https",
            hostname: supabaseHost,
            pathname: "/storage/v1/object/public/**",
          },
        ],
      }
    : undefined,
};

export default nextConfig;
