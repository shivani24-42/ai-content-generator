import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex justify-between gap-5 p-2">
        <h2 className="flex items-center justify-center bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] p-1 rounded-full text-xs text-white px-2">
          🔥Join membership just for $9.99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
