"use client";

import { motion } from "framer-motion";
import { FaCamera, FaHeart, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: "camera" | "heart" | "briefcase" | "calendar";
}

interface ServiceProps {
  items: ServiceItem[];
  title?: string;
  subtitle?: string;
}

const iconMap = {
  camera: FaCamera,
  heart: FaHeart,
  briefcase: FaBriefcase,
  calendar: FaCalendarAlt,
};

const Service = ({
  items,
  title = "What We Offer",
  subtitle = "Tailored photography experiences for every story",
}: ServiceProps) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            {title}
          </h2>
          <p className="text-stone-600 mt-3">{subtitle}</p>
          <div className="w-16 h-0.5 bg-amber-800/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors">
                  <Icon className="w-7 h-7 text-amber-800" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
