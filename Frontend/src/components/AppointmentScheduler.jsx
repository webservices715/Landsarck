import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 

const AppointmentScheduler = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState({});
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [timeSelected, setTimeSelected] = useState(false); 

  const serviceOptions = [
    { title: "Free Consultation", time: "30 minutes", price: "Free" },
    { title: "Basic Service", time: "1 hour", price: "$99.00" },
    { title: "Advanced Service", time: "1 hour", price: "$199.00" },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setSelectedTimes({});
    setTimeSelected(false);
  };

  const handleTimeSelect = (time, date) => {
    setSelectedTimes((prevTimes) => ({
      ...prevTimes,
      [date]: time,
    }));
    setTimeSelected(true);
  };

  const getNextDays = () => {
    setCurrentDayIndex((prevIndex) => prevIndex + 3);
  };

  const getPrevDays = () => {
    setCurrentDayIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const getDates = () => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + currentDayIndex + i);
      dates.push(date);
    }

    return dates;
  };

  const getDayName = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const getDateString = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div
      className="min-h-screen p-4 md:p-10 lg:p-20 bg-cover bg-center flex flex-col items-center justify-between opacity-90"
      style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1722375620.686804-HMGLIWUZVJUYXYSFRXXK/imgg-od3-odnbd9id.png)' }}
    >
      <div className="bg-white bg-opacity-80 p-4 md:p-6 lg:p-8 rounded-md w-full md:w-3/4 lg:w-1/2 mt-10 shadow-lg">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 font">Choose Appointment</h1>

        {/* Step 1: Choose a Plan */}
        <div className="space-y-4 md:space-y-6">
          {serviceOptions.map((option, index) => (
            (selectedPlan === null || selectedPlan === option.title) && (
              <ServiceOption
                key={index}
                title={option.title}
                time={option.time}
                price={option.price}
                onSelect={() => handlePlanSelect(option.title)}
                isSelected={selectedPlan === option.title}
              />
            )
          ))}
        </div>

        {/* Step 2: Choose a Time */}
        {selectedPlan && !timeSelected && (
          <div className="mt-6 md:mt-10">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Select a Time</h2>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={getPrevDays}
                className={`flex items-center px-2 py-1 md:px-4 md:py-2 rounded-md ${currentDayIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'}`}
                disabled={currentDayIndex === 0}
              >
                <FiChevronLeft className="mr-2" />
                Previous
              </button>
              <button
                onClick={getNextDays}
                className="flex items-center px-2 py-1 md:px-4 md:py-2 rounded-md text-gray-900"
              >
                Next
                <FiChevronRight className="ml-2" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
              <div className="flex flex-col md:flex-row justify-between w-full">
                {getDates().map((dateObj, index) => {
                  const dateKey = dateObj.toLocaleDateString();
                  return (
                    <div key={index} className="flex flex-col items-center p-2 md:p-4 rounded-lg shadow-md mx-2 w-full md:w-1/3 mb-4 md:mb-0">
                      <span className="font-semibold text-sm md:text-lg">{getDayName(dateObj)}</span>
                      <span className="text-xs md:text-sm mb-2 md:mb-4">{getDateString(dateObj)}</span>
                      <div className="grid gap-2">
                        {["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "2:00 PM", "4:30 PM"].map((time, idx) => (
                          <TimeSlot
                            key={idx}
                            time={time}
                            isSelected={selectedTimes[dateKey] === time}
                            onSelect={() => handleTimeSelect(time, dateKey)}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Personal Information Form */}
        {selectedPlan && timeSelected && (
          <div className="mt-6 md:mt-10">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Your Information</h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button className="bg-black text-white px-6 py-3 mt-4 rounded w-full">Confirm Appointment</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// ServiceOption as a child component
const ServiceOption = ({ title, time, price, onSelect, isSelected }) => {
  return (
    <div className={`flex justify-between items-center p-4 md:p-6 border border-gray-300 ${isSelected ? 'bg-gray-200' : ''}`}>
      <div>
        <h3 className="font-semibold text-md md:text-lg">{title}</h3>
        <p className="text-xs md:text-sm text-gray-600">{time}</p>
      </div>
      <div className="text-right">
        <p className="text-sm md:text-md">{price}</p>
        <button onClick={onSelect} className="bg-black text-white px-2 py-1 md:px-4 md:py-2 mt-2 rounded-md">Select</button>
      </div>
    </div>
  );
};

// TimeSlot as a child component
const TimeSlot = ({ time, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-2 md:p-4 border rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
      {time}
    </button>
  );
};

export default AppointmentScheduler;
