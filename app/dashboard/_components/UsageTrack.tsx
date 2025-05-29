"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function UsageTrack({ usage }: { usage: number }) {
  const maxCredits = 10000;
  const percent = Math.min((usage / maxCredits) * 100, 100);

  return (
    <div className="m-5">
      <div className="bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-gradient-to-tr from-[rgb(142,234,255)] to-[rgb(121,159,213)] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-1">
          {usage}/{maxCredits} Credit Used
        </h2>
      </div>
      <Link href={"/dashboard/billing"}>
        <Button variant={"secondary"} className="w-full my-3">
          Upgrade
        </Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
