import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Enable image optimization
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },

  // Enable compression
  compress: true,

  // SEO and metadata
  poweredByHeader: false,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects (can add later)
  async redirects() {
    return [];
  },

  // Rewrites (can add later)
  async rewrites() {
    return [];
  },
};

export default nextConfig;
