import React, { useState } from 'react';

const plans = [
  {
    title: 'Basic Landscape',
    description:
      'Our basic garden pricing starts at ₹500 to ₹800 per square foot. This package includes standard plants, planters, and soil, providing a comprehensive solution for your gardening needs. Depending on the specific selections and layout, we can tailor a garden that fits both your aesthetic preferences and budget effectively.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Premium Landscape',
    description:
      'Our pricing for premium landscaping services begins at ₹800 to ₹1,200 per square foot. This range includes advanced features such as irrigation systems, premium plants, and structural elements. Our commitment to quality ensures that every project is tailored to meet the specific needs and preferences of our clients, while providing the best in aesthetics and functionality.',
    imageUrl: 'https://images.pexels.com/photos/27997625/pexels-photo-27997625/free-photo-of-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Luxury Landscape',
    description:
      'Our prices for luxury landscape services start at ₹1,200+ per square foot. This includes features such as water features, specialized lighting, and premium structural elements. Each project is tailored to enhance your outdoor space, combining aesthetics with functionality to create a stunning environment. Our team of experts is dedicated to providing high-quality service and craftsmanship to meet your unique landscape needs.',
    imageUrl: 'https://images.pexels.com/photos/17017618/pexels-photo-17017618/free-photo-of-cube-houses-in-rotterdam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const TerraceGardenPlan = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(plans[0].imageUrl);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedImage(plans[index].imageUrl);
  };

  return (
    <div className="mx-auto p-6 lg:flex lg:space-x-8 lg:px-16">
      {/* Left section (Text and Accordion) */}
      <div className="lg:w-1/2 lg:px-16">
        <h1
          className="text-[40px] md:text-[60px] lg:text-[70px] text-center mb-4 md:mb-6 mt-4 md:mt-8 font-young-serif"
          style={{ lineHeight: 1.1 }}
        >
          Choose Terrace Garden Plan
        </h1>
        <p className="text-left text-base md:text-lg text-gray-900 mb-12 md:mb-16 font-bitter">
          Our team of skilled landscape designers transforms outdoor spaces into
          stunning environments that blend beauty and functionality. With a
          commitment to excellence, we offer customized solutions to suit your
          unique landscape vision.
        </p>

        {/* Accordion Section */}
        <div className="accordion">
          {plans.map((plan, index) => (
            <div key={index} className="border-b-2 border-gray-800 mb-4">
              <h4
                className="flex justify-between items-center cursor-pointer py-4 md:py-5 text-xl md:text-2xl lg:text-3xl font-young-serif"
                onClick={() => toggleAccordion(index)}
              >
                <span>{plan.title}</span>
                <span
                  className={`${
                    openIndex === index ? '' : 'transform rotate-0'
                  } transition-all ease-in-out duration-300 text-lg md:text-xl lg:text-2xl`}
                >
                  {openIndex === index ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </span>
              </h4>
              <div
                style={{
                  maxHeight: openIndex === index ? '1000px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease',
                }}
                className="accordion-content"
              >
                <div className="pb-4 text-gray-700 font-bitter text-sm md:text-base lg:text-lg">
                  <p>{plan.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-left mt-16 md:mt-24">
          <a
            href="/services"
            className="inline-block bg-black text-white py-2 px-6 md:px-12 lg:px-24 md:py-4 lg:py-6 rounded-full text-base md:text-xl hover:bg-gray-800 transition duration-300 font-bitter"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Right section (Image) */}
      <div className="lg:w-1/2 lg:pl-16 lg:pt-0 pt-12">
        <img
          src={selectedImage}
          alt="Terrace Garden"
          className="object-cover w-full h-[350px] sm:h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        />
      </div>
    </div>
  );
};

export default TerraceGardenPlan;
