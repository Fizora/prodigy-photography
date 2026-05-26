"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            Let&apos;s Create Together
          </h2>
          <p className="text-stone-600 mt-3">
            Reach out – I&apos;ll get back within 24 hours.
          </p>
          <div className="w-16 h-0.5 bg-amber-800/50 mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Email</h3>
                <a
                  href="mailto:hello@prodigyphotography.com"
                  className="text-stone-600 hover:text-amber-800 transition-colors"
                >
                  hello@prodigyphotography.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800">
                <FaPhoneAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Phone / WhatsApp</h3>
                <a
                  href="tel:+6281234567890"
                  className="text-stone-600 hover:text-amber-800 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Based in</h3>
                <p className="text-stone-600">
                  Jakarta, Indonesia – Available worldwide
                </p>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-stone-50 p-6 rounded-2xl shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full px-6 py-3 bg-amber-800 text-white font-medium rounded-full shadow-sm hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-70"
            >
              {formStatus === "loading"
                ? "Sending..."
                : formStatus === "success"
                  ? "Sent ✓"
                  : "Send message"}
            </button>
            {formStatus === "success" && (
              <p className="text-green-600 text-sm text-center">
                Thanks! I&apos;ll reply shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
