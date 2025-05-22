"use client"

import { useBooking } from "@/context/booking-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Calendar, MapPin, Car, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { format } from "date-fns"

export default function BookingConfirmation() {
  const { state, dispatch } = useBooking()

  const selectedStation = state.stations.find((station) => station.id === state.selectedStation)
  const selectedTimeSlot = state.timeSlots.find((slot) => slot.id === state.selectedTimeSlot)

  const handleNewBooking = () => {
    dispatch({ type: "RESET" })
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="border-green-500 dark:border-green-700">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-center text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription className="text-center">Your appointment has been successfully scheduled</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-md space-y-3">
            <div className="flex items-start">
              <Car className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Vehicle Type</p>
                <p className="font-medium capitalize">{state.selectedCarType?.replace("-", " ")}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Wrench className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-medium capitalize">{state.selectedService?.replace("-", " ")}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{selectedStation?.name}</p>
                <p className="text-sm text-muted-foreground">{selectedStation?.address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-medium">
                  {selectedTimeSlot && format(new Date(selectedTimeSlot.startTime), "EEEE, MMMM d, yyyy")}
                </p>
                <p className="text-sm">
                  {selectedTimeSlot && format(new Date(selectedTimeSlot.startTime), "h:mm a")} -
                  {selectedTimeSlot && format(new Date(selectedTimeSlot.endTime), "h:mm a")}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>A confirmation email has been sent to your email address.</p>
            <p>You can manage your booking through your account dashboard.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNewBooking} className="w-full">
            Make Another Booking
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
