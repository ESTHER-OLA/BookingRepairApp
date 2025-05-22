"use client";

import { motion } from "framer-motion";
import PartnersSection from "./partnersSection";
import TestimonialSection from "./testimonial";
import ContactUs from "./contactus";
import TeamSection from "./teamSection";

export default function ExtraSections() {
  return (
    <>
      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Trusted by <span className="text-blue-600">Thousands</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">5K+</p>
              <p className="text-gray-700 dark:text-gray-300">Repairs Done</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-gray-700 dark:text-gray-300">
                Happy Customers
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-700 dark:text-gray-300">
                Service Support
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">100%</p>
              <p className="text-gray-700 dark:text-gray-300">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* Contact Form */}
      <div>
        {" "}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Contact <span className="text-blue-600">Us</span>
        </h2>
        <ContactUs />
      </div>
      {/* Partners Section */}
      <PartnersSection />
    </>
  );
}
