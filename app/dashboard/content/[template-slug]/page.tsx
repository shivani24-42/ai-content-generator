"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModals";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useUsage } from "../../_components/UsageContext";

interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

function CreateNewContent(props: PROPS) {
  const { usage, setUsage } = useUsage();

  // Unwrap params using React.use()
  const params = React.use(props.params);

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  React.useEffect(() => {
    const fetchUsage = async () => {
      const res2 = await fetch("/api/get-usage");
      const data2 = await res2.json();
      setUsage(data2.usage);
    };
    fetchUsage();
  }, []);

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);

    // 1. Fetch current usage from your API route
    const res = await fetch("/api/get-usage");
    const data = await res.json();
    const usage = data.usage;
    const maxCredits = 10000;

    // 2. Prevent generation if usage >= maxCredits
    if (usage >= maxCredits) {
      setLoading(false);
      alert("You have reached your credit limit. Please upgrade to continue.");
      return;
    }

    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt || "";
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);

      const aiResponse = await result.response.text();
      console.log(aiResponse);
      setAiOutput(aiResponse);

      // await SaveInDb(formData, selectedTemplate?.slug, aiResponse);
      await SaveInDb(formData, selectedTemplate?.slug, aiResponse);
      const res2 = await fetch("/api/get-usage");
      const data2 = await res2.json();
      setUsage(data2.usage);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);

      // setUpdateCreditUsage(Date.now());
    }
  };

  const SaveInDb = async (
    formData: any,
    slug: string | undefined,
    aiResp: string | undefined
  ) => {
    if (!slug || !aiResp || !user?.primaryEmailAddress?.emailAddress) {
      console.error("Missing required data for saving to DB");
      return;
    }

    const result = await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.primaryEmailAddress.emailAddress,
      // createdAt: moment().format("DD/MM/YYYY"),
      createdAt: moment().toISOString(), // Use ISO format for better compatibility
    });
    console.log(result);
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section  */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
          usage={usage}
          maxCredits={10000}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
