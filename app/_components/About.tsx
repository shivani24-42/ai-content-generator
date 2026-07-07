import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | AI-CONTENT-GENERATOR</title>
        <meta
          name="description"
          content="Learn about AI-CONTENT-GENERATOR, your partner for AI-powered content generation and productivity."
        />
        <meta
          name="keywords"
          content="AI content, AI-CONTENT-GENERATOR, content generator, artificial intelligence, productivity"
        />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
      </Head>
      <main className="min-h-[70vh] bg-transparent flex flex-col items-center justify-center relative overflow-hidden">
        <section className="mt-8 mb-8 container mx-auto px-4 py-12 max-w-3xl rounded-2xl glass-panel relative z-10">
          <div className="flex flex-col items-center mb-8">
            <span className="inline-block bg-gradient-to-r from-primary to-cta text-transparent bg-clip-text text-4xl font-extrabold mb-2 drop-shadow">
              About AI-CONTENT-GENERATOR
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-2" />
            <p className="text-lg text-slate-600 text-center max-w-xl">
              Empowering creators and businesses with AI-driven, high-quality
              content—instantly.
            </p>
          </div>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-primary">
                Welcome to AI-CONTENT-GENERATOR
              </span>
              , your trusted partner for next-generation content creation. Our
              mission is to help you write smarter, faster, and more creatively
              using the power of artificial intelligence.
            </p>
            <p>
              At AI-CONTENT-GENERATOR, we believe everyone deserves access to high-quality
              content. Our platform leverages advanced AI models to generate
              blog posts, marketing copy, and more—tailored to your needs,
              whether you’re a solo creator, a startup, or an enterprise.
            </p>
            <p>
              Our team is made up of passionate technologists and writers
              dedicated to making content creation effortless and enjoyable. We
              constantly update AI-CONTENT-GENERATOR to bring you the latest in AI
              advancements, ensuring your content is always fresh and relevant.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                ✨
              </span>
              <span className="text-lg font-semibold text-primary">
                Join us and spark your creativity with AI-powered content!
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
