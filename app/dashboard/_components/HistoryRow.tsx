"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import moment from "moment";

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
  return (
    <div className="grid grid-cols-7 my-5 py-3 px-3 border-b">
      <h2 className="col-span-2 flex gap-2 items-center">
        <Image src={icon} width={25} height={25} alt={name} />
        {name}
      </h2>
      <h2 className="col-span-2 line-clamp-3">{item?.aiResponse}</h2>
      <h2>{item?.createdAt ? moment(item.createdAt).format("ll") : "N/A"}</h2>
      <h2>{item?.aiResponse?.split(" ").length}</h2>
      <h2>
        <Button
          className="bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)]"
          onClick={() => navigator.clipboard.writeText(item?.aiResponse)}
        >
          Copy
        </Button>
      </h2>
    </div>
  );
}
