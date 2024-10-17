import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-4 md:px-10">
        <h1
          className="text-[45px] md:text-[48px] lg:text-[64px] xl:text-[68px] mb-6 font-young-serif max-w-5xl mx-auto"
          style={{ lineHeight: 1.2 }}
        >
          Transform Your Outdoor Space with Expert Landscape Design
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 font-bitter px-4 md:px-10">
          Discover the art of exceptional landscape design, where every element
          is meticulously tailored to enhance both beauty and function. Our
          experts transform outdoor spaces into stunning sanctuaries that
          reflect your vision and lifestyle.
        </p>
        <button className="text-black bg-white px-12 md:px-16 lg:px-20 py-4 md:py-6 text-lg md:text-xl font-bitter rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
