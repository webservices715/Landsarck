import React from 'react';

const ProductSection = () => {
  const products = [
    {
      title: 'Outdoor structures',
      price: '50000',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728493765218-91E7PV2XP8WZ6NDI76W8/unsplash-image-L-URIPpFsbc.jpg?format=1500w',
      offer: 'Limited offer!',
    },
    {
      title: 'Landscape lighting',
      price: '3000',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728494387656-0VIJ8TVKSTLXWMQSN3TM/unsplash-image-H4d2_VwHCxw.jpg?format=1500w',
    },
    {
      title: 'Water features',
      price: '15000',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1728494532683-E5JR26P6ADB69D6D5GW5/unsplash-image-duh7QMK1gIo.jpg?format=1500w',
    },
    {
      title: 'Fire features',
      price: '15000',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/f833b5da-20dc-453e-8248-dd7668f73906/Untitled+1.png?format=1500w',
      offer: 'Limited offer!',
    },
  ];

  return (
    <div className="w-full py-20 px-6 sm:px-8 md:px-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-young-serif">Featured Products</h2>
        {/* Large screens pe dikhaye */}
        <button className="hidden md:block px-12 py-4 sm:px-16 sm:py-5 md:px-20 md:py-6 font-bitter border border-black rounded-full hover:bg-black hover:text-white transition">
          Explore more
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div className="relative bg-white overflow-hidden" key={index}>
            {product.offer && (
              <div className="absolute top-0 right-0 bg-gray-50 text-black text-[12px] sm:text-[13px] md:text-[14.5px] px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-7 font-bitter">
                {product.offer}
              </div>
            )}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="py-4">
              <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-young-serif">{product.title}</h3>
              <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8">
                <p className="text-gray-800 font-bitter">Starting from {product.price}/-</p>
                <button className="ml-3 px-4 py-3 font-bitter border border-black text-black rounded-md hover:bg-black  hover:text-white transition-all ease-in-out duration-300">
                Explore more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-8 md:hidden flex justify-center">
        <button className="px-28 py-4 sm:px-40 sm:py-5 md:px-20 md:py-6 font-bitter border border-black rounded-full hover:bg-black hover:text-white transition">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
