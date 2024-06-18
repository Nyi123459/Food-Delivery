import React, { useState, ChangeEvent, useCallback, useRef } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { Autocomplete } from "@react-google-maps/api";

interface AddressInputProps {
  address: string;
  setAddress: (address: string) => void;
  city: string;
  setCity: (city: string) => void;
  additionalAddress: string;
  setAdditionalAddress: (additionalAddress: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({
  address,
  setAddress,
  city,
  setCity,
  additionalAddress,
  setAdditionalAddress,
}) => {
  const [addressSet, setAddressSet] = useState(false);
  const [citySet, setCitySet] = useState(false);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handleAddressChange = useCallback(() => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.address_components) {
        const components = place.address_components;
        const placeName = place.name;
        const cityComponent = components.find((c) =>
          c.types.includes("locality")
        );
        const countryComponent = components.find((c) =>
          c.types.includes("country")
        );

        const formattedAddress = [
          placeName,
          cityComponent?.long_name,
          countryComponent?.long_name,
        ]
          .filter(Boolean)
          .join(", ");

        setAddress(formattedAddress);
        setCity(cityComponent?.long_name || "");
        setAddressSet(true);
        setCitySet(true);
      }
    }
  }, [setAddress, setCity]);

  const clearAddress = () => {
    setAddress("");
    setCity("");
    setAdditionalAddress("");
    setAddressSet(false);
    setCitySet(false);
  };

  const clearCity = () => {
    setCity("");
    setAdditionalAddress("");
    setCitySet(false);
  };

  return (
    <div className="mb-6">
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handleAddressChange}>
        <div className="relative">
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full pr-8 pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
          />
          {addressSet ? (
            <RiCloseLine
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              size={20}
              onClick={clearAddress}
            />
          ) : (
            <RiSearchLine
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              size={20}
            />
          )}
        </div>
      </Autocomplete>

      {addressSet && (
        <>
          <div className="mb-4 mt-4 relative">
            <input
              type="text"
              id="city"
              value={city}
              placeholder="City"
              onChange={(e) => {
                setCity(e.target.value);
                setCitySet(!!e.target.value);
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {citySet ? (
              <RiCloseLine
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                size={20}
                onClick={clearCity}
              />
            ) : (
              <RiSearchLine
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                size={20}
              />
            )}
          </div>
          {citySet && (
            <div className="mb-4">
              <input
                type="text"
                id="additionalAddress"
                value={additionalAddress}
                placeholder="Additional Address Details"
                onChange={(e) => setAdditionalAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AddressInput;
