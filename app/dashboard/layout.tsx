import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { getUserUsage } from "../../utils/getUserUsage";
import { currentUser } from "@clerk/nextjs/server";
import { UsageProvider } from "./_components/UsageContext";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const usage = await getUserUsage(email);

  return (
    <UsageProvider initialUsage={usage}>
      <div className="min-h-screen">
        <div className="md:w-20 hidden md:block fixed z-50">
          <SideNav />
        </div>
        <div className="md:ml-20 transition-all duration-300">
          <Header />
          {children}
        </div>
      </div>
    </UsageProvider>
  );
}
