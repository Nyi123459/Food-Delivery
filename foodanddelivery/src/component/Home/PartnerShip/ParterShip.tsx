// import { partnerShips } from "../../content";

// const ParterShip = () => {
//   return (
//     <section className="flex mx-[150px] py-[70px]  gap-8 justify-between items-center">
//       {partnerShips.map((data, index) => (
//         <div className="flex flex-col items-center w-[500px]" key={index}>
//           <img src={data.icon} alt="icon" className="w-[100px] h-[100px]" />
//           <div className="w-[250px] md:w-4[15opx] flex flex-col items-center">
//             <h3 className="text-xl font-semibold"> {data.title}</h3>
//             <p>{data.text}</p>
//             <a href="" className="text-blue-500 font-serif text-xl pt-1">
//               {data.link}
//             </a>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ParterShip;

import { partnerShips } from "../../../content";

const ParterShip = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-8 pt-6">
      <div className="flex flex-wrap justify-center gap-8">
        {partnerShips.map((data, index) => (
          <div className="flex flex-col items-center max-w-xs" key={index}>
            <img
              src={data.icon}
              alt="icon"
              className="w-40 h-40 md:w-40 md:h-40 mb-2"
            />
            <div className="text-center pt-4">
              <h3 className="text-lg md:text-2xl font-semibold mb-1">
                {data.title}
              </h3>
              <p className="text-sm md:text-base mb-2 pt-4">{data.text}</p>
              <a
                href={data.link}
                className="text-red-600 text-base font-bold md:text-base pt-4">
                {data.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParterShip;
