"use client";

import { FileClock, Home, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { useUsage } from "./UsageContext";

function SideNav() {
  // function SideNav({ usage }: { usage: number }) {
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
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="relative flex justify-center items-center hover:brightness-110">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/quillsparkLogo.svg"}
            alt="logo"
            width={50}
            height={50}
          />
          <span className="text-2xl font-extrabold bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] bg-clip-text text-transparent tracking-tight hover:brightness-110 transition-transform duration-200 ease-in-out">
            QuillSpark
          </span>
        </Link>
      </div>
      <hr className="my-6 border" />
      <div className="mt-6">
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.name}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] hover:text-white rounded-lg cursor-pointer items-center ${
                path == menu.path &&
                "bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] text-white"
              }`}
            >
              <menu.icon className="h-7 w-7" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        {/* <UsageTrack /> */}
        <UsageTrack usage={usage} />
      </div>
    </div>
  );
}

export default SideNav;
