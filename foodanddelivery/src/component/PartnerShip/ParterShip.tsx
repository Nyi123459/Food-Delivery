import { partnerShips } from "../../content";

const ParterShip = () => {
  return (
    <section className="flex mx-[150px] py-[70px]  gap-8 justify-between items-center">
      {partnerShips.map((data, index) => (
        <div className="flex flex-col items-center w-[500px]" key={index}>
          <img src={data.icon} alt="icon" className="w-[100px] h-[100px]" />
          <div className="w-[250px] md:w-4[15opx] flex flex-col items-center">
            <h3 className="text-xl font-semibold"> {data.title}</h3>
            <p>{data.text}</p>
            <a href="" className="text-blue-500 font-serif text-xl pt-1">
              {data.link}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ParterShip;
