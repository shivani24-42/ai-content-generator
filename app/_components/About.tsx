import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | QuillSpark AI</title>
        <meta
          name="description"
          content="Learn about QuillSpark AI, your partner for AI-powered content generation and productivity."
        />
        <meta
          name="keywords"
          content="AI content, QuillSpark, content generator, artificial intelligence, productivity"
        />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
      </Head>
      <main className="min-h-[70vh] bg-gradient-to-tr from-[rgb(0,210,255)] via-blue-100 to-[rgb(58,123,213)] flex flex-col items-center justify-center">
        <section className="mt-8 mb-8 container mx-auto px-4 py-12 max-w-3xl rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-blue-200">
          <div className="flex flex-col items-center mb-8">
            <span className="inline-block bg-gradient-to-r from-[rgb(0,210,255)] via-blue-400 to-[rgb(58,123,213)] text-transparent bg-clip-text text-4xl font-extrabold mb-2 drop-shadow">
              About QuillSpark
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(0,210,255)] via-blue-400 to-[rgb(58,123,213)] rounded-full mb-2" />
            <p className="text-lg text-blue-700 text-center max-w-xl">
              Empowering creators and businesses with AI-driven, high-quality
              content—instantly.
            </p>
          </div>
          <div className="space-y-6 text-blue-900 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-[rgb(0,210,255)]">
                Welcome to QuillSpark AI
              </span>
              , your trusted partner for next-generation content creation. Our
              mission is to help you write smarter, faster, and more creatively
              using the power of artificial intelligence.
            </p>
            <p>
              At QuillSpark, we believe everyone deserves access to high-quality
              content. Our platform leverages advanced AI models to generate
              blog posts, marketing copy, and more—tailored to your needs,
              whether you’re a solo creator, a startup, or an enterprise.
            </p>
            <p>
              Our team is made up of passionate technologists and writers
              dedicated to making content creation effortless and enjoyable. We
              constantly update QuillSpark to bring you the latest in AI
              advancements, ensuring your content is always fresh and relevant.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(0,210,255)] via-blue-400 to-[rgb(58,123,213)] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ✨
              </span>
              <span className="text-lg font-semibold text-[rgb(0,210,255)]">
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
