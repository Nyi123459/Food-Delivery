import { Images } from "../../../assets";

const Newletters = () => {
  const imageStyle = {
    backgroundImage: `url(${Images.Newletters})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "150px",
    width: "150px",
    borderRadius: "50%",
  };

  return (
    <div className="flex bg-primary">
      <div className="mt-5 mx-[5%] md:mx-[8%] lg:mx-[10%] mb-5 bg-black/60 sm:bg-transparent py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center lg:hidden"
          style={{ backgroundImage: `url(${Images.Newletters})` }}
        ></div>

        <div className="relative grid grid-cols-1 mdl:grid-cols-12 items-center gap-8 text-center lg:text-left">
          <div className="space-y-4 mdl:col-span-5 mdl:pl-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white/90">
              Ready to get Started
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mdl:col-span-4">
            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-col sm:flex-row items-center lg:items-stretch">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full max-w-[400px] px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-md ring-0 focus:outline-none"
                />
                <button className="bg-white text-primary px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:rounded-btn hover:text-black">
                  <span className="text-sm uppercase font-semibold">
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex mdl:col-span-3 justify-center mdl:justify-end lg:ml-8">
            <div style={imageStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletters;
