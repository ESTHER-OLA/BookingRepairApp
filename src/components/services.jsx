"use client";

import { motion } from "framer-motion";
import { Wrench, Car, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RiOilFill } from "react-icons/ri";

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "General Repairs",
    description:
      "Engine diagnostics, suspension fixes, and overall car repairs.",
  },
  {
    icon: <RiOilFill className="w-8 h-8 text-blue-600" />,
    title: "Oil Change",
    description:
      "Quick and affordable oil changes to keep your car running smoothly.",
  },
  {
    icon: <Car className="w-8 h-8 text-blue-600" />,
    title: "Brake Service",
    description:
      "Brake pad replacement, rotor inspection, and full brake service.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: "Car Detailing",
    description: "Interior vacuum, waxing, polishing and deep cleaning.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Quality car care at your convenience. Book any of our trusted services
          below.
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition duration-300">
                <CardContent className="p-6 text-center flex flex-col items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
