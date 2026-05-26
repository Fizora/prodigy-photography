"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  title: string;
  navLinks: NavLink[];
  ctaButton: { text: string; href: string };
}

const Navbar = ({ title, navLinks, ctaButton }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (href: string) => {
    closeMenu();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        Skip to main content
      </a>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone-50/95 backdrop-blur-md border-b border-stone-200 shadow-sm"
            : "bg-stone-50 border-b border-stone-200"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:py-4 md:px-6">
          <motion.h3
            className="font-serif text-xl md:text-2xl font-bold text-stone-900 tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <a href="/" className="hover:opacity-80 transition-opacity">
              {title}
            </a>
          </motion.h3>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={ctaButton.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(ctaButton.href);
              }}
              className="hidden md:inline-block px-5 py-2 bg-amber-800 text-white font-medium rounded-full shadow-sm hover:bg-amber-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {ctaButton.text}
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-stone-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-stone-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-stone-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-stone-50 shadow-xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between p-5 border-b border-stone-200">
                <span className="font-serif text-lg font-bold text-stone-900">
                  {title}
                </span>
                <button
                  ref={closeButtonRef}
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 text-stone-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 py-6 px-4" aria-label="Mobile navigation">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="block px-4 py-3 text-stone-700 hover:bg-stone-100 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={ctaButton.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(ctaButton.href);
                      }}
                      className="block w-full text-center px-4 py-3 mt-4 bg-amber-800 text-white font-medium rounded-full shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {ctaButton.text}
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="h-16 md:h-18" aria-hidden="true" />
    </>
  );
};
export default Navbar;
