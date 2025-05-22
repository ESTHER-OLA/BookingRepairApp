import AboutSection from "@/components/about";
import BookingInterface from "@/components/booking-interface";
import ExtraSections from "@/components/extraSection";
import HeroSection from "@/components/heroSection";
import ServicesSection from "@/components/services";
import { BookingProvider } from "@/context/booking-context";

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <HeroSection />

      <ServicesSection />

      <AboutSection />
      <div
        id="bookRepair"
        className="bg-chart-3/95 backdrop-blur supports-[backdrop-filter]:bg-chart-3/60 dark:bg-gray-950 py-15 px-8"
      >
        <div className="text-center w-[60vw] flex flex-col items-center px-10 mx-auto my-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Book <span className="text-blue-600">Repair</span>
          </h2>
          <p>
            {"Don’t"} let car troubles slow you down. Schedule a repair in
            minutes and get connected with certified mechanics near you. Whether{" "}
            {"it's"} at your home, office, or preferred garage, we bring
            reliable service right to your doorstep—on your schedule.
          </p>
        </div>
        <BookingProvider>
          <BookingInterface />
        </BookingProvider>
      </div>

      <ExtraSections />
    </main>
  );
}
