import type { NextConfig } from "next";
import { buildContentSecurityPolicy } from "./lib/security/content-security-policy";

const contentSecurityPolicy = buildContentSecurityPolicy({
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  isDev: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Security headers on every page, including the Content-Security-Policy built above
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
