import React from "react";
import Navbar from "../../component/Common/Navbar/Navbar.common";
import Herosection from "../../component/Taxi/Herosection/Herosection.Taxi";
import BookingContainer from "../../component/Taxi/Booking/BookingContainer";

const Taxi = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <BookingContainer />
    </>
  );
};

export default Taxi;
