import React, { createContext, useContext, useState, ReactNode } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GoogleMapsContext = createContext<{ isLoaded: boolean; apiKey: string }>({
  isLoaded: false,
  apiKey: "",
});

export const GoogleMapsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is not set in environment variables");
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, apiKey }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
