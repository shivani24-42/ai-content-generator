"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

import { useUsage } from "../../_components/UsageContext";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const { usage } = useUsage();
  const maxCredits = 10000;
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="card h-full flex flex-col">
      <div className="p-3 bg-slate-100 border border-slate-200 w-fit rounded-lg mb-4">
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt="icon" width={50} height={50} />
      </div>
      <h2 className="font-extrabold text-2xl mb-2 text-slate-800 tracking-tight">
        {selectedTemplate?.name}
      </h2>
      <p className="text-slate-500 text-base">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7" key={index}>
            <label className="font-bold text-slate-700">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-6 text-lg font-bold rounded-lg bg-gradient-to-r from-primary to-cta hover:scale-[1.02] transition-all text-white shadow-[0_4px_15px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.6)] border-none"
          disabled={loading || usage >= maxCredits}
        >
          {loading && <Loader2Icon className="animate-spin mr-2" />}
          Generate Content
        </Button>
        {usage >= maxCredits && (
          <p className="text-red-600 text-center mt-2 font-semibold">
            You have reached your credit limit. Please upgrade to continue.
          </p>
        )}
      </form>
    </div>
  );
}

export default FormSection;
