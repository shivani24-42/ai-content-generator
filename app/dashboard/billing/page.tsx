import React from "react";
import { Button } from "@/components/ui/button";

export default function Billing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-800">
        Upgrade Your Plan
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Unlock unlimited AI content generation, higher word limits, and priority
        support by upgrading your plan.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="card p-6 border border-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
          <h2 className="font-bold text-2xl mb-2 text-slate-800">Pro Plan</h2>
          <p className="mb-2 text-gray-500">
            Unlimited credits, priority support, and more!
          </p>
          <div className="mb-4 text-2xl font-bold">
            $19<span className="text-base font-normal">/month</span>
          </div>
          <Button className="w-full btn-primary text-lg py-6 border-none text-white hover:shadow-md">
            Upgrade Now
          </Button>
        </div>
        <div className="card p-6 border border-slate-100 opacity-70 hover:opacity-100 transition-opacity">
          <h2 className="font-bold text-2xl mb-2 text-slate-800">Free Plan</h2>
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
