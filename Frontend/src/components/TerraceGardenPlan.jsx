import React, { useState } from 'react';
 
 const plans = [
   {
     title: 'Basic Landscape',
     description:
       'Our basic garden pricing starts at ₹500 to ₹800 per square foot. This package includes standard plants, planters, and soil, providing a comprehensive solution for your gardening needs. Depending on the specific selections and layout, we can tailor a garden that fits both your aesthetic preferences and budget effectively.',
     imageUrl: 'https://images.pexels.com/photos/28962898/pexels-photo-28962898/free-photo-of-modern-waterfront-villa-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
   const [expandedPlanImage, setExpandedPlanImage] = useState(null);
 
   const toggleAccordion = (index) => {
     if (openIndex === index) {
       setOpenIndex(null);
       setExpandedPlanImage(null); // Collapse the image
     } else {
       setOpenIndex(index);
       setExpandedPlanImage(plans[index].imageUrl); // Set the image of the expanded plan
     }
   };
 
   return (
     <div className="mx-auto p-6 lg:flex lg:space-x-8 lg:px-16 lg:py-12">
       {/* Left section (Text and Accordion) */}
       <div className="lg:w-1/2 lg:px-4">
         <h1
           className="text-[40px] md:text-[60px] lg:text-[70px] text-center mb-4 md:mb-6 mt-4 md:mt-8 font-young-serif"
           style={{ lineHeight: 1.1 }}
         >
           Choose Terrace Garden Construction Plan
         </h1>
         <p className="text-left text-base md:text-lg text-gray-900 mb-12 md:mb-16 font-bitter">
           Our team of skilled landscape designers transforms outdoor spaces into
           stunning environments that blend beauty and functionality. With a
           commitment to excellence, we offer customized solutions to suit your
           unique landscape vision.
         </p>
 
         {/* Border line before Basic Plan */}
         <div className="border-t-2 border-gray-800 mb-6"></div>
 
         {plans.map((plan, index) => (
           <div className="accordion w-full" key={index}>
             <div className="border-b-2 border-gray-800 mb-4">
               <h4
                 className="flex justify-between items-center cursor-pointer py-4 md:py-5 text-xl md:text-2xl lg:text-3xl font-young-serif"
                 onClick={() => toggleAccordion(index)}
               >
                 <span>{plan.title}</span>
                 <span
                   className={`transition-all ease-in-out duration-300 text-lg md:text-xl lg:text-2xl ${openIndex === index ? 'transform rotate-180' : 'rotate-0'}`}
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
                   height: openIndex === index ? 'auto' : '0',
                   overflow: 'hidden',
                   transition: 'height 0.5s ease-in-out',
                 }}
                 className="accordion-content md:flex block items-start w-[90vw]"
               >
                 {expandedPlanImage && (
                   <>
                     <div className="flex-1 p-4 font-bitter">
                       <p>{plan.description}</p>
                     </div>
                     <div className="mt-4 flex-1">
                       <img
                         src={expandedPlanImage}
                         alt="Expanded Plan"
                         className="object-cover w-full h-[350px] lg:h-[400px]"
                       />
                       {/* Add Learn more button below the image */}
                       <div className="text-left mt-4 mb-4">
                         <a
                           href="/services"
                           className="inline-block bg-black text-white py-2 px-6 md:px-12 lg:px-20 md:py-4 lg:py-4 rounded-full text-base md:text-lg hover:bg-gray-800 transition duration-300 font-bitter"
                         >
                           Learn more
                         </a>
                       </div>
                     </div>
                   </>
                 )}
               </div>
             </div>
           </div>
         ))}
       </div>
 
       {/* Right section (Static Image) */}
       <div className="lg:w-1/2 lg:pl-4 lg:pt-0 pt-12 flex-shrink-0">
         {!expandedPlanImage && ( // Only show static image if no plan is expanded
           <img
             src="https://images.pexels.com/photos/19836380/pexels-photo-19836380/free-photo-of-lichtspiel-mit-architektonischem-gebaude.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Static image URL
             alt="Terrace Garden"
             className="object-cover hidden lg:block w-full h-[300px] lg:h-[900px]"
           />
         )}
       </div>
     </div>
   );
 };
 
 export default TerraceGardenPlan;