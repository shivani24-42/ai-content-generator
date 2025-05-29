import React from "react";
import { Button } from "@/components/ui/button";

export default function Billing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] bg-clip-text text-transparent">
        Upgrade Your Plan
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Unlock unlimited AI content generation, higher word limits, and priority
        support by upgrading your plan.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="p-5 border rounded-lg shadow bg-white">
          <h2 className="font-semibold text-xl mb-2">Pro Plan</h2>
          <p className="mb-2 text-gray-500">
            Unlimited credits, priority support, and more!
          </p>
          <div className="mb-4 text-2xl font-bold">
            $19<span className="text-base font-normal">/month</span>
          </div>
          <Button className="w-full bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] text-white">
            Upgrade Now
          </Button>
        </div>
        <div className="p-5 border rounded-lg shadow bg-white opacity-60">
          <h2 className="font-semibold text-xl mb-2">Free Plan</h2>
          <p className="mb-2 text-gray-500">
            10,000 credits/month, basic support
          </p>
          <div className="mb-4 text-2xl font-bold">
            $0<span className="text-base font-normal">/month</span>
          </div>
          <Button className="w-full" disabled>
            Current Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
