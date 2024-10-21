import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-[#f4f4f4] py-20 md:px-5 px-2 w-full">
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <div className="flex flex-col items-center text-center mx-5 my-5">
          <div className="mb-3">
            {/* Icon for 10 year warranty */}
            <img
              src="https://cdn-icons-png.freepik.com/256/6755/6755750.png?uid=R202666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid"
              alt="Warranty Icon"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-young-serif">Flat 10 year warranty</h3>
          <p className="text-gray-600 font-bitter mt-2">
            Choose interiors designed with superior quality material, leaving no
            room for defects.
          </p>
        </div>

        <div className="flex flex-col items-center text-center mx-5 my-5">
          <div className="mb-3">
            {/* Icon for 45-day delivery */}
            <img
              src="https://cdn-icons-png.freepik.com/256/2563/2563813.png?uid=R202666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid"
              alt="Delivery Icon"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-young-serif">45-day delivery</h3>
          <p className="text-gray-600 font-bitter mt-2">
            Get beautiful interiors for your new home in just 45 days. That's
            our delivery guarantee.
          </p>
        </div>

        <div className="flex flex-col items-center text-center mx-5 my-5">
          <div className="mb-3">
            {/* Icon for design experts */}
            <img
              src="https://cdn-icons-png.freepik.com/256/3890/3890046.png?uid=R202666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid"
              alt="Design Experts Icon"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-young-serif">600+ design experts</h3>
          <p className="text-gray-600 font-bitter mt-2">
            Explore design ideas and co-create your dream home with our
            experienced designers.
          </p>
        </div>

        <div className="flex flex-col items-center text-center mx-5 my-5">
          <div className="mb-3">
            {/* Icon for post-installation service */}
            <img
              src="https://cdn-icons-png.freepik.com/256/4862/4862271.png?uid=R122666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid"
              alt="Service Icon"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-young-serif">Post-installation service</h3>
          <p className="text-gray-600 font-bitter mt-2">
            Complete your design journey and get unwavering support from our
            dedicated care team.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-4 border border-black hover:bg-black transition-all ease-out duration-300 text-black hover:text-white font-bitter font-semibold rounded">
          Book Free Design Session
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;
