"use client";

import { useBooking } from "@/context/booking-context";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { fetchTimeSlots } from "@/lib/api";
import { format } from "date-fns";
import { Clock } from "lucide-react";

export default function TimeSlotSelection() {
  const { state, dispatch } = useBooking();

  useEffect(() => {
    const getTimeSlots = async () => {
      if (!state.selectedStation) return;

      dispatch({ type: "SET_LOADING_TIME_SLOTS", payload: true });
      try {
        const timeSlots = await fetchTimeSlots(state.selectedStation);
        dispatch({ type: "SET_TIME_SLOTS", payload: timeSlots });
      } catch (error) {
        console.error("Failed to fetch time slots:", error);
      } finally {
        dispatch({ type: "SET_LOADING_TIME_SLOTS", payload: false });
      }
    };

    if (state.selectedStation) {
      getTimeSlots();
    }
  }, [state.selectedStation, dispatch]);

  const handleSelectTimeSlot = (timeSlotId) => {
    dispatch({ type: "SET_TIME_SLOT", payload: timeSlotId });
  };

  const handleBookNow = () => {
    dispatch({ type: "SET_BOOKING_STATUS", payload: "loading" });

    // Simulate API call
    setTimeout(() => {
      dispatch({ type: "SET_BOOKING_STATUS", payload: "success" });
    }, 1500);
  };

  const selectedStation = state.stations.find(
    (station) => station.id === state.selectedStation
  );

  // Group time slots by date
  const timeSlotsByDate = {};
  state.timeSlots.forEach((slot) => {
    const date = format(new Date(slot.startTime), "yyyy-MM-dd");
    if (!timeSlotsByDate[date]) {
      timeSlotsByDate[date] = [];
    }
    timeSlotsByDate[date].push(slot);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Select Appointment Time</CardTitle>
          <CardDescription>
            {selectedStation
              ? `Available time slots at ${selectedStation.name}`
              : "Choose a time slot for your appointment"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {state.loadingTimeSlots ? (
            // Loading skeleton
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-1/4" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-10 w-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : state.timeSlots.length === 0 ? (
            // Empty state
            <div className="text-center p-6 border rounded-md">
              <p className="text-muted-foreground">
                No available time slots for this station.
              </p>
              <p className="text-sm mt-2">
                Try selecting a different repair station.
              </p>
            </div>
          ) : (
            // Time slots grouped by date
            <div className="space-y-6">
              {Object.entries(timeSlotsByDate).map(([date, slots]) => (
                <div key={date} className="space-y-3">
                  <h3 className="font-medium">
                    {format(new Date(date), "EEEE, MMMM d, yyyy")}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {slots.map((slot) => (
                      <Button
                        key={slot.id}
                        variant={
                          state.selectedTimeSlot === slot.id
                            ? "default"
                            : "outline"
                        }
                        className="justify-start"
                        onClick={() => handleSelectTimeSlot(slot.id)}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {format(new Date(slot.startTime), "h:mm a")}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t mt-6">
                <Button
                  className="w-full"
                  size="lg"
                  disabled={
                    !state.selectedTimeSlot || state.bookingStatus === "loading"
                  }
                  onClick={handleBookNow}
                >
                  {state.bookingStatus === "loading" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
