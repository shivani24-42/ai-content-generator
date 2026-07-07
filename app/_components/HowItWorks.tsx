import React from "react";

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Select a Template",
      description: "Choose from our wide variety of AI content templates based on what you want to create.",
    },
    {
      step: "02",
      title: "Enter Prompts",
      description: "Provide a few keywords or a short description to guide the AI's generation process.",
    },
    {
      step: "03",
      title: "Generate & Copy",
      description: "Get your high-quality content instantly. Edit if needed, and copy it to use anywhere.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 drop-shadow-sm">
            How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Three simple steps to supercharge your content creation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((item, idx) => (
            <div key={idx} className="flex-1 relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center text-2xl font-bold text-slate-900 mb-6 border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-lg max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
