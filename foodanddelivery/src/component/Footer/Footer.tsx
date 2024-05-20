// import { Images } from "../../assets";
// import { footerLinks } from "../../content";
// import styles from "../../style";

// const Footer = () => {
//   return (
//     <section
//       className={`${styles.flexCenter} ${styles.paddingX} py-6 flex-col`}
//     >
//       <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//         <div className="flex-1 flex flex-col justify-start">
//           <div className="flex justify-start items-center gap-4">
//             <img
//               src={Images.logo}
//               alt="logo"
//               className="w-[266px] h-[80px] object-contain"
//             />
//           </div>
//           <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
//             A new way to make the payments easy, reliable and secure.
//           </p>
//         </div>

//         <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//           {footerLinks.map((footerLink, index) => (
//             <div
//               key={index}
//               className="flex flex-col ss:my-0 my-4 min-w-[150px]"
//             >
//               <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
//                 {footerLink.title}
//               </h4>
//               <ul className="list-none mt-4">
//                 {footerLink.links.map((link, index) => (
//                   <li
//                     key={index}
//                     className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${
//                       index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
//                     }`}
//                   >
//                     {link.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <hr />

//       <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
//         <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
//           © 2024 Ride & Savor
//         </p>
//         <div className="flex flex-row md:mt-0 mt-6">
//           Terms & Conditions | Privacy Policy
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

import { Images } from "../../assets";
import { footerLinks } from "../../content";

const Footer = () => {
  return (
    <section className="py-6 flex-col mt-[5%] ml-[10%] mr-[10%] mb-[5%]">
      <div className="flex flex-col md:flex-row mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start">
          <div className="mr-auto flex xs:ml-[30%] sm:ml-[30%] md:ml-[30%] mdl:ml-0 lg:ml-0 ">
            <img src={Images.logo} alt="Logo" className="w-50 h-6" />
          </div>
          <p className="mt-4 max-w-[310px]">
            A new way to make the payments easy, reliable and secure.
          </p>
          <div className="flex md:ml-[30%] mdl:ml-0 lg:ml-0 mx-auto items-center flex-shrink-0 space-x-4 mt-4">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
              <img
                src={Images.PlayStoreIcon}
                alt="PlayStore"
                className="w-6 h-6"
              />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
              <img
                src={Images.AppleBlack}
                alt="AppleIcon"
                className="w-6 h-6"
              />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">
                  Download on the
                </span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${
                      linkIndex !== footerLink.links.length - 1
                        ? "mb-4"
                        : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
          © 2024 Ride & Savor
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          Terms & Conditions | Privacy Policy
        </div>
      </div>
    </section>
  );
};

export default Footer;
