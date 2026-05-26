"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}
interface PortfolioProps {
  items: PortfolioItem[];
  title?: string;
  subtitle?: string;
}

const Portfolio = ({
  items,
  title = "Recent Work",
  subtitle = "A glimpse into moments we've captured",
}: PortfolioProps) => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            {title}
          </h2>
          <p className="text-stone-600 mt-3">{subtitle}</p>
          <div className="w-16 h-0.5 bg-amber-800/50 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-500"
            >
              <div className="aspect-4/3 relative">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-serif text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-200">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
