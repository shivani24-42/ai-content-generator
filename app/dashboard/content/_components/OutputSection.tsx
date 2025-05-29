import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef = useRef<Editor | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] bg-clip-text text-transparent">
          Your Result
        </h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          {copied ? (
            <>
              <Check className="w-4 h-4" /> Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy
            </>
          )}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here!"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
