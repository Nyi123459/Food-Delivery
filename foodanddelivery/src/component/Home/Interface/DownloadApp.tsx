// import { Images } from "../../../assets";

// const DownloadSection = () => {
//   return (
//     <section className="flex justify-center items-center mt-5 mx-[5%] md:mx-[8%] lg:mx-[10%] mb-5 py-16 relative  text-white">
//       <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-primary p-8 rounded-lg shadow-lg">
//         {/* Left Section with Text and QR Code */}
//         <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
//             Download to order your favorite food and groceries.
//           </h2>
//           <p className="max-w-md mb-4">
//             Your favorite restaurants and grocery stores are at your fingertips.
//             Find your favorite food or grocery with the foodpanda app. Download
//             the app now.
//           </p>
//           <img
//             src={Images.QrCode} // Replace with the actual path to your QR code image
//             alt="QR Code"
//             className="w-20 h-20"
//           />
//           <div className="flex flex-wrap justify-center lg:justify-start gap-2">
//             <div className="flex md:ml-[30%] mdl:ml-0 lg:ml-0 mx-auto items-center flex-shrink-0 space-x-4 mt-4">
//               <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
//                 <img
//                   src={Images.PlayStoreIcon}
//                   alt="PlayStore"
//                   className="w-6 h-6"
//                 />
//                 <span className="ml-4 flex items-start flex-col leading-none">
//                   <span className="text-xs text-white mb-1">GET IT ON</span>
//                   <span className="title-font font-medium">Google Play</span>
//                 </span>
//               </button>
//               <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
//                 <img
//                   src={Images.AppleWhite}
//                   alt="AppleIcon"
//                   className="w-6 h-6"
//                 />
//                 <span className="ml-4 flex items-start flex-col leading-none">
//                   <span className="text-xs text-white mb-1">
//                     Download on the
//                   </span>
//                   <span className="title-font font-medium">App Store</span>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Section with Mobile Screens */}
//         <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
//           <img
//             src={Images.MobileApp} // Replace with the actual path to your mobile screens image
//             alt="Mobile Screens"
//             className="w-auto h-[300px] lg:h-[400px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DownloadSection;

import { Images } from "../../../assets";

const DownloadSection = () => {
  return (
    <section className="container md:mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pt-20 pb-20 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-10 mt-6">
        Put us in your pocket
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-primary p-8 rounded-lg shadow-lg relative text-white">
        {/* Left Section with Text and QR Code */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Download to order your favorite food and groceries.
          </h2>
          <p className="max-w-md mb-4">
            Your favorite restaurants and grocery stores are at your fingertips.
            Find your favorite food or grocery with the foodpanda app. Download
            the app now.
          </p>
          <img
            src={Images.QrCode} // Replace with the actual path to your QR code image
            alt="QR Code"
            className="w-20 h-20"
          />
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <div className="flex md:ml-[30%] mdl:ml-0 lg:ml-0 mx-auto items-center flex-shrink-0 space-x-4 mt-4">
              <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
                <img
                  src={Images.PlayStoreIcon}
                  alt="PlayStore"
                  className="w-6 h-6"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-white mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
                <img
                  src={Images.AppleWhite}
                  alt="AppleIcon"
                  className="w-6 h-6"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-white mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section with Mobile Screens */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={Images.MobileApp} // Replace with the actual path to your mobile screens image
            alt="Mobile Screens"
            className="w-auto h-[300px] lg:h-[400px] drop-shadow-2xl drop-shadow-custom-white relative top-[-50px] lg:top-[-80px] lg:right-[-50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
