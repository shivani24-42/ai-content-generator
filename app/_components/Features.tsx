import React from "react";
import { Sparkles, Zap, LayoutTemplate, ShieldCheck } from "lucide-react";

function Features() {
  const features = [
    {
      title: "AI-Powered Generation",
      description: "Leverage advanced AI models to generate high-quality content in seconds, tailored to your exact needs.",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
    },
    {
      title: "Lightning Fast",
      description: "Say goodbye to writer's block. Produce blogs, emails, and social media posts faster than ever.",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "50+ Templates",
      description: "Access a wide variety of pre-built templates for any use case, from marketing to coding.",
      icon: <LayoutTemplate className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Secure & Private",
      description: "Your data is yours. We ensure top-tier security and privacy for all your generated content.",
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 drop-shadow-sm">
            Why Choose <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">AI-CONTENT-GENERATOR?</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our platform is built to help you scale your content creation effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="card group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-slate-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors border border-slate-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
