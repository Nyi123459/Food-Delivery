import React, { useState } from "react";
import Navbar from "../../component/Common/Navbar/Navbar.common";
import Herosection from "../../component/Taxi/Herosection/Herosection.Taxi";
import BookingContainer from "../../component/Taxi/Booking/BookingContainer";
import { GoogleMapsProvider } from "../../context/GoogleMapsProvider";
import DriverBidding from "../../component/Taxi/Booking/DriverBidding";
import { useAuth } from "../../context/userContext";

const Taxi = () => {
  const { currentUser } = useAuth();
  const [isDriverBiddingOpen, setIsDriverBiddingOpen] =
    useState<boolean>(false);

  const openDriverBidding = () => {
    setIsDriverBiddingOpen(true);
  };

  const closeDriverBidding = () => {
    setIsDriverBiddingOpen(false);
  };

  return (
    <>
      <Navbar />
      <Herosection />
      {currentUser?.role === "driver" ? (
        <>
          <button onClick={openDriverBidding}>Open Driver Bidding</button>
          <DriverBidding
            isOpen={isDriverBiddingOpen}
            onClose={closeDriverBidding}
          />
        </>
      ) : (
        <GoogleMapsProvider>
          <BookingContainer />
        </GoogleMapsProvider>
      )}
    </>
  );
};

export default Taxi;
