import React from 'react';

const MaintenancePlan = () => {
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
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">3 Months - $99</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">6 Months - $179</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">12 Months - $299</span>
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
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">3 Months - $149</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">6 Months - $249</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">12 Months - $399</span>
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
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">3 Months - $199</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">6 Months - $349</span>
              <span className="block py-3 px-6 bg-gray-100 rounded text-lg text-gray-700">12 Months - $499</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MaintenancePlan;
