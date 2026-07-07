import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <UserProfile routing="hash" />
    </div>
  );
}

export default Settings;
