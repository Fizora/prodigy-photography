"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export interface StatItem {
  value: string;
  label: string;
}

export interface HeroProps {
  badgeText?: string;
  title: string;
  highlightedText?: string;
  description: string;
  primaryCta: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  stats?: StatItem[];
  illustration?: React.ReactNode;
}

const Hero = ({
  badgeText = "Trusted by 100+ founders",
  title,
  highlightedText,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
  illustration,
}: HeroProps) => {
  const handleCtaClick = (cta: { onClick?: () => void; href?: string }) => {
    if (cta.onClick) {
      cta.onClick();
    } else if (cta.href) {
      if (cta.href.startsWith("#")) {
        const element = document.querySelector(cta.href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = cta.href;
      }
    }
  };

  const renderTitle = () => {
    if (!highlightedText) return <>{title}</>;
    const parts = title.split(highlightedText);
    if (parts.length === 1) return <>{title}</>;
    return (
      <>
        {parts[0]}
        <span className="relative inline-block">
          {highlightedText}
          <svg
            className="absolute bottom-2 left-0 w-full -z-10"
            viewBox="0 0 300 12"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 8 L300 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-stone-400"
            />
          </svg>
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative bg-stone-50 overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-stone-100 rounded-full px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-amber-700 rounded-full" />
              <span className="text-xs font-medium text-stone-700 tracking-wide">
                {badgeText}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.2]">
              {renderTitle()}
            </h1>

            <p className="text-lg md:text-xl text-stone-600 mt-6 max-w-lg leading-relaxed">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                onClick={() => handleCtaClick(primaryCta)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-800 text-white font-semibold rounded-full shadow-sm hover:bg-amber-700 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {primaryCta.text}
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => handleCtaClick(secondaryCta)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-800 font-semibold rounded-full border border-stone-300 shadow-sm hover:bg-stone-50 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPlay className="w-4 h-4" />
                {secondaryCta.text}
              </motion.button>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="flex flex-wrap gap-6 mt-10 pt-4 border-t border-stone-200">
                {stats.map((stat: StatItem, idx: number) => (
                  <div key={idx}>
                    <p className="text-2xl font-bold text-stone-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-stone-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right column - illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-stone-100 to-stone-200 rounded-full blur-2xl -z-10 transform translate-x-4 translate-y-4" />
              {illustration ? (
                illustration
              ) : (
                <div className="bg-stone-100 rounded-2xl shadow-xl overflow-hidden border border-stone-200">
                  <svg
                    viewBox="0 0 500 400"
                    fill="none"
                    className="w-full h-auto"
                  >
                    <rect width="500" height="400" fill="#f5f5f4" />
                    <path
                      d="M150 120 L350 120 L380 200 L120 200 L150 120Z"
                      fill="#e7e5e4"
                    />
                    <rect
                      x="180"
                      y="220"
                      width="140"
                      height="100"
                      rx="8"
                      fill="#a8a29e"
                    />
                    <circle cx="250" cy="340" r="20" fill="#78716c" />
                    <rect
                      x="100"
                      y="280"
                      width="80"
                      height="8"
                      rx="4"
                      fill="#d6d3d1"
                    />
                    <rect
                      x="320"
                      y="280"
                      width="80"
                      height="8"
                      rx="4"
                      fill="#d6d3d1"
                    />
                    <text
                      x="250"
                      y="380"
                      textAnchor="middle"
                      fill="#57534e"
                      fontSize="14"
                    >
                      Photography showcase
                    </text>
                  </svg>
                </div>
              )}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 border border-stone-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-stone-700">
                  Available worldwide
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
