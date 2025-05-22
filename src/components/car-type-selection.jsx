"use client"

import { useBooking } from "@/context/booking-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Car, Truck, Bike } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function CarTypeSelection() {
  const { state, dispatch } = useBooking()

  const carTypes = [
    { id: "sedan", name: "Sedan", icon: Car },
    { id: "suv", name: "SUV", icon: Car },
    { id: "truck", name: "Truck", icon: Truck },
    { id: "motorcycle", name: "Motorcycle", icon: Bike },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Vehicle Type</CardTitle>
        <CardDescription>Choose the type of vehicle you need serviced</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={state.selectedCarType || ""}
          onValueChange={(value) => {
            dispatch({ type: "SET_CAR_TYPE", payload: value })
          }}
          className="grid grid-cols-2 gap-4"
        >
          {carTypes.map((carType) => {
            const Icon = carType.icon
            const isSelected = state.selectedCarType === carType.id

            return (
              <div key={carType.id} className="relative">
                <RadioGroupItem value={carType.id} id={`car-type-${carType.id}`} className="peer sr-only" />
                <Label
                  htmlFor={`car-type-${carType.id}`}
                  className={cn(
                    "flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all",
                    isSelected && "border-primary",
                  )}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </motion.div>
                  )}
                  <Icon className="mb-3 h-6 w-6" />
                  <span>{carType.name}</span>
                </Label>
              </div>
            )
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
