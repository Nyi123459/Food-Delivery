import { Images } from "../../../assets";
import Heading from "../../ItemCard/Items/Heading";

const Instruction = () => {
  return (
    <div className="pb-20 pt-20">
      <Heading heading="How does it work" />
      <div className="flex flex-col sml:flex-row justify-center ml-[10%] mr-[10%]">
        <div className="mx-4 my-2 text-center flex flex-col items-center">
          <div className="mb-2">
            <img
              src={Images.Location}
              alt="Location Icon"
              className="w-32 h-32"
            />
          </div>
          <div>
            <h2 className="text-base font-bold">Select Location</h2>
            <p className="text-sm">
              Choose the location where your food will be delivered.
            </p>
          </div>
        </div>

        <div className="mx-4 my-2 text-center flex flex-col items-center">
          <div className="mb-2">
            <img src={Images.Order} alt="Order Icon" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-base font-bold">Choose Order</h2>
            <p className="text-sm">
              Check over hundreds of menus to pick your favorite food.
            </p>
          </div>
        </div>

        <div className="mx-4 my-2 text-center flex flex-col items-center">
          <div className="mb-2">
            <img
              src={Images.Payment}
              alt="Payment Icon"
              className="w-32 h-32"
            />
          </div>
          <div>
            <h2 className="text-base font-bold">Pay advanced</h2>
            <p className="text-sm">
              It's quick,safe,and simple. Select several methods of payments.
            </p>
          </div>
        </div>

        <div className="mx-4 my-2 text-center flex flex-col items-center">
          <div className="mb-2">
            <img src={Images.Meal} alt="Meal Icon" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-base font-bold">Enjoy meals</h2>
            <p className="text-sm">
              Food is made and delivered directly to your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
