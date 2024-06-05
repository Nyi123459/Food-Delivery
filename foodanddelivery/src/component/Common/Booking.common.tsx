import classNames from "classnames";
import { ReactNode } from "react";

interface BookingProps {
  sectionClassName: string;
  stagesClassName: string;
  currentStage: number;
  handleNext: () => void;
  handleBack: () => void;
  children: ReactNode;
}

const BookingCommon: React.FC<BookingProps> = ({
  sectionClassName,
  stagesClassName,
  currentStage,
  handleNext,
  handleBack,
  children,
}) => {
  const stages = [
    { id: 1, label: "Choose Pickup" },
    { id: 2, label: "Book Savor's Taxi" },
    { id: 3, label: "Payment" },
  ];

  return (
    <section className={sectionClassName}>
      <div className="bg-white text-xl font-extrabold flex justify-center items-center h-[80px]">
        Booking
      </div>
      <div className={stagesClassName}>
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={classNames("flex flex-col items-center justify-center", {
              "opacity-50": stage.id !== currentStage,
            })}>
            <div className="rounded-full w-9 h-9 bg-[#FFC740] flex items-center justify-center">
              {stage.id}
            </div>
            <div>{stage.label}</div>
          </div>
        ))}
      </div>
      <div>
        {children}
        {<div className="flex justify-between mt-4">
          <button onClick={handleBack} disabled={currentStage === 1}>
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStage === stages.length}>
            Next
          </button>
        </div>}
      </div>
    </section>
  );
};

export default BookingCommon;
