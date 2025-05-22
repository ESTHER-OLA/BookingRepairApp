"use client"

import { useBooking } from "@/context/booking-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, Battery, FuelIcon as Oil, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RepairServiceSelection() {
  const { state, dispatch } = useBooking()

  const services = [
    { id: "oil-change", name: "Oil Change", icon: Oil, description: "Regular oil change service" },
    {
      id: "battery-replacement",
      name: "Battery Replacement",
      icon: Battery,
      description: "Replace your vehicle's battery",
    },
    { id: "brake-service", name: "Brake Service", icon: Wrench, description: "Brake pad replacement and inspection" },
    { id: "general-inspection", name: "General Inspection", icon: Wrench, description: "Complete vehicle inspection" },
  ]

  const handleServiceChange = (value) => {
    dispatch({ type: "SET_SERVICE", payload: value })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Repair Service</CardTitle>
        <CardDescription>Choose the service you need for your vehicle</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!state.selectedCarType && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Please select a vehicle type first</AlertDescription>
          </Alert>
        )}

        <RadioGroup
          value={state.selectedService || ""}
          onValueChange={handleServiceChange}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          disabled={!state.selectedCarType}
        >
          {services.map((service) => {
            const Icon = service.icon
            const isSelected = state.selectedService === service.id

            return (
              <div key={service.id} className="relative">
                <RadioGroupItem
                  value={service.id}
                  id={`service-${service.id}`}
                  className="peer sr-only"
                  disabled={!state.selectedCarType}
                />
                <Label
                  htmlFor={`service-${service.id}`}
                  className={cn(
                    "flex flex-col h-full rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all",
                    !state.selectedCarType && "opacity-50 cursor-not-allowed hover:bg-popover hover:text-foreground",
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
                  <div className="flex items-center mb-2">
                    <Icon className="mr-2 h-5 w-5" />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Label>
              </div>
            )
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
