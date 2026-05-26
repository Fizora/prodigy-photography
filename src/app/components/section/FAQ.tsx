"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}
interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 mt-3">
            Everything you need to know before booking.
          </p>
          <div className="w-16 h-0.5 bg-amber-800/50 mx-auto mt-4" />
        </div>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-stone-900 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-serif text-lg">{item.question}</span>
                <FaChevronDown
                  className={`w-4 h-4 text-stone-500 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5 text-stone-600 border-t border-stone-100"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
