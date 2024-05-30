import { partnerShips } from "../../../content";
import { useNavigate } from "react-router-dom";

const PartnerShip = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-0 md:px-8 pt-6 pb-20 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {partnerShips.map((data, index) => (
          <div
            className="flex flex-col items-center w-full max-w-sm md:max-w-xs lg:max-w-sm"
            key={index}
          >
            <img
              src={data.icon}
              alt="icon"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-32 lg:h-32 mb-2"
            />
            <div className="text-center pt-4">
              <h3 className="text-lg md:text-2xl font-semibold mb-1">
                {data.title}
              </h3>
              <p className="text-sm md:text-base mb-2 pt-2 md:pt-4">
                {data.text}
              </p>

              <button
                onClick={() => navigate(data.linkPath)}
                className="text-red-600 text-base font-bold md:text-base pt-2 md:pt-4"
              >
                {data.linkText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerShip;
