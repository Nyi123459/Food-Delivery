// import { RxTriangleRight } from "react-icons/rx";
// import styles from "../../style";
// import { Display } from "../../assets";
// import { iconsLinks } from "../../constants";

// const Herosection = () => {
//   return (
//     <section
//       className={`flex flex-col ${styles.paddingHero} bg-primary sm:375px md:667px flex-col relative`}>
//       <div className="flex flex-grow h-full relative ">
//         <div className="w-full justify-start my-12 item-center ">
//           <div className="text-5xl text-white leading-tight">
//             Ride & Savor <br />
//             Delivery Service <br />
//             Management
//           </div>
//           <p className="">Track and optimize routes in real-time</p>
//           <div className="flex mt-10">
//             <p className="shadow shadow-black bg-[#F17228] text-xs rounded-lg px-2 py-1  ">
//               Get Started
//             </p>
//             <RxTriangleRight className="ml-[20px] h-[25px] w-[25px] rounded-full border-[1.2px] bg-[#F17228] border-none shadow shadow-black" />
//             <p className="text-white text-sm ml-[10px] text-justify ">
//               {" "}
//               Watch how it works
//             </p>
//           </div>
//         </div>
//         <div className="w-full flex-grow">
//           <img
//             src={Display}
//             alt="Display-photo"
//             className="h-[100%] w-[100%]"
//           />
//         </div>
//       </div>
//       <div
//         className={`flex flex-grow space-x-14 ${styles.paddingHero} absolute top-[340px] left-0 right-0 `}>
//         {iconsLinks.map((data, index) => (
//           <div
//             className="border-2 bg-secondary flex top-0 w-[200px] h-[80px] rounded-xl gap-2 py-[10px] px-[20px] font-bold"
//             key={index}>
//             <img
//               src={data.icon}
//               alt={data.title}
//               className="w-[50px] h-[50px]"
//             />
//             <p className="py-[10px]">{data.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Herosection;

import React from "react";
import { RxTriangleRight } from "react-icons/rx";
import Images from "../../assets";
import { iconsLinks } from "../../constants";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <section className="flex flex-col bg-primary relative max-mdl:h-[320px] max-md:h-[600px]">
        <div className="max-md:flex-col flex mt-[5%] ml-[10%] mr-[10%] mb-[5%] max-md:h-1/2">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="max-w-[650px] lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl text-white">
              Ride & Savor <br />
              Delivery Service Management
            </div>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-xs">
              Track and optimize routes in real-time
            </p>
            <div className="flex mt-[10%] mb-[10%] items-center max-lg:mb-0">
              <p className=" shadow shadow-black bg-[#F17228] font-semibold text-base max-lg:text-sm max-md:text-xs text-white text-center flex justify-center items-center rounded-lg px-2 py-1 ">
                Get Started
              </p>
              <RxTriangleRight className="ml-[20px] h-[25px] w-[25px] rounded-full bg-[#F17228] border-[1.2px] border-none shadow shadow-black" />{" "}
              <p className="text-white text-sm ml-[10px] justify-center ">
                Watch how it works{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-md:mt-[10%]">
            <img src={Images.Display} alt="Display-Photo" className="w-full" />
          </div>
        </div>
        <div className="flex max-md:flex-col lg:flex justify-between absolute bottom-0 translate-y-1/2 gap-x-20 max-lg:gap-auto left-0 right-0 sm:ml-4 sm:mr-4 md:ml-8 md:mr-8 lg:ml-12 lg:mr-12 xl:ml-16 xl:mr-16 md:grid md:grid-cols-2 md:gap-4 md:h-[100px]">
          {iconsLinks.map((data, index) => (
            <div
              key={index}
              className="border-2 bg-secondary flex items-center sm:w-[250px] md:w-[250px] lg:w-[250px] xl:w-[250px] rounded-xl p-2.5 justify-start max-lg:ml-12 max-lg:mr-12 max-lg:mt-0"
            >
              <Link to={`/${data.title.toLowerCase()}`}>
                <img
                  src={data.icon}
                  alt={data.title}
                  className="w-[50px] h-[50px]"
                />
              </Link>
              <p className="text-xl sm:text-sm xs:text-xs max-md:text-base lg:text-lg lg:truncate md:truncate pl-4 ">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Herosection;

{
  /* <div className="flex">
  <div className="max-xl:hidden mt-[10%] shadow shadow-black bg-[#F17228] font-semibold text-base max-lg:text-sm max-md:text-xs text-white text-center flex justify-center items-center rounded-lg w-[20%] h-[10%] ">
    <p> Get Started</p>
    <RxTriangleRight className="" />{" "}
    <p className="text-white text-sm ml-[10px] text-justify ">
      Watch how it works{" "}
    </p>
  </div>
</div>; */
}
