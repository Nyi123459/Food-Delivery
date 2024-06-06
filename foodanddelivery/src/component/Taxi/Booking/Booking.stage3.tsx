import React from "react";
import BookingCommon from "../../Common/Booking.common";
import { BookingStageProps } from "./Booking.stage1";
import { PaymentLogos } from "../../../assets";
import { TbScan } from "react-icons/tb";
import QuickPay from "../../../assets/Taxi/Payment/QuickPay.png";

const BookingStageThree: React.FC<BookingStageProps> = ({
  currentStage,
  handleNext,
  handleBack,
}) => {
  return (
    <BookingCommon
      currentStage={currentStage}
      handleNext={handleNext}
      handleBack={handleBack}>
      <div className="mt-[5%] ml-[10%] mr-[10%] flex">
        <div className="w-1/3">
          <div className="w-full h-[450px] shadow-sm shadow-blue-gray-500 rounded-md flex flex-col gap-4 bg-gradient-to-r from-[#FFC740] to-yellow-200 ">
            <p className="pt-[5%] pl-[10%] text-base font-bold">
              Select Payment
            </p>
            <div className="flex flex-col gap-5 ml-[5%] mr-[5%] items-center">
              {PaymentLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="pl-2 pr-2 flex justify-between w-[80%] h-10 bg-white rounded-lg">
                  <div className="flex justify-center items-center gap-3">
                    <img
                      id={logo.id}
                      src={logo.img}
                      alt={logo.title}
                      className="object-contain size-8"
                    />
                    <p className="text-sm font-bold">{logo.title}</p>
                  </div>
                  <input type="radio" id={logo.id} name="payment" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-[10%]">
            <button
              className=" w-[20%] h-8 bg-navcolor rounded-md"
              onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
        <div className="w-2/3">
          <div className="ml-[5%] w-full h-full bg-[#FFFCF5] border rounded-md shadow-sm shadow-blue-gray-500 flex flex-col p-4">
            <p className="text-navcolor font-bold flex justify-center">
              PAYMENT FORM
            </p>
            <p className="font-bold p-5">Credit Card Payment</p>
            <div className="flex justify-between w-full gap-8 p-5">
              <div className="flex flex-col w-full">
                <p>Payment method</p>
                <input
                  type="text"
                  className="border border-black outline-none w-full h-10 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full">
                <p>Expiration date</p>
                <input
                  type="date"
                  className="border border-black outline-none w-full h-10 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-8 p-5">
              <div className="flex flex-col w-full">
                <p>Card number</p>
                <input
                  type="text"
                  className="border border-black outline-none w-full h-10 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full">
                <p>Security code</p>
                <input
                  type="text"
                  className="border border-black outline-none w-full h-10 rounded-md"
                />
              </div>
            </div>
            <p className="font-bold pl-5">Banking Payment</p>
            <div className="flex w-full p-5 items-center">
              <div className="w-1/5 flex flex-col items-center">
                <p>Scan</p>
                <TbScan className="size-12 hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out bg-white" />
              </div>
              <div className="w-3/5 flex flex-col items-center">
                <p>Transfer Money</p>
                <input
                  type="text"
                  className="border border-black outline-none w-[70%] h-10 rounded-md"
                />
              </div>
              <div className="w-1/5 flex flex-col items-center">
                <p>Quick Pay</p>
                <img
                  src={QuickPay}
                  alt="Quick_Pay"
                  className="object-contain size-12"
                />
              </div>
            </div>
            <div className="flex justify-between w-full p-5">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-4" />
                <p>Remember Me</p>
              </div>
              <button className="w-[10%] h-8 bg-navcolor rounded-md flex justify-center items-center shadow-sm shadow-blue-gray-500">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </BookingCommon>
  );
};

export default BookingStageThree;
