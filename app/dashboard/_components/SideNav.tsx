"use client";

import { FileClock, Home, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { useUsage } from "./UsageContext";

function SideNav() {
  const { usage } = useUsage();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="h-screen relative border-r border-slate-200 bg-white group w-20 hover:w-64 transition-all duration-300 overflow-hidden flex flex-col shadow-sm">
      <div className="h-[80px] px-4 border-b border-slate-200 relative flex justify-start items-center hover:opacity-90 transition-opacity overflow-hidden shrink-0">
        <Link href="/" className="flex items-center">
          <div className="min-w-[40px] flex justify-center">
            <Image
              src={"/quillsparkLogo.svg"}
              alt="logo"
              width={40}
              height={40}
            />
          </div>

        </Link>
      </div>
      <div className="mt-6 px-4 flex-1">
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.name}>
            <div
              className={`flex gap-3 mb-2 p-3 rounded-lg cursor-pointer items-center transition-all duration-300 ease-in-out ${
                path == menu.path
                  ? "bg-gradient-to-r from-primary to-cta text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                  : "text-slate-900 hover:bg-slate-100 hover:text-primary hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              }`}
            >
              <menu.icon className="h-6 w-6 shrink-0" />
              <h2 className="text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ml-3">
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
        
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
