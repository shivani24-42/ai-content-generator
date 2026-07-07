import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";

function Header() {
  return (
    <>
      <Head>
        <title>AI-CONTENT-GENERATOR : AI Content Genertor</title>
        <meta name="description" content="EduGen: AI-Powered Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={"/quillsparkLogo.svg"}
              alt="logo"
              width={40}
              height={40}
              className="w-10 h-10 transition-transform duration-300"
              priority
            />
            <span className="hidden md:inline-block text-2xl font-extrabold text-slate-900 tracking-tight drop-shadow-sm ml-2">
              AI-CONTENT-GENERATOR
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/shivani24-42/AI-Content-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
              aria-label="GitHub Repository"
            >
              <RxGithubLogo className="text-3xl text-slate-600 hover:text-slate-900 transition-colors drop-shadow-sm" />
            </Link>

            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-primary to-cta text-white px-6 py-2 rounded-full shadow-[0_4px_15px_rgba(139,92,246,0.4)] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_25px_rgba(139,92,246,0.6)] border-none">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
