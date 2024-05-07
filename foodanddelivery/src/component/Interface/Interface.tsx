import { InterfaceIcon } from "../../assets";

const Interface = () => {
  return (
    <>
      <div className=" font-bold flex justify-center text-2xl">
        Delivery Business Interfaces
      </div>

      <div className="flex justify-center px-3 py-6">
        <button className="border bg-primary border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded mr-4">
          Dashboard
        </button>
        <button className="border border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded mr-4">
          Customer App
        </button>
        <button className="border border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded">
          Agent App
        </button>
      </div>
      <div className="flex justify-center">
        <img src={InterfaceIcon} className="h-[100%] w-[100%]" />
      </div>
    </>
  );
};

export default Interface;
