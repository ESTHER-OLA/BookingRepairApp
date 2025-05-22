"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/car-repair.jpg"
              alt="Mechanics working"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-gray-900 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About <span className="text-blue-600">UrService</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                UrService is your go-to platform for fast, reliable, and
                affordable car repair services. Whether it’s a quick oil change,
                a major engine repair, or detailed car servicing, our team of
                certified mechanics is here to get you back on the
                road—hassle-free.
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                We’re committed to quality, trust, and convenience. With just a
                few clicks, you can schedule a service and have a professional
                at your doorstep or nearest garage.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
