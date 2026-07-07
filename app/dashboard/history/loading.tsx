import { Loader2Icon } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Loader2Icon className="w-10 h-10 animate-spin text-primary mb-4" />
      <p className="text-slate-500 font-medium animate-pulse">Loading your history...</p>
    </div>
  );
}

export default Loading;
