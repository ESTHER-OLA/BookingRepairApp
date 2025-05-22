import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function TestimonialSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          What Our <span className="text-blue-600"> Clients Say</span>
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-800 dark:text-gray-200">
                “Quick response and great service! The mechanic was professional
                and friendly.”
              </p>
            </CardContent>
            <CardFooter className="text-sm text-gray-600 dark:text-gray-400">
              — Janet O.
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-gray-800 dark:text-gray-200">
                “Booking was so easy and the repair was done faster than
                expected.”
              </p>
            </CardContent>
            <CardFooter className="text-sm text-gray-600 dark:text-gray-400">
              — Mike D.
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-gray-800 dark:text-gray-200">
                “Absolutely amazing experience. Transparent pricing and timely
                updates. Highly recommended!”
              </p>
            </CardContent>
            <CardFooter className="text-sm text-gray-600 dark:text-gray-400">
              — Sarah W.
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="text-gray-800 dark:text-gray-200">
                “The platform is super intuitive. I scheduled a repair in
                minutes and everything went smoothly.”
              </p>
            </CardContent>
            <CardFooter className="text-sm text-gray-600 dark:text-gray-400">
              — Alex R.
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
