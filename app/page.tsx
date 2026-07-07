import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />
    </div>
  );
}
