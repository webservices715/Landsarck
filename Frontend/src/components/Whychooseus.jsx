import React from 'react';
import Slider from 'react-slick';

const WhyChooseUs = () => {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const features = [
    { icon: 'https://cdn-icons-png.freepik.com/256/640/640972.png?uid=R122666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid', title: 'Flat 10 Year Warranty' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/15512/15512495.png', title: 'Easy EMIs' },
    { icon: 'https://cdn-icons-png.freepik.com/256/1767/1767425.png?uid=R122666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid', title: '600+ In-House Designers' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/15654/15654467.png', title: '35,000+ Homes Delivered' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/942/942153.png', title: '44 Studios' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/2942/2942076.png', title: '22 Cities' },
    { icon: 'https://cdn-icons-png.freepik.com/256/11441/11441951.png?uid=R122666407&ga=GA1.1.1819474253.1716626039&semt=ais_hybrid', title: 'No Hidden Costs' },
  ];

  return (
    <section className="bg-gray-50 py-12 px-2 lg:px-16 overflow-x-hidden">
      <div className="text-center mb-6">
        <h2 className="text-4xl lg:text-5xl text-gray-900 font-young-serif py-5">Why Choose Us</h2>
      </div>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div className="p-2 text-center">
              <img src={feature.icon} alt={feature.title} className="h-24 mx-auto mb-6" />
              <h3 className="text-xl font-bitter">{feature.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default WhyChooseUs;
