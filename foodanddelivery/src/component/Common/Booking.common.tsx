import React, { useState } from "react";

interface BookingProps {
  sectionClassName: string;
  stagesClassName: string;
}

const BookingCommon: React.FC<BookingProps> = ({
  sectionClassName,
  stagesClassName,
}) => {
  const [currentStage, setCurrentStage] = useState(1);

  const stages = [
    { id: 1, label: "Choose Pickup" },
    { id: 2, label: "Book Savor's Taxi" },
    { id: 3, label: "Payment" },
  ];

  
  return (
    <section className={`${sectionClassName}`}>
      <div className="bg-white text-xl font-extrabold flex justify-center items-center h-[80px]">
        Booking
      </div>
      <div className={`${stagesClassName}`}>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full w-9 h-9 bg-[#FFC740] flex items-center justify-center">
            1
          </div>
          <div>Choose Pickup</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full w-9 h-9 bg-[#FFC740] flex items-center justify-center">
            2
          </div>
          <div>Book Savor's Taxi</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full w-9 h-9 bg-[#FFC740] flex items-center justify-center">
            3
          </div>
          <div>Payment</div>
        </div>
      </div>
      <div>
        <div>
          <div className="w-1/3">
            <p>Get a ride</p>
            <div>
              <p>Enter pickup location</p>
            </div>
            <div>
              <p>Enter destination</p>
            </div>
          </div>
          <div>
            <div>
              <p>Home</p>
            </div>
            <div>
              <p>Office</p>
            </div>
            <div>
              <p>New</p>
            </div>
          </div>
        </div>
        <div className="w-2/3"></div>
      </div>
    </section>
  );
};

export default BookingCommon;
