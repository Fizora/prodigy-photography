"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Behind the lens
            </h2>
            <div className="w-16 h-0.5 bg-amber-800/50 mt-4 mb-6" />
            <p className="text-stone-600 text-lg leading-relaxed">
              I&apos;m <strong className="text-stone-900">Alex Rivera</strong>,
              an award‑wing photographer with over a decade of experience. My
              approach is simple: capture genuine emotions, natural light, and
              the small details that make your story unique.
            </p>
            <p className="text-stone-600 mt-4">
              Whether it&apos;s a wedding, a brand campaign, or a family
              portrait, I strive to create images that feel both timeless and
              deeply personal. Based in Jakarta, I travel worldwide to document
              life&apos;s most meaningful moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-amber-800">12+</p>
                <p className="text-stone-500 text-sm">Years experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-800">150+</p>
                <p className="text-stone-500 text-sm">Weddings captured</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-800">5</p>
                <p className="text-stone-500 text-sm">Continents visited</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/portfolio/image.png" // replace with your image
                alt="Alex Rivera – photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden md:block">
              <p className="text-amber-800 font-serif italic">
                “Authentic moments, beautifully told.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
