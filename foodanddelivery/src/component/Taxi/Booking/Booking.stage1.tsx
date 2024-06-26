import React, { useState, useRef, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

import BookingCommon from "../../Common/Booking.common";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Button } from "@material-tailwind/react";

const center = { lat: 16.8256, lng: 96.1307 };

export interface BookingStageProps {
  currentStage: number;
  handleNext: () => void;
  handleBack: () => void;
}

const BookingStageOne: React.FC<BookingStageProps> = ({
  currentStage,
  handleNext,
  handleBack,
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is not set in environment variables");
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [pickupLocation, setPickupLocation] = useState(
    localStorage.getItem("pickupLocation") || ""
  );
  const [destination, setDestination] = useState(
    localStorage.getItem("destination") || ""
  );

  const pickupLocationRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoaded && pickupLocation && destination) {
      calculateRoute();
    }
  }, [pickupLocation, destination, isLoaded]);

  const calculateRoute = async () => {
    if (!pickupLocation || !destination) {
      console.log("Pickup location and destination must be filled out");
      return;
    }
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: pickupLocation,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance?.text || "");
    setDuration(results.routes[0].legs[0].duration?.text || "");
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setPickupLocation("");
    setDestination("");
    if (pickupLocationRef.current) {
      pickupLocationRef.current.value = "";
    }
    if (destinationRef.current) {
      destinationRef.current.value = "";
    }
    localStorage.removeItem("pickupLocation");
    localStorage.removeItem("destination");
  };

  const handleNextClick = () => {
    if (pickupLocation && destination) {
      handleNext();
    } else {
      alert("Please enter both pickup location and destination");
    }
  };

  const handlePickupChange = () => {
    const place = pickupLocationRef.current?.value || "";
    setPickupLocation(place);
    localStorage.setItem("pickupLocation", place);
  };

  const handleDestinationChange = () => {
    const place = destinationRef.current?.value || "";
    setDestination(place);
    localStorage.setItem("destination", place);
  };

  if (!isLoaded) {
    return (
      <Button
        className="rounded-full"
        loading={true}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
        Loading
      </Button>
    );
  }

  return (
    <BookingCommon
      currentStage={currentStage}
      handleNext={handleNext}
      handleBack={handleBack}>
      <div className="flex ml-[10%] mr-[10%] mt-[5%]">
        <div className="w-1/3">
          <div className="w-full rounded-md shadow-md shadow-blue-gray-500 h-[250px] bg-gradient-to-r from-[#FFC740] to-yellow-200 ">
            <p className="p-4 font-bold ml-[7%]">Get a ride</p>
            <Autocomplete onPlaceChanged={handlePickupChange}>
              <div className="flex justify-between items-center border rounded-md bg-white ml-[10%] mr-[10%] p-2">
                <input
                  type="text"
                  name="pickup location"
                  placeholder="Enter pickup location"
                  className="outline-none"
                  ref={pickupLocationRef}
                  defaultValue={pickupLocation}
                />
                <IoLocationOutline />
              </div>
            </Autocomplete>
            <div className="relative lex pt-5">
              <Autocomplete onPlaceChanged={handleDestinationChange}>
                <div className="flex justify-between items-center border rounded-md bg-white ml-[10%] mr-[10%] p-2">
                  <input
                    type="text"
                    name="destination"
                    placeholder="Enter destination"
                    className="outline-none"
                    ref={destinationRef}
                    defaultValue={destination}
                  />
                </div>
              </Autocomplete>
              <CiCirclePlus className="absolute right-3 top-8 size-5" />
              <button
                onClick={handleNextClick}
                className="mt-[5%] ml-[10%] w-16 h-8 bg-navcolor rounded-md">
                Book
              </button>
            </div>
          </div>
          <p className="text-center pt-8 font-bold">Ride to Saved Places</p>
          <div className="flex justify-around mt-[5%]">
            <div className="relative flex flex-col cursor-pointer">
              <div className="rounded-full bg-[#FFDB89] size-9 flex justify-center items-center shadow-sm shadow-gray-400">
                <FaHome className="text-[#F48C06] size-5" />
              </div>
              <IoIosAddCircle className="absolute right-1 top-7 transform translate-x-1/2 -translate-y-1/2 z-10 text-[#F48C06]" />
              <p>Home</p>
            </div>
            <div className="relative flex flex-col cursor-pointer">
              <div className="rounded-full bg-[#FFDB89] size-9 flex justify-center items-center shadow-sm shadow-gray-400 ">
                <FaSuitcase className="text-[#F48C06] size-5" />
              </div>
              <IoIosAddCircle className="absolute right-1 top-7 transform translate-x-1/2 -translate-y-1/2 z-10 text-[#F48C06]" />
              <p>Office</p>
            </div>
            <div className="relative flex flex-col ">
              <div className="rounded-full bg-[#FFDB89] size-9 flex justify-center items-center shadow-sm shadow-gray-400">
                <MdOutlineFavorite className="text-[#F48C06] size-5" />
              </div>
              <IoIosAddCircle className="absolute right-1 top-7 transform translate-x-1/2 -translate-y-1/2 z-10 text-[#F48C06]" />
              <p>New</p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="relative h-[400px] ml-[5%] shadow-md shadow-gray-400 ">
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}>
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
    </BookingCommon>
  );
};

export default BookingStageOne;
