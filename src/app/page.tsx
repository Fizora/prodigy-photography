"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Portfolio from "./components/section/Portfolio";
import Service from "./components/section/Service";
import FAQ from "./components/section/FAQ";
import Contact from "./components/section/Contact";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Navigation (same for navbar & footer quick links)
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const quickLinks = [...navLinks]; // reuse

  const portfolioItems = [
    {
      id: 1,
      title: "Golden Hour",
      category: "Wedding",
      imageUrl: "/portfolio/image-1.png",
    },
    {
      id: 2,
      title: "Family Joy",
      category: "Portrait",
      imageUrl: "/portfolio/image-2.png",
    },
    {
      id: 3,
      title: "Brand Story",
      category: "Commercial",
      imageUrl: "/portfolio/image-3.png",
    },
    {
      id: 4,
      title: "Corporate Gala",
      category: "Event",
      imageUrl: "/portfolio/image-4.png",
    },
    {
      id: 5,
      title: "Engagement Bliss",
      category: "Wedding",
      imageUrl: "/portfolio/image-5.png",
    },
    {
      id: 6,
      title: "Fine Art Portrait",
      category: "Portrait",
      imageUrl: "/portfolio/image-6.png",
    },
  ];

  const serviceItems = [
    {
      id: 1,
      title: "Wedding & Engagement",
      description: "Storytelling that preserves your most precious day.",
      icon: "heart" as const,
    },
    {
      id: 2,
      title: "Portrait & Family",
      description: "Natural, emotive portraits that feel like you.",
      icon: "camera" as const,
    },
    {
      id: 3,
      title: "Commercial & Brand",
      description: "Elevate your business with professional imagery.",
      icon: "briefcase" as const,
    },
    {
      id: 4,
      title: "Events & Coverage",
      description: "Corporate events, parties, and celebrations.",
      icon: "calendar" as const,
    },
  ];

  const faqItems = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 3–6 months in advance, especially for weddings and peak seasons.",
    },
    {
      question: "Do you travel for shoots?",
      answer:
        "Absolutely! Based in Jakarta but available worldwide. Travel fees may apply depending on location.",
    },
    {
      question: "How long does it take to receive edited photos?",
      answer:
        "You'll receive a gallery of edited images within 2–4 weeks after the session.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Every project is unique. Contact us for a custom quote tailored to your needs.",
    },
  ];

  return (
    <>
      <Navbar
        title="Prodigy."
        navLinks={navLinks}
        ctaButton={{ text: "Book a Session", href: "#contact" }}
      />
      <main className="bg-stone-50">
        <Hero
          illustration={
            <div className="bg-stone-100 rounded-2xl shadow-xl overflow-hidden border border-stone-200">
              <Image
                src="/hero.png" // ganti dengan path file gambar Anda
                alt="Photographer capturing a beautiful moment"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                priority // agar gambar cepat dimuat (LCP)
              />
            </div>
          }
          badgeText="✦ Award-Winning Photography Studio"
          title="Every moment deserves to be remembered forever."
          highlightedText="remembered forever."
          description="We craft timeless, editorial-quality imagery for weddings, portraits, brands, and events. Based in Jakarta — shooting worldwide."
          primaryCta={{ text: "Book your session", onClick: scrollToContact }}
          secondaryCta={{
            text: "Explore the portfolio",
            onClick: scrollToPortfolio,
          }}
          stats={[
            { value: "800+", label: "Sessions captured" },
            { value: "12+", label: "Years of experience" },
            { value: "4.9★", label: "Client rating" },
          ]}
        />
        <About />
        <Portfolio
          items={portfolioItems}
          title="Our Work"
          subtitle="Real moments, real emotions"
        />
        <Service
          items={serviceItems}
          title="Services"
          subtitle="What we can do for you"
        />
        <FAQ items={faqItems} />
        <Contact />
      </main>
      <Footer
        brandName="Prodigy."
        tagline="Timeless photography, crafted with intention."
        quickLinks={quickLinks}
        socialLinks={[
          {
            icon: "instagram",
            href: "https://instagram.com",
            label: "Instagram",
          },
          { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
          {
            icon: "email",
            href: "mailto:hello@prodigyphotography.com",
            label: "Email",
          },
        ]}
        contactEmail="hello@prodigyphotography.com"
        contactPhone="+62 812-3456-7890"
      />
    </>
  );
}
