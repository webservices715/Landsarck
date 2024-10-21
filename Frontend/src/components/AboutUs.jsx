import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#f4f4f4]  pt-16 px-4 lg:px-16">
      <div className=" flex flex-col md:flex-row md:gap-8">
        <div className="md:w-[80%] mb-8 md:mb-0">
          <h2 className="text-5xl mb-12 font-young-serif">About our company</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 lg:space-y-0 space-y-4">
            <p className="text-gray-900 font-bitter">
              At our landscape design firm, we blend expertise and creativity to transform outdoor spaces into stunning environments.
            </p>
            <p className="text-gray-900  font-bitter">
              Our dedicated team ensures every project reflects quality craftsmanship and innovative solutions tailored to meet our clients' unique visions.
              <a href="#" className=" border-b border-gray-900 ml-1">Learn more</a>
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1722375620.686804-HMGLIWUZVJUYXYSFRXXK/imgg-od3-odnbd9id.png" 
            alt="Landscape Design"
            className="w-[525px] h-[258px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
