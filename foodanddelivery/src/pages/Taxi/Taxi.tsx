import React from "react";
import Navbar from "../../component/Common/Navbar/Navbar.common";
import Herosection from "../../component/Taxi/Herosection/Herosection.Taxi";
import BookingContainer from "../../component/Taxi/Booking/BookingContainer";
import { GoogleMapsProvider } from "../../context/GoogleMapsProvider";

const Taxi = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <GoogleMapsProvider>
        <BookingContainer />
      </GoogleMapsProvider>
    </>
  );
};

export default Taxi;
