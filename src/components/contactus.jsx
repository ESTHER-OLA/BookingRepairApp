"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });
  return (
    <div
      id="contact"
      className="grid md:grid-cols-2 gap-8 py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 "
    >
      {/* Google Map */}
      <div className="rounded-xl overflow-hidden shadow border border-gray-200 dark:border-gray-700">
        <iframe
          title="Company Location"
          width="100%"
          height="100%"
          style={{ minHeight: "400px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA&output=embed"
        ></iframe>
      </div>
      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h3>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
