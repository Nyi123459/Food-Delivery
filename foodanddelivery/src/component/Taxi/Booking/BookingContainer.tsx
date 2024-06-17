import React, { useState } from "react";
import BookingCommon from "../../Common/Booking.common";
import BookingStageOne from "./Booking.stage1";
import BookingStageTwo from "./Booking.stage2";
import BookingStageThree from "./Booking.stage3";

const BookingContainer = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const handleNext = () => {
    setCurrentStage(currentStage < 3 ? currentStage + 1 : currentStage);
  };

  const handleBack = () => {
    setCurrentStage(currentStage > 1 ? currentStage - 1 : currentStage);
  };

  return (
    <>
      {currentStage === 1 && (
        <BookingStageOne
          currentStage={currentStage}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {currentStage === 2 && (
        <BookingStageTwo
          currentStage={currentStage}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {currentStage === 3 && (
        <BookingStageThree
          currentStage={currentStage}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
    </>
  );
};

export default BookingContainer;
