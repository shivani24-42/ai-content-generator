import type { NextConfig } from "next";

// Node 22+ added a global localStorage that breaks many SSR libraries
// because they check `typeof localStorage !== 'undefined'` and assume they are in a browser.
if (typeof globalThis !== "undefined") {
  delete (globalThis as any).localStorage;
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
