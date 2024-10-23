import React, { useState } from 'react';
 
 const MaintenancePlan = () => {
   const [selectedPlan, setSelectedPlan] = useState('');
   const [showModal, setShowModal] = useState(false);
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
   });
 
   const handlePlanClick = (plan) => {
     setSelectedPlan(plan);
     setShowModal(true);
   };
 
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({ ...prevData, [name]: value }));
   };
 
   const handleFormSubmit = (e) => {
     e.preventDefault();
     const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Plan: ${selectedPlan}`;
     const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(message)}`;
     window.open(whatsappUrl, '_blank');
     setShowModal(false);
   };
 
   const handleCancel = () => {
     setShowModal(false); // Close the modal
   };
 
   return (
     <div className="bg-[#f4f4f4] py-20 px-4 lg:px-16 flex flex-col items-center justify-center">
       <h1 className="text-[36px] lg:text-[56px] mb-12 font-young-serif text-center">
         Choose Your Garden Maintenance Plan
       </h1>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
         {/* Plan 1: Basic Garden Maintenance Service */}
         <div className="h-auto lg:h-[650px] flex flex-col items-center justify-between p-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
           <h2 className="text-3xl font-young-serif mb-4 text-gray-800">Basic Garden Maintenance Service</h2>
           <p className="text-lg mb-8 text-gray-600 text-center">
             Up to 500 Sq.ft. garden care.
           </p>
           <ul className="space-y-2 text-gray-600 text-center mb-8">
             <li>✓ Lawn mowing</li>
             <li>✓ Basic weeding</li>
             <li>✓ Hedge trimming (once a month)</li>
             <li>✓ Leaf-blowing and debris removal</li>
           </ul>
           <div className="w-full border-t-2 border-gray-200 pt-6">
             <h3 className="text-xl font-young-serif mb-4 text-gray-800">Plans Available:</h3>
             <div className="flex flex-col items-center space-y-4">
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Basic Garden Maintenance - 3 Months')}
               >
                 3 Months - ₹999
               </span>
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Basic Garden Maintenance - 6 Months')}
               >
                 6 Months - ₹1799
               </span>
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Basic Garden Maintenance - 12 Months')}
               >
                 12 Months - ₹2999
               </span>
             </div>
           </div>
         </div>
 
         {/* Plan 2: Standard Garden Maintenance Service */}
         <div className="h-auto lg:h-[650px] flex flex-col items-center justify-between p-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
           <h2 className="text-3xl font-young-serif mb-4 text-gray-800">Standard Garden Maintenance Service</h2>
           <p className="text-lg mb-8 text-gray-600 text-center">
             Up to 1000 Sq.ft. garden care.
           </p>
           <ul className="space-y-2 text-gray-600 text-center mb-8">
             <li>✓ Everything in Basic Service</li>
             <li>✓ Fertilizing lawns and plants</li>
             <li>✓ Seasonal planting and flower bed refresh</li>
             <li>✓ Pruning of trees and shrubs</li>
           </ul>
           <div className="w-full border-t-2 border-gray-200 pt-6">
             <h3 className="text-xl font-young-serif mb-4 text-gray-800">Plans Available:</h3>
             <div className="flex flex-col items-center space-y-4">
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Standard Garden Maintenance - 3 Months')}
               >
                 3 Months - ₹1499
               </span>
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Standard Garden Maintenance - 6 Months')}
               >
                 6 Months - ₹2499
               </span>
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Standard Garden Maintenance - 12 Months')}
               >
                 12 Months - ₹3999
               </span>
             </div>
           </div>
         </div>
 
         {/* Plan 3: Premium Garden Maintenance Service */}
         <div className="h-auto lg:h-[650px] relative flex flex-col items-center justify-between p-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
           <div className="absolute -top-16 lg:-top-16 -right-1 bg-black text-white px-6 py-10 rounded-full font-bitter text-lg">
             Popular
           </div>
           <h2 className="text-3xl font-young-serif mb-4 text-gray-800">Premium Garden Maintenance Service</h2>
           <p className="text-lg mb-8 text-gray-600 text-center">
             Up to 1500 Sq.ft. comprehensive garden care.
           </p>
           <ul className="space-y-2 text-gray-600 text-center mb-8">
             <li>✓ Everything in Standard Service</li>
             <li>✓ Expert plant care and specialized pruning</li>
             <li>✓ Regular pest and disease monitoring</li>
             <li>✓ Custom seasonal flower displays</li>
           </ul>
           <div className="w-full border-t-2 border-gray-200 pt-6">
             <h3 className="text-xl font-young-serif mb-4 text-gray-800">Plans Available:</h3>
             <div className="flex flex-col items-center space-y-4">
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Premium Garden Maintenance - 3 Months')}
               >
                 3 Months - ₹1999
               </span>
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Premium Garden Maintenance - 6 Months')}
               >
                 6 Months - ₹3499
               </span>
               <span
                 className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                 onClick={() => handlePlanClick('Premium Garden Maintenance - 12 Months')}
               >
                 12 Months - ₹4999
               </span>
             </div>
           </div>
         </div>
       </div>
 
       {showModal && (
         <div className="fixed inset-0 bg-black bg-opacity-50 mt-20 flex items-center z-30 px-2 justify-center">
           <div className="bg-white bg-opacity-90 p-8 rounded-lg font-bitter w-96">
             <h2 className="text-2xl mb-4 font-young-serif">Fill Your Details</h2>
             <form onSubmit={handleFormSubmit}>
               <div className="mb-4">
                 <label className="block text-gray-700 mb-2">Name</label>
                 <input
                   type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleInputChange}
                   required
                   className="w-full border border-gray-300 p-2 rounded"
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 mb-2">Email</label>
                 <input
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   required
                   className="w-full border border-gray-300 p-2 rounded"
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 mb-2">Phone</label>
                 <input
                   type="text"
                   name="phone"
                   value={formData.phone}
                   onChange={handleInputChange}
                   required
                   className="w-full border border-gray-300 p-2 rounded"
                 />
               </div>
               <div className='flex items-center gap-2'>
               <button
                 type="submit"
                 className="bg-green-500 text-white px-4 h-10 w-1/2 py-2 rounded hover:bg-green-600 transition-all"
               >
                 Submit
               </button>
               <button
                 type="button"
                 onClick={handleCancel}
                 className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
               >
                 Cancel
               </button>
               </div>
             
             </form>
           </div>
         </div>
       )}
     </div>
   );
 };
 
 export default MaintenancePlan;