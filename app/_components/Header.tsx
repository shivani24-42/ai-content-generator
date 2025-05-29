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
        <title>QuillSpark : AI Content Genertor</title>
        <meta name="description" content="EduGen: AI-Powered Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-tr from-cyan-100 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 shadow-2xl border-b border-purple-100 dark:border-gray-800">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={"/quillsparkLogo.svg"}
              alt="logo"
              width={40}
              height={40}
              className="transition-transform duration-300 "
              priority
            />
            <span className="hidden md:inline-block text-2xl font-extrabold bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] bg-clip-text text-transparent tracking-tight drop-shadow-md ml-2">
              QuillSpark
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/shivani24-42/ai-content-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
              aria-label="GitHub Repository"
            >
              <RxGithubLogo className="text-3xl text-[rgb(35,128,171)] hover:text-[rgb(97,193,207)] transition-colors drop-shadow-md" />
            </Link>

            <Link href="/dashboard">
              <Button className="bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] text-white px-6 py-2 rounded-full shadow-lg font-semibold transition-all duration-200 hover:from-[rgb(0,193,236)] hover:to-[rgb(50,106,184)] hover:scale-105 focus:ring-2 focus:ring-cyan-600">
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
