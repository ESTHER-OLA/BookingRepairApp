"use client";

import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  selectedCarType: null,
  selectedService: null,
  stations: [],
  selectedStation: null,
  timeSlots: [],
  selectedTimeSlot: null,
  loadingStations: false,
  loadingTimeSlots: false,
  bookingStatus: "idle",
};

const BookingContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function bookingReducer(state, action) {
  switch (action.type) {
    case "SET_CAR_TYPE":
      return {
        ...state,
        selectedCarType: action.payload,
        selectedService: null,
        stations: [],
        selectedStation: null,
        timeSlots: [],
        selectedTimeSlot: null,
        bookingStatus: "idle",
      };
    case "SET_SERVICE":
      return {
        ...state,
        selectedService: action.payload,
        stations: [],
        selectedStation: null,
        timeSlots: [],
        selectedTimeSlot: null,
        bookingStatus: "idle",
      };
    case "SET_STATIONS":
      return {
        ...state,
        stations: action.payload,
        selectedStation: null,
        timeSlots: [],
        selectedTimeSlot: null,
      };
    case "SET_STATION":
      return {
        ...state,
        selectedStation: action.payload,
        timeSlots: [],
        selectedTimeSlot: null,
      };
    case "SET_TIME_SLOTS":
      return {
        ...state,
        timeSlots: action.payload,
        selectedTimeSlot: null,
      };
    case "SET_TIME_SLOT":
      return {
        ...state,
        selectedTimeSlot: action.payload,
      };
    case "SET_LOADING_STATIONS":
      return {
        ...state,
        loadingStations: action.payload,
      };
    case "SET_LOADING_TIME_SLOTS":
      return {
        ...state,
        loadingTimeSlots: action.payload,
      };
    case "SET_BOOKING_STATUS":
      return {
        ...state,
        bookingStatus: action.payload,
      };
    case "RESET":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
