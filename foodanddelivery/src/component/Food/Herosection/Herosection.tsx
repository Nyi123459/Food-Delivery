import { Food } from "../../../assets";

const Herosection = () => {
  return (
    <section className="bg-primary">
      <div className="flex ml-[10%] mr-[10%]">
        <div className="flex flex-col w-3/5">
          <div className="text-5xl text-white font-bold mt-[10%]">
            Would you like to be with me?
            <p className="text-base mt-[10%]">
              Accessible meals and taxis,just a few clicks away.
            </p>
          </div>
          <div>Delivery</div>
        </div>
        <div className="w-2/5 ">
          <div className="carousel carousel-center bg-none rounded-box mt-[20%] mb-[20%] ml-[10%]">
            <div className="carousel-item size-[250px] object-contain space-x-4 p-4 max-w-md">
              {Food.map((data, index) => (
                <img src={data.image} alt={data.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
