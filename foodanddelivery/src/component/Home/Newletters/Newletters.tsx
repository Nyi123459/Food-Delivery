/* import { Images } from "../../../assets";

const Newletters = () => {
  const imageStyle = {
    backgroundImage: `url(${Images.Newletters})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "150px",
    width: "150px",
    borderRadius: "50%"
  };

  return (
    <div className="bg-primary text-white">
      <div className="container max-w-container bg-black/60 sm:bg-transparent py-16">
        <div className="grid grid-cols-1 lgl:grid-cols-12 items-center gap-8">
          <div className="space-y-4 text-center sm:text-left lgl:col-span-5 lgl:pl-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white/90">Ready to get Started</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center sm:text-left lgl:col-span-4">
            <div className="flex justify-center sm:justify-start">
              <input
                type="text"
                placeholder="Enter your email"
                className="max-w-[400px] px-4 py-2 rounded-l-md ring-0 focus:outline-none text-dark"
              />
              <button className="bg-white text-primary px-4 py-2 rounded-r-md">
                <span className="text-sm uppercase font-semibold">Get Started</span>
              </button>
            </div>
          </div>
          <div className="lgl:col-span-3 flex justify-center lgl:justify-end">
            <div style={imageStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletters; */
 


import { Images } from "../../../assets";

const Newletters = () => {
  const imageStyle = {
    backgroundImage: `url(${Images.Newletters})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "150px",
    width: "150px",
    borderRadius: "50%"
  };

  return (
    <div className="bg-primary text-white">
      <div className="container max-w-container bg-black/60 sm:bg-transparent py-16 relative">
       
        <div
          className="absolute inset-0 bg-cover bg-center lg:hidden"
          style={{ backgroundImage: `url(${Images.Newletters})` }}
        ></div>

        <div className="relative grid grid-cols-1 lgl:grid-cols-12 items-center gap-8 text-center lg:text-left">
          <div className="space-y-4 lgl:col-span-5 lgl:pl-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white/90">
              Ready to get Started
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="lgl:col-span-4">
            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-col sm:flex-row items-center lg:items-stretch">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="max-w-[400px] px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-md ring-0 focus:outline-none text-dark"
                />
                <button className="bg-white text-primary px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md">
                  <span className="text-sm uppercase font-semibold">Get Started</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex lgl:col-span-3 justify-center lgl:justify-end lg:ml-8">
            <div style={imageStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletters;
