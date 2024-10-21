import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Transform Your Outdoor Space with Expert Landscape Design",
    description:
      "Discover the art of exceptional landscape design, where every element is meticulously tailored to enhance both beauty and function. Our experts transform outdoor spaces into stunning sanctuaries that reflect your vision and lifestyle.",
    imageUrl:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Create Your Dream Garden Oasis",
    description:
      "Let us design a garden that not only beautifies your home but also brings you peace and relaxation. Our custom gardens are crafted to fit your lifestyle and preferences.",
    imageUrl:
      "https://images.pexels.com/photos/29014368/pexels-photo-29014368/free-photo-of-remote-house-in-icelandic-landscape-under-dark-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${slides[currentSlide].imageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-4 md:px-10">
        <h1
          className="text-[36px] sm:text-[45px] md:text-[48px] lg:text-[56px] xl:text-[68px] mb-6 font-young-serif max-w-5xl mx-auto"
          style={{ lineHeight: 1.2 }}
        >
          {slides[currentSlide].title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-bitter px-4 md:px-10">
          {slides[currentSlide].description}
        </p>
        <button className="text-black bg-white px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 md:py-6 text-lg md:text-xl font-bitter rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
