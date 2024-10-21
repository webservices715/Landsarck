import React from "react";
import "../App.css";

const GardenShop = () => {
  return (
    <div className="w-full bg-gray-50 px-4 lg:px-16 mx-auto py-20">
      <div className="flex flex-col justify-center items-center mb-12">
        <a
          href="#"
          className="text-zinc-800 lg:text-4xl md:text-3xl text-2xl font-semibold font-bitter px-2 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-dark transition-all"
        >
          One-stop shop for all Garden things
        </a>
        <p className="px-2 sm:px-12 md:px-20 lg:px-[20rem] md:text-center text-lg sm:text-xl">
          Be it end-to-end interiors, renovation or modular solutions, we have
          it all for your home or office. With a wide range of furniture &
          decor, we have your back from start to finish.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 text-center lg:text-left">
        {/* Residential & Farm Landscape */}
        <div className="flex flex-col items-center lg:items-start overflow-hidden pb-8">
          <div className="w-full h-[400px] sm:h-[250px] md:h-[400px] lg:h-[520px]  overflow-hidden rounded-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728728081277-616TEULQD8TIFZ8HQEFH/unsplash-image-ZJ7vm7jKWyA.jpg"
              alt="Residential & Farm Landscape"
              className="w-full h-full object-cover  rounded-[2.5rem]"
            />
          </div>
          <div className="py-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl mb-4 font-young-serif">
              RESIDENTIAL & FARM LANDSCAPE
            </h4>
            <p className="text-base sm:text-lg md:text-xl font-bitter mb-12 lg:mb-32">
              Add your pricing strategy. Be sure to include important details
              like value, length of service, and why it’s unique.
            </p>
            <a
              href="#"
              className="bg-zinc-900 font-bitter text-white text-sm sm:text-base  lg:text-lg px-28 sm:px-40 lg:px-44 py-6 sm:py-8 lg:py-8 rounded-full hover:bg-zinc-700 transition-all"
            >
              Book
            </a>
          </div>
        </div>

        {/* Commercial Landscape */}
        <div className="flex flex-col items-center lg:items-start overflow-hidden">
          <div className="w-full h-[400px] sm:h-[250px] md:h-[400px] lg:h-[520px]  overflow-hidden rounded-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728728191103-MJI67XBSXXS78N9OW0I3/unsplash-image-F0_1bRibvjY.jpg"
              alt="Commercial Landscape"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl mb-4 font-young-serif">
              COMMERCIAL LANDSCAPE
            </h4>
            <p className="text-base sm:text-lg md:text-xl font-bitter mb-12 lg:mb-40">
              Add your pricing strategy. Be sure to include important details
              like value, length of service, and why it’s unique.
            </p>
            <a
              href="#"
              className="bg-zinc-900 font-bitter text-white text-sm sm:text-base  lg:text-lg px-28 sm:px-40 lg:px-44 py-6 sm:py-8 lg:py-8 rounded-full hover:bg-zinc-700 transition-all"
            >
              Book
            </a>
          </div>
        </div>

        {/* Renovations */}
        <div className="flex flex-col items-center lg:items-start overflow-hidden">
          <div className="w-full h-[400px] sm:h-[250px] md:h-[400px] lg:h-[520px]  overflow-hidden rounded-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/0a6642f9-02fc-4b7f-80f6-6b00a48cce62/image-asset.jpeg?format=1500w"
              alt="Renovations"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl mb-4 font-young-serif">
              RENOVATIONS
            </h4>
            <p className="text-base sm:text-lg md:text-xl font-bitter mb-10 lg:mb-40">
              Add your pricing strategy. Be sure to include important details
              like value, length of service, and why it’s unique.
            </p>
            <a
              href="#"
              className="bg-zinc-900 font-bitter text-white text-sm sm:text-base lg:text-lg px-28 sm:px-40 lg:px-44 py-6 sm:py-8 lg:py-8 rounded-full hover:bg-zinc-700 transition-all"
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenShop;
