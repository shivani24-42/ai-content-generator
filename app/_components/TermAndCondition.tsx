import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsAndCondition = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | AI-CONTENT-GENERATOR</title>
        <meta
          name="description"
          content="Read the terms and conditions for using AI-CONTENT-GENERATOR Content Generator services."
        />
        <meta
          name="keywords"
          content="terms and conditions, AI-CONTENT-GENERATOR, AI content, legal"
        />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/terms-and-conditions"
        />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 bg-transparent flex flex-col items-center justify-center relative overflow-hidden">
          <section className="container mx-auto px-4 py-12 max-w-3xl rounded-2xl glass-panel relative z-10 mt-8 mb-8">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-block bg-gradient-to-r from-primary to-cta text-transparent bg-clip-text text-4xl font-extrabold mb-2 drop-shadow">
                Terms &amp; Conditions
              </span>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-2" />
              <p className="text-lg text-slate-600 text-center max-w-xl">
                Please read our terms and conditions carefully before using
                AI-CONTENT-GENERATOR Content Generator.
              </p>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Welcome to{" "}
                <span className="font-semibold text-primary">
                  AI-CONTENT-GENERATOR
                </span>
                ! By accessing our website and using our services, you agree to
                comply with and be bound by the following terms and conditions.
                Please read them carefully.
              </p>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By using our website, you confirm that you accept these terms
                  and conditions in full. If you do not agree with any part of
                  these terms, you must not use our website.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  2. Use of Our Services
                </h2>
                <p>
                  You agree to use our services only for lawful purposes and in
                  a manner that does not infringe the rights of, restrict, or
                  inhibit anyone else's use and enjoyment of our services.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  3. Intellectual Property
                </h2>
                <p>
                  All content, trademarks, and other intellectual property
                  rights in the website and its contents are owned by or
                  licensed to AI-CONTENT-GENERATOR. You may not reproduce, distribute,
                  or exploit any part of our website without our permission.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  4. Limitation of Liability
                </h2>
                <p>
                  AI-CONTENT-GENERATOR will not be liable for any direct, indirect, or
                  consequential loss or damage arising out of or in connection
                  with your use of our website and services.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  5. Changes to Terms
                </h2>
                <p>
                  We may update these terms and conditions from time to time.
                  Your continued use of the website following any changes will
                  be deemed acceptance of those changes.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  📩
                </span>
                <span>
                  If you have any questions about these terms, please contact us
                  at{" "}
                  <a
                    href="mailto:codeforgenet@icloud.com"
                    className="underline text-primary font-semibold"
                  >
                    codeforgenet@icloud.com
                  </a>
                  .
                </span>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndCondition;
