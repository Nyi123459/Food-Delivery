import React from "react";
import Navbar from "../../component/Common/Navbar/Navbar.common";
import Herosection from "../../component/Taxi/Herosection/Herosection.Taxi";
import Booking from "../../component/Taxi/Booking/Booking";

const Taxi = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Booking />
    </>
  );
};

export default Taxi;
