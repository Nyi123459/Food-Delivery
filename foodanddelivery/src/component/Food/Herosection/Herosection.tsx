import { Food } from "../../../assets";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Herosection = () => {
  return (
    <section className="bg-primary h-[550px]">
      <div className="flex ml-[10%] mr-[10%]">
        <div className="flex flex-col w-3/5 mt-[10%]">
          <div className="text-5xl text-white font-bold ">
            Would you like to be with me?
            <p className="text-base mt-[10%] text-black font-normal">
              Accessible meals and taxis, just a few clicks away.
            </p>
          </div>
          <div className="flex flex-col mb-[10%] mt-[10%] border-2 bg-white rounded-xl h-[60%]">
            <div className="flex ml-[5%] h-[50px] gap-3 items-center">
              <div className="flex rounded border-none h-[80%] w-[20%] justify-center items-center cursor-pointer hover:shadow-md hover:shadow-secondary hover:scale-110 transition duration-600 ease-in-out">
                <RiMotorbikeFill />
                Delivery
              </div>
              <div className="flex rounded border-none h-[80%] w-[20%] justify-center items-center cursor-pointer hover:shadow-md hover:shadow-secondary hover:scale-110 transition duration-600 ease-in-out">
                <FaShoppingBag />
                Pickup
              </div>
            </div>
            <div className="flex w-full justify-between items-center h-[65px]">
              <div className="flex h-[80%] w-[40%] ml-[5%] rounded-sm border-none items-center hover:shadow-md hover:shadow-secondary">
                <IoMdSearch
                  style={{
                    color: "#EF4358",
                    fontSize: "1.2rem",
                  }}
                />{" "}
                <input
                  className="w-full h-full outline-none "
                  type="text"
                  placeholder="Search Food"
                />
              </div>
              <div className="mr-[5%] border-none h-[60%] w-[20%] rounded-md bg-navcolor flex items-center justify-center cursor-pointer shadow-md shadow-shadownav">
                Find Food
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full mt-[10%]">
          <div className="carousel carousel-center max-w-md p-2 rounded-box mt-[10%] mb-[20%] ml-[10%] mr-[10%]">
            {Food.map((data) => (
              <div className="carousel-item h-[100%] w-[70%] max-lgl:h-[90%] max-lgl:w-[50%]">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[280px] w-auto rounded-box"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//   const settings = {
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   };

{
  /* <div className="w-2/5 ">
  <div className="carousel carousel-center max-w-md p-6 rounded-box mt-[20%] mb-[20%] ml-[10%] mr-[10%]">
    <div className="flex flex-col bottom-0 size-[300px]">
      <Slider {...settings}>
        {Food.map((data) => (
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="max-h-[250px] w-auto rounded-box"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>; */
}
