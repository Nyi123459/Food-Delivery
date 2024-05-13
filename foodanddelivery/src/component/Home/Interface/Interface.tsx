import {Images} from "../../../assets";

const Interface = () => {
  return (
    <section className="container md:mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pt-6 pb-20 overflow-hidden">
      <div className="font-bold flex justify-center text-2xl">
        Delivery Business Interfaces
      </div>

      <div className="flex flex-col sm:flex-row justify-center px-3 py-6 mb-5">
        <button className="border bg-primary border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4">
          Dashboard
        </button>
        <button className="border border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4">
          Customer App
        </button>
        <button className="border border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded mb-2 sm:mb-0">
          Agent App
        </button>
      </div>
      <div className="flex justify-center">
        <img src={Images.InterfaceIcon} className="max-w-[75%] max-h-[75 %]" />
      </div>
    </section>
  );
};

export default Interface;
