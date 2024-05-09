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
import { Display } from "../../assets";

const Herosection = () => {
  return (
    <>
      <div className="flex flex-col bg-primary">
        <div className="flex mt-[5%] ml-[10%] mr-[10%]">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="max-w-[650px] lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl text-white">
              Ride & Savor <br />
              Delivery Service Management
            </div>
            <div className="mt-[10%] shadow shadow-black bg-[#F17228] text-xs font-semibold text-white text-center flex justify-center items-center rounded-lg w-[20%] h-[10%] ">
              Get Started
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Display} alt="Display-Photo" className="w-full" />
          </div>
        </div>

        <div>Buttons</div>
      </div>
    </>
  );
};

export default Herosection;
