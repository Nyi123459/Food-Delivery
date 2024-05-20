import { Images } from "../../../assets";

const Interface = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pt-6 pb-20 overflow-hidden">
      <div className="font-bold text-center text-2xl mb-6">
        Delivery Business Interfaces
      </div>

      <div className="flex flex-col sml:flex-row justify-center items-center px-3 py-6 mb-5 space-y-2 sml:space-y-0 sml:space-x-4 w-full">
        <button className="flex-1 min-w-[100px] max-w-[200px] w-full border bg-primary border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded">
          Dashboard
        </button>
        <button className="flex-1 min-w-[100px] max-w-[200px] w-full border border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded">
          Customer App
        </button>
        <button className="flex-1 min-w-[100px] max-w-[200px] w-full border border-gray-500 text-gray-500 hover:text-white hover:bg-primary py-2 px-4 rounded">
          Agent App
        </button>
      </div>
      <div className="flex justify-center">
        <img src={Images.InterfaceIcon} className="max-w-[75%] max-h-[75%]" />
      </div>
    </section>
  );
};

export default Interface;
