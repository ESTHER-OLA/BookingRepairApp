"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-chart-3/95 backdrop-blur supports-[backdrop-filter]:bg-chart-3/60 dark:bg-gray-950 pt-20 pb-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Fast & Reliable <span className="text-blue-600">Car Repairs</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Book professional mechanics at your convenience. Affordable,
            trusted, and nearby.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-2 rounded-xl">
              Book a Repair
            </Button>
            <Button
              variant="outline"
              className="text-base px-6 py-2 rounded-xl"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="">
            <Image
              src="/car-repair.jpg"
              alt="Car Repair Illustration"
              width={600}
              height={600}
              className=""
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
