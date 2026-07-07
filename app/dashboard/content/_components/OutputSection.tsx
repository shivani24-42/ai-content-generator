import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { marked } from "marked";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editor = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="card h-full flex flex-col p-0 overflow-hidden shadow-md">
      <div className="flex justify-between items-center p-5 border-b border-slate-200 bg-slate-50 rounded-t-xl">
        <h2 className="font-bold text-lg text-slate-800 tracking-tight">
          Your Result
        </h2>
        <Button className="flex gap-2 bg-white text-slate-800 hover:bg-slate-100 transition-all border border-slate-200 shadow-sm hover:shadow-md" onClick={handleCopy}>
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" /> Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy
            </>
          )}
        </Button>
      </div>
      <JoditEditor
        ref={editor}
        value={marked.parse(
          (aiOutput || "Your result will appear here!").replace(/```[a-zA-Z]*\n([\s\S]*?)```/, '$1').replace(/```/g, '')
        ) as string}
        config={{
          height: 600,
        }}
      />
    </div>
  );
}

export default OutputSection;
