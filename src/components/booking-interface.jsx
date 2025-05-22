"use client";

import { useBooking } from "@/context/booking-context";
import CarTypeSelection from "./car-type-selection";
import RepairServiceSelection from "./repair-service-selection";
import StationList from "./station-list";
import TimeSlotSelection from "./time-slot-selection";
import BookingConfirmation from "./booking-confirmation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";

export default function BookingInterface() {
  const { state, dispatch } = useBooking();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const closeModal = () => {
    dispatch({ type: "SET_STATION", payload: null });
  };

  return (
    <div id="bookRepair" className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <CarTypeSelection />
          <RepairServiceSelection />
        </div>
        <div className="space-y-6">
          {state.selectedCarType && state.selectedService && <StationList />}
        </div>
      </div>

      {state.selectedStation && (
        <Modal onClose={closeModal}>
          {state.bookingStatus === "success" ? (
            <BookingConfirmation />
          ) : (
            <TimeSlotSelection />
          )}

          <div className="mt-4 text-right">
            <Button variant="ghost" onClick={closeModal}>
              Go Back
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
