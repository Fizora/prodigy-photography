"use client";

import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

interface QuickLink {
  name: string;
  href: string;
}

interface FooterProps {
  brandName: string;
  tagline: string;
  quickLinks: QuickLink[]; // ✅ now accepted
  socialLinks: {
    icon: "instagram" | "facebook" | "email";
    href: string;
    label: string;
  }[];
  contactEmail: string;
  contactPhone: string;
}

const iconMap = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
};

const Footer = ({
  brandName,
  tagline,
  quickLinks,
  socialLinks,
  contactEmail,
  contactPhone,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand column */}
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {brandName}
            </h3>
            <p className="text-stone-500 text-sm max-w-xs mx-auto md:mx-0">
              {tagline}
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-stone-600 hover:text-stone-900 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social column */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-stone-900 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="text-stone-500 text-sm space-y-1">
              <p>{contactEmail}</p>
              <p>{contactPhone}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 text-center text-stone-400 text-xs">
          &copy; {currentYear} {brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
