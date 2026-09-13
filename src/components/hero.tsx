import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <>
      <div className="hero w-full min-h-[80vh] bg-gradient-to-b from-orange-100/20 via-orange-50/40 to-white flex items-center py-10 md:py-0">
        <div className="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 lg:gap-10 w-full">
          {/* Text Content */}
          <div className="hero_text w-full md:w-1/2 text-center md:text-left space-y-5 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-[50px] font-extrabold text-slate-900 leading-tight">
              Build Your Ideal{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 active:scale-95 text-white font-medium text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                Explore Technologies
              </button>

              <button className="border border-gray-300 hover:border-gray-400 hover:bg-gray-100 active:scale-95 text-gray-900 font-medium text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-200 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="hero_img w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Development Stack"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;