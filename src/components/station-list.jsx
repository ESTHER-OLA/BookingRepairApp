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
import { MapPin, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { fetchStations } from "@/lib/api";

export default function StationList() {
  const { state, dispatch } = useBooking();

  useEffect(() => {
    const getStations = async () => {
      dispatch({ type: "SET_LOADING_STATIONS", payload: true });
      try {
        const stations = await fetchStations(
          state.selectedCarType,
          state.selectedService
        );
        dispatch({ type: "SET_STATIONS", payload: stations });
      } catch (error) {
        console.error("Failed to fetch stations:", error);
      } finally {
        dispatch({ type: "SET_LOADING_STATIONS", payload: false });
      }
    };

    if (state.selectedCarType && state.selectedService) {
      getStations();
    }
  }, [state.selectedCarType, state.selectedService, dispatch]);

  const handleSelectStation = (stationId) => {
    dispatch({ type: "SET_STATION", payload: stationId });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Repair Stations</CardTitle>
        <CardDescription>
          Stations that can service your {state.selectedCarType} for{" "}
          {state.selectedService?.replace("-", " ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {state.loadingStations ? (
          // Loading skeleton
          <>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-4 border rounded-md"
              >
                <Skeleton className="h-12 w-12 rounded-md" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            ))}
          </>
        ) : state.stations.length === 0 ? (
          // Empty state
          <div className="text-center p-6 border rounded-md">
            <p className="text-muted-foreground">
              No stations available for this service and vehicle type.
            </p>
            <p className="text-sm mt-2">
              Try selecting a different service or vehicle type.
            </p>
          </div>
        ) : (
          // Station list
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-3"
          >
            {state.stations.map((station) => (
              <motion.div
                key={station.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`p-4 border rounded-md cursor-pointer transition-all ${
                    state.selectedStation === station.id
                      ? "border-primary bg-primary/5"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => handleSelectStation(station.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{station.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{station.distance} miles away</span>
                      </div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < station.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs ml-1 text-muted-foreground">
                          ({station.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                    <Button
                      variant={
                        state.selectedStation === station.id
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectStation(station.id);
                      }}
                    >
                      {state.selectedStation === station.id
                        ? "Selected"
                        : "Select"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
