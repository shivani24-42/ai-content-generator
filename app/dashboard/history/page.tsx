import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import React from "react";
import HistoryRow from "../_components/HistoryRow";
import TEMPLATES from "@/app/(data)/Templates";

export interface HISTORY {
  [x: string]: any;
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();
  // Fetching the history list from the database
  const HistoryList: HISTORY[] = (
    await db
      .select({
        id: AIOutput.id,
        formData: AIOutput.formData,
        aiResponse: AIOutput.aiResponse,
        createdAt: AIOutput.createdAt,
        templateSlug: AIOutput.templateSlug, // Corrected the typo here
        createdBy: AIOutput.createdBy,
      })
      .from(AIOutput)
      .where(
        eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress ?? "")
      )
      .orderBy(desc(AIOutput.createdAt))
  ).map((item) => ({
    ...item,
    aiResponse: item.aiResponse ?? "",
    createdAt: item.createdAt ?? "",
  }));

  // Function to get the template name and icon by its slug
  const GetTemplateData = (slug: string) => {
    const template = TEMPLATES.find((item) => item.slug === slug);
    return {
      name: template?.name || "Unknown Template",
      icon: template?.icon || "/default-icon.png",
    };
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generated AI content history
      </p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {HistoryList.length > 0 ? (
        HistoryList.map((item: HISTORY) => {
          const { name, icon } = GetTemplateData(item.templateSlug);
          return (
            <HistoryRow key={item.id} item={item} name={name} icon={icon} />
          );
        })
      ) : (
        <p className="text-center mt-5">No history found for your account.</p>
      )}
    </div>
  );
}

export default History;
