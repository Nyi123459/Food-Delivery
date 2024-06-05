import React from "react";
import BookingCommon from "../../Common/Booking.common";
import { BookingStageProps } from "./Booking.stage1";

const BookingStageThree: React.FC<BookingStageProps> = ({
  currentStage,
  handleNext,
  handleBack,
}) => {
  return (
    <BookingCommon
      sectionClassName={"bg-[#FFF1D2] w-full h-[860px]"}
      stagesClassName={"ml-[10%] mr-[10%] pt-[5%] flex justify-evenly"}
      children={
        <div className="w-full rounded-md shadow-md shadow-blue-gray-500 h-[250px] bg-gradient-to-r from-[#FFC740] to-yellow-200 ">
          Stage Three
        </div>
      }
      currentStage={currentStage}
      handleNext={handleNext}
      handleBack={handleBack}
    />
  );
};

export default BookingStageThree;
