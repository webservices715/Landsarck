import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Designing serene rooftop escapes, tailored to your unique vision",
    description:
      "We specialize in designing serene rooftop escapes, perfectly tailored to your unique vision, Our expert team transforms terraces into personalized, tranquil retreats that inspire relaxation and beauty.",
    imageUrl:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Transform Your Outdoor Space with Expert",
    description:
      " Transform your outdoor space into a stunning retreat with expert landscape design, blending functionality and beauty to create the perfect environment for relaxation and enjoyment. ",
    imageUrl:
      "https://images.pexels.com/photos/29014368/pexels-photo-29014368/free-photo-of-remote-house-in-icelandic-landscape-under-dark-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Book Your Landsarck Space",
    description:
      "Book your Landsarck space and experience the perfect blend of functionality and beauty in a serene outdoor retreat. ",
    imageUrl:
      "https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setShowText(true);
      }, 500); 
    }, 5500); 

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true); 
    }, 1000); 
  }, [currentSlide]);

  return (
    <div className="relative h-screen bg-cover bg-center py-12">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "fadeIn 1.5s ease-in-out forwards",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-4 md:px-10">
        {showText && ( 
          <>
            <h1
              className="text-[36px] sm:text-[45px] md:text-[48px] lg:text-[56px] xl:text-[68px] mb-6 font-young-serif max-w-5xl mx-auto fadeInAnimation"
              style={{ lineHeight: 1.2, animation: "slideIn 1.5s ease-in-out forwards" }}
            >
              {slides[currentSlide].title}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-bitter px-4 md:px-10 fadeInAnimation"
              style={{ animation: "slideIn 1.5s ease-in-out forwards" }}
            >
              {slides[currentSlide].description}
            </p>
            <a
            href={`https://wa.me/${9680027791}`}
            target="_blank"
              className="text-black bg-white px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 md:py-6 text-lg md:text-xl font-bitter rounded-full fadeInAnimation"
              style={{ animation: "slideIn 1.5s ease-in-out forwards" }}
            >
              Book Your Landscape Space
            </a>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fadeInAnimation {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
