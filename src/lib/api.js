// Mock data for stations
const mockStations = [
  {
    id: "station-1",
    name: "Downtown Auto Repair",
    address: "123 Main St, Downtown",
    distance: 1.2,
    rating: 4.5,
    reviewCount: 128,
    services: ["oil-change", "battery-replacement", "brake-service", "general-inspection"],
    supportedVehicles: ["sedan", "suv"],
  },
  {
    id: "station-2",
    name: "Westside Car Care",
    address: "456 West Ave, Westside",
    distance: 2.8,
    rating: 4.8,
    reviewCount: 95,
    services: ["oil-change", "brake-service", "general-inspection"],
    supportedVehicles: ["sedan", "suv", "truck"],
  },
  {
    id: "station-3",
    name: "Eastside Auto Shop",
    address: "789 East Blvd, Eastside",
    distance: 3.5,
    rating: 4.2,
    reviewCount: 67,
    services: ["oil-change", "battery-replacement", "general-inspection"],
    supportedVehicles: ["sedan", "motorcycle"],
  },
  {
    id: "station-4",
    name: "Northside Mechanics",
    address: "101 North Rd, Northside",
    distance: 4.1,
    rating: 4.7,
    reviewCount: 42,
    services: ["oil-change", "battery-replacement", "brake-service", "general-inspection"],
    supportedVehicles: ["sedan", "suv", "truck", "motorcycle"],
  },
  {
    id: "station-5",
    name: "Southside Auto Center",
    address: "202 South St, Southside",
    distance: 5.3,
    rating: 3.9,
    reviewCount: 31,
    services: ["oil-change", "brake-service"],
    supportedVehicles: ["sedan", "suv"],
  },
]

// Function to generate time slots for the next 3 days
const generateTimeSlots = (stationId) => {
  const timeSlots = []
  const now = new Date()

  // Generate time slots for the next 3 days
  for (let day = 0; day < 3; day++) {
    const date = new Date(now)
    date.setDate(now.getDate() + day)
    date.setHours(9, 0, 0, 0) // Start at 9 AM

    // Generate time slots from 9 AM to 5 PM with 1-hour intervals
    for (let hour = 9; hour < 17; hour++) {
      const startTime = new Date(date)
      startTime.setHours(hour)

      const endTime = new Date(startTime)
      endTime.setHours(hour + 1)

      // Randomly mark some slots as unavailable
      const available = Math.random() > 0.3

      timeSlots.push({
        id: `${stationId}-${startTime.toISOString()}`,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        available,
      })
    }
  }

  // Filter out unavailable slots
  return timeSlots.filter((slot) => slot.available)
}

// Simulate API call to fetch stations
export const fetchStations = async (carType, service) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  if (!carType || !service) return []

  // Filter stations based on car type and service
  return mockStations.filter(
    (station) =>
      station.supportedVehicles.includes(carType) &&
      station.services.includes(service)
  )
}

// Simulate API call to fetch time slots
export const fetchTimeSlots = async (stationId) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return generateTimeSlots(stationId)
}
