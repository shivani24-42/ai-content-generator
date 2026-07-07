"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import moment from "moment";
import { useState } from "react";
import { Check } from "lucide-react";

interface HistoryRowProps {
  item: {
    id: number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
  };
  name: string;
  icon: string;
}

export default function HistoryRow({ item, name, icon }: HistoryRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Create a temporary element to safely extract plain text with proper newlines
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = item?.aiResponse || "";
    const cleanText = tempDiv.innerText || tempDiv.textContent || "";
    
    navigator.clipboard.writeText(cleanText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-7 my-2 py-4 px-4 border-b border-slate-200 hover:bg-slate-50 transition-colors rounded-lg text-slate-600 items-center">
      <h2 className="col-span-2 flex gap-3 items-center font-medium text-slate-800">
        <Image src={icon} width={25} height={25} alt={name} />
        {name}
      </h2>
      <h2 className="col-span-2 line-clamp-3">{item?.aiResponse?.replace(/<[^>]*>?/gm, '')}</h2>
      <h2>{item?.createdAt ? moment(item.createdAt).format("ll") : "N/A"}</h2>
      <h2>{item?.aiResponse?.split(" ").length}</h2>
      <h2>
        <Button
          className="bg-gradient-to-r from-primary to-cta text-white border-0 shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:scale-105 transition-all text-sm py-2 px-4 w-24"
          onClick={handleCopy}
        >
          {copied ? (
            <span className="flex items-center gap-1"><Check className="w-4 h-4"/> Copied!</span>
          ) : (
            "Copy"
          )}
        </Button>
      </h2>
    </div>
  );
}
