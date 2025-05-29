import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { getUserUsage } from "../../utils/getUserUsage";
import { currentUser } from "@clerk/nextjs/server";
import { UsageProvider } from "./_components/UsageContext";

// export default async function layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const user = await currentUser();
//   const email = user?.primaryEmailAddress?.emailAddress || "";
//   const usage = await getUserUsage(email);

//   return (
//     <div className="bg-slate-100 h-screen">
//       <div className="md:w-64 hidden md:block fixed">
//         <SideNav usage={usage} />
//       </div>
//       <div className="md:ml-64">
//         <Header />
//         {children}
//       </div>
//     </div>
//   );
// }
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
      <div className="bg-slate-100 h-screen">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </UsageProvider>
  );
}
