"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { disableNavWithFooter } from "@/lib/disableComponents";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [year, setYear] = useState("");
  const path = usePathname();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <footer className="bg-accent/95 backdrop-blur supports-[backdrop-filter]:bg-accent/80 text-primary py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {year} UrService. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="hover:text-yellow-400"
                aria-label="Facebook"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-400"
                aria-label="Twitter"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-400"
                aria-label="Instagram"
              >
                Instagram
              </Link>
            </div>
          </div>
          <div className="flex justify-start px-4 sm:px-6 lg:px-18 text-chart-4">
            Created by Esther-Ola
          </div>
        </footer>
      )}
    </>
  );
}
