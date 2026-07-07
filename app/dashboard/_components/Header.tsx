"use client";

import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();

  // Only show header on the main dashboard page
  if (pathname !== "/dashboard") {
    return null;
  }

  return (
    <div className="h-[80px] px-6 border-b border-gray-200 bg-white flex justify-between items-center z-10 relative text-black">
      <div className="flex gap-2 items-center p-2 border border-gray-200 rounded-lg max-w-lg w-[300px] bg-gray-50 transition-all duration-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/50 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        <Search className="text-gray-500 w-5 h-5 ml-1" />
        <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full text-black placeholder:text-gray-500" />
      </div>
      <div className="flex justify-between gap-5 p-2 items-center">
        <h2 className="flex items-center justify-center bg-gradient-to-r from-primary to-cta text-white rounded-full text-xs py-2 px-4 font-bold transition-all hover:scale-105 cursor-pointer shadow-[0_4px_10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]">
          🔥 Join membership just for $9.99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
