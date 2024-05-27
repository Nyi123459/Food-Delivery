import { Images } from "../../../assets";
import Heading from "../../ItemCard/Items/Heading";

const DownloadSection = () => {
  return (
    <main className="pb-20">
      <Heading heading="Put us in your pocket" />
      <div className="flex flex-col lg:flex-row items-center justify-between bg-primary p-6 rounded-lg shadow-lg relative text-white mx-[10%]">
        {/* Left Section with Text and QR Code */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Download to order your favorite food and groceries.
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
            <img
              src={Images.QrCode} // Replace with the actual path to your QR code image
              alt="QR Code"
              className="w-16 h-16"
            />
            <p className="max-w-md">
              Your favorite restaurants and grocery stores are at your
              fingertips. Find your favorite food or grocery with the Ride&Savor
              app. Download the app now.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <button className="bg-black inline-flex py-2 px-4 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
              <img
                src={Images.PlayStoreIcon}
                alt="PlayStore"
                className="w-6 h-6"
              />
              <span className="ml-3 flex items-start flex-col leading-none">
                <span className="text-xs text-white mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-black inline-flex py-2 px-4 rounded-lg items-center hover:bg-amber-200 focus:outline-none">
              <img
                src={Images.AppleWhite}
                alt="AppleIcon"
                className="w-6 h-6"
              />
              <span className="ml-3 flex items-start flex-col leading-none">
                <span className="text-xs text-white mb-1">Download on the</span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Section with Mobile Screens */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <img
            src={Images.MobileApp} // Replace with the actual path to your mobile screens image
            alt="Mobile Screens"
            className="w-auto h-[300px] lg:h-[400px] drop-shadow-2xl drop-shadow-custom-white relative lg:top-[-50px]"
          />
        </div>
      </div>
    </main>
  );
};

export default DownloadSection;
