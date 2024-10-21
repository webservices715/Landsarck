import React from 'react';
import '../App.css';

const services = [
  {
    id: 1,
    title: 'RESIDENTIAL & FARM LANDSCAPE',
    description: 'Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.',
    image: 'https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728728081277-616TEULQD8TIFZ8HQEFH/unsplash-image-ZJ7vm7jKWyA.jpg',
    alt: 'Residential & Farm Landscape',
  },
  {
    id: 2,
    title: 'COMMERCIAL LANDSCAPE',
    description: 'Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.',
    image: 'https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728728191103-MJI67XBSXXS78N9OW0I3/unsplash-image-F0_1bRibvjY.jpg',
    alt: 'Commercial Landscape',
  },
  {
    id: 3,
    title: 'RENOVATIONS',
    description: 'Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.',
    image: 'https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/0a6642f9-02fc-4b7f-80f6-6b00a48cce62/image-asset.jpeg?format=1500w',
    alt: 'Renovations',
  },
];

const GardenShop = () => {
  return (
    <div className="w-full bg-gray-50 px-4 lg:px-16 mx-auto py-16 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mb-8">
        <a
          href="#"
          className="bg-gray-300 text-black text-base font-bold sm:text-lg font-bitter px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-dark transition-all"
        >
          One-stop shop for all Garden things
        </a>
        <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg text-center">
          We provide everything you need to create and maintain the perfect garden.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6 text-center">
        {services.map((service) => (
          <div key={service.id} className="flex border flex-col items-center overflow-hidden pb-6 max-w-sm mx-auto">
            <div className="w-full h-[320px] sm:h-[220px] md:h-[300px] lg:h-[380px] overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="py-6 px-4 flex flex-col items-center">
              <h4 className="text-xl h-[4rem] sm:text-xl md:text-2xl mb-4 font-young-serif">{service.title}</h4>
              <p className="text-base sm:text-lg md:text-lg font-bitter mb-8">{service.description}</p>
              <a
                href="#"
                className="bg-zinc-900 font-bitter text-white text-sm sm:text-base lg:text-lg px-10 sm:px-32 lg:px-30 py-5 sm:py-6 lg:py-5 rounded-full hover:bg-zinc-700 transition-all"
              >
                Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenShop;