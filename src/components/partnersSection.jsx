"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "/logo001.png",
  "/logo002.png",
  "/logo003.png",
  "/logo004.png",
  "/logo002.png",
  "/logo001.png",
  "/logo005.png",
  "/logo001.png",
  "/logo002.png",
  "/logo003.png",
  "/logo004.png",
  "/logo002.png",
  "/logo001.png",
  "/logo001.png",
  "/logo002.png",
  "/logo001.png",
  "/logo005.png",
];

export default function PartnersSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Our <span className="text-blue-600">Partners</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="w-32 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
              >
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
