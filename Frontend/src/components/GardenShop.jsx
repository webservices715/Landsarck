import React from 'react';
import '../App.css';

const GardenShop = () => {
  return (
    <div className="w-full lg:px-14 px-2 mx-auto py-12 lg:py-24">
      <div className="flex justify-center mb-6">
        <a
          href="#"
          className="bg-zinc-900 text-white text-lg font-bitter px-8 py-4 rounded-full hover:bg-primary-dark transition-all"
        >
          One-stop shop for all Garden things
        </a>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Residential & Farm Landscape */}
        <div className="flex flex-col items-center  overflow-hidden">
          <div className="w-full h-[55%] overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728728081277-616TEULQD8TIFZ8HQEFH/unsplash-image-ZJ7vm7jKWyA.jpg"
              alt="Residential & Farm Landscape"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          <div className="py-4">
            <h4 className="text-3xl mb-2 font-young-serif">RESIDENTIAL & FARM LANDSCAPE</h4>
            <p className="text-lg mt-4 mb-16 font-bitter">
              Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.
            </p>
            <a
              href="#"
              className="bg-zinc-900 font-bitter text-white text-lg px-36 lg:px-48 py-8 rounded-full hover:bg-zinc-700 transition-all"
            >
              Book
            </a>
          </div>
        </div>

        {/* Commercial Landscape */}
        <div className="flex flex-col items-center  overflow-hidden">
          <div className="w-full h-[55%] overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728728191103-MJI67XBSXXS78N9OW0I3/unsplash-image-F0_1bRibvjY.jpg"
              alt="Commercial Landscape"
              className="w-full h-full object-cover rounded-[30%]"
            />
          </div>
          <div className="py-5">
            <h4 className="text-3xl mb-2 font-young-serif">COMMERCIAL LANDSCAPE</h4>
            <p className="text-lg mt-8 mb-16 font-bitter">
              Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.
            </p>
            <a
              href="#"
              className="bg-zinc-900 font-bitter text-white text-lg px-36 lg:px-48 py-8 rounded-full hover:bg-zinc-700 transition-all"
            >
              Book
            </a>
          </div>
        </div>

        {/* Renovations */}
        <div className="flex flex-col items-center  overflow-hidden">
          <div className="w-full h-[55%] overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/0a6642f9-02fc-4b7f-80f6-6b00a48cce62/image-asset.jpeg?format=1500w"
              alt="Renovations"
              className="w-full h-full object-cover rounded-clip-2"
            />
          </div>
          <div className="py-5">
            <h4 className="text-3xl mb-2 font-young-serif">RENOVATIONS</h4>
            <p className="text-lg mt-8 mb-16 font-bitter">
              Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.
            </p>
            <a
              href="#"
              className="bg-zinc-900 font-bitter text-white text-lg px-36 lg:px-48 py-8 rounded-full hover:bg-zinc-700 transition-all"
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
