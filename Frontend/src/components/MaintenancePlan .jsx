import React from 'react';

const MaintenancePlan = () => {
  return (
    <div className="bg-[#dcdcdc] py-20 px-4 lg:px-16 flex flex-col items-center justify-center">
      <h1 className="text-[36px] lg:text-[66px] mb-10 font-young-serif text-center">Choose your maintenance plan</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">

        <div className="h-[450px] lg:h-[620px] border-2 mt-10 lg:mt-0 border-black flex items-center justify-center">
          {/* Content for Plan 1 */}
          <p className="text-lg">Basic Plan</p>
        </div>

        <div className="h-[450px] lg:h-[620px] border-2 mt-10 lg:mt-0 border-black flex items-center justify-center">
          {/* Content for Plan 2 */}
          <p className="text-lg">Standard Plan</p>
        </div>

        <div className="h-[450px] lg:h-[620px] border-2 border-black relative mt-10 lg:mt-0 flex items-center justify-center">
          <div className="absolute -top-10 lg:-top-16 -right-1 bg-black text-white px-8 py-12 rounded-full font-bitter text-lg">
            Popular
          </div>
          {/* Content for Plan 3 */}
          <p className="text-lg">Premium Plan</p>
        </div>

      </div>
    </div>
  );
};

export default MaintenancePlan;
