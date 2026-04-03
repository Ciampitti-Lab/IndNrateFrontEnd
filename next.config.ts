import type { NextConfig } from "next";

/** Extra dev origins (comma-separated full URLs) e.g. http://192.168.1.5:3000 for phone-on-LAN testing. */
const extraDevOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "http://10.186.179.63:3000",
    ...extraDevOrigins,
  ],
};

export default nextConfig;
