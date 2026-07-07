import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className="card h-full flex flex-col gap-4 border-transparent group">
        <div className="p-3 bg-slate-100 border border-slate-200 w-fit rounded-lg group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
          <Image src={item.icon} alt="icon" width={40} height={40} className="transition-transform group-hover:scale-110" />
        </div>
        <div className="flex-grow flex flex-col">
          <h2 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-primary transition-colors">{item.name}</h2>
          <p className="text-slate-500 text-sm flex-grow line-clamp-3">{item.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
