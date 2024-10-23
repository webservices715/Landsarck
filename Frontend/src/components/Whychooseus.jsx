import React from 'react';
 import Slider from 'react-slick';
 import { FaShieldAlt, FaCreditCard, FaUsers, FaTruck, FaCity, FaMoneyBillWave, FaTools, FaTintSlash, FaAppleAlt } from 'react-icons/fa';
 import { MdOutlineNaturePeople, MdConstruction } from 'react-icons/md';
 import { GiFruitTree } from 'react-icons/gi';
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
     { 
       icon: <FaShieldAlt size={24} />, 
       title: 'Flat 5 Year Warranty' // Shield icon to represent warranty/protection
     },
     { 
       icon: <FaCreditCard size={30} />, 
       title: 'Easy EMIs' // Credit card icon to represent EMI or financial installment
     },
     { 
       icon: <FaUsers size={30} />, 
       title: '50+ In-House Designers' // A users icon to represent a team of designers
     },
     { 
       icon: <FaTruck size={30} />, 
       title: '200+ Gardens Delivered' // Truck icon to represent delivery
     },
     { 
       icon: <FaCity size={30} />, 
       title: '20 Studios' // Cityscape icon representing multiple studios
     },
     { 
       icon: <FaMoneyBillWave size={30} />, 
       title: 'No Hidden Costs' // Dollar bill icon to represent transparency in pricing
     },
     { 
       icon: <FaTools size={30} />, 
       title: 'Free Maintenance' // Tools icon to represent maintenance services
     },
     { 
       icon: <FaTintSlash size={30} />, 
       title: 'Seepage-Free Terrace' // Droplet with a slash to represent water protection
     },
     { 
       icon: <GiFruitTree size={30} />, 
       title: 'Guaranteed Fruit Harvesting' // Fruit tree icon to represent guaranteed harvest
     }
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
               <div className="h-24 mx-auto mb-6 border h-24 w-24 rounded-full flex items-center justify-center" >{feature.icon} </div>
               <h3 className="text-xl font-bitter">{feature.title}</h3>
             </div>
           </div>
         ))}
       </Slider>
     </section>
   );
 };
 
 export default WhyChooseUs;