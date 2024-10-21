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

    // Prepare the WhatsApp message
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Plan: ${selectedPlan}`;
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');

    // Optionally close the modal
    setShowModal(false);
  };

  return (
    <div className="bg-[#f4f4f4] py-20 px-4 lg:px-16 flex flex-col items-center justify-center">
      <h1 className="text-[36px] lg:text-[56px] mb-12 font-young-serif text-center">
        Choose Your Maintenance Plan
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {/* Plan 1: Basic Plan */}
        <div className="h-auto lg:h-[650px] flex flex-col items-center justify-between p-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
          <h2 className="text-3xl font-young-serif mb-4 text-gray-800">Basic Plan</h2>
          <p className="text-lg mb-8 text-gray-600 text-center">
            Ideal for smaller gardens or terraces.
          </p>
          <ul className="space-y-2 text-gray-600 text-center mb-8">
            <li>✓ General maintenance</li>
            <li>✓ Lawn care</li>
            <li>✓ Pruning services</li>
          </ul>
          <div className="w-full border-t-2 border-gray-200 pt-6">
            <h3 className="text-xl font-young-serif mb-4 text-gray-800">Plans Available:</h3>
            <div className="flex flex-col items-center space-y-4">
              <span
                className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
                "
                
                onClick={() => handlePlanClick('Basic Plan - 3 Months')}
              >
                3 Months - ₹99
              </span>
              <span
                className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
                "
                
                onClick={() => handlePlanClick('Basic Plan - 6 Months')}
              >
                6 Months - ₹179
              </span>
              <span
                className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
                "
                
                onClick={() => handlePlanClick('Basic Plan - 12 Months')}
              >
                12 Months - ₹299
              </span>
            </div>
          </div>
        </div>

          {/* Plan 2: Standard Plan */}
          <div className="h-auto lg:h-[650px] flex flex-col items-center justify-between p-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
          <h2 className="text-3xl font-young-serif mb-4 text-gray-800">Standard Plan</h2>
          <p className="text-lg mb-8 text-gray-600 text-center">
            Best suited for medium-sized gardens.
          </p>
          <ul className="space-y-2 text-gray-600 text-center mb-8">
            <li>✓ All services from Basic Plan</li>
            <li>✓ Soil testing & improvement</li>
            <li>✓ Regular plant health checks</li>
          </ul>
          <div className="w-full border-t-2 border-gray-200 pt-6">
            <h3 className="text-xl font-young-serif mb-4 text-gray-800">Plans Available:</h3>
            <div className="flex flex-col items-center space-y-4">
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
              "
              onClick={() => handlePlanClick('Standard Plan - Basic Plan - 3 Months')}
              
              >3 Months - ₹149</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
              "
              onClick={() => handlePlanClick('Standard Plan - Basic Plan - 3 Months')}
              
              >6 Months - ₹249</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
              "
              onClick={() => handlePlanClick('Standard Plan - Basic Plan - 3 Months')}
              
              >12 Months - ₹399</span>
            </div>
          </div>
        </div>

        {/* Plan 3: Premium Plan */}
        <div className="h-auto lg:h-[650px] relative flex flex-col items-center justify-between p-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
        <div className="absolute -top-16 lg:-top-16 -right-1 bg-black text-white px-6 py-10 rounded-full font-bitter text-lg">
            Popular
          </div>
          <h2 className="text-3xl font-young-serif mb-4 text-gray-800">Premium Plan</h2>
          <p className="text-lg mb-8 text-gray-600 text-center">
            Comprehensive care for large gardens.
          </p>
          <ul className="space-y-2 text-gray-600 text-center mb-8">
            <li>✓ All services from Standard Plan</li>
            <li>✓ Custom garden design</li>
            <li>✓ 24/7 support & visits</li>
          </ul>
          <div className="w-full border-t-2 border-gray-200 pt-6">
            <h3 className="text-xl font-young-serif mb-4 text-gray-800">Plans Available:</h3>
            <div className="flex flex-col items-center space-y-4">
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
              "
              onClick={() => handlePlanClick('Premium Plan - Basic Plan - 3 Months')}
             
             >3 Months - ₹199</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
              "
              onClick={() => handlePlanClick('Premium Plan - Basic Plan - 3 Months')}
              
              >6 Months - ₹349</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300
              "
              onClick={() => handlePlanClick('Premium Plan - Basic Plan - 3 Months')}
              
              >12 Months - ₹499</span>
            </div>
          </div>
        </div>

      </div>

      {/* Modal for the form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50  mt-20 flex items-center z-30 justify-center">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg font-bitter w-96">
            <h2 className="text-2xl  mb-4 font-young-serif">Fill Your Details</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-bitter">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg font-bitter"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-bitter">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg font-bitter"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-bitter">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg font-bitter"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-bitter">Selected Plan</label>
                <input
                  type="text"
                  value={selectedPlan}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 font-bitter"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  className="bg-black border text-white px-4 py-2 rounded-lg font-bitter hover:bg-transparent transition-all ease-in-out duration-300 hover:text-black hover:border-black"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-bitter hover:bg-red-600"
                  onClick={() => setShowModal(false)}
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
