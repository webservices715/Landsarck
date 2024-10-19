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

  const getNextDays = () => setCurrentDayIndex((prevIndex) => prevIndex + 1);

  const getPrevDays = () => setCurrentDayIndex((prevIndex) => Math.max(prevIndex - 1, 0));

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

  const getDayName = (date) => date.toLocaleDateString('en-US', { weekday: 'long' });

  const getDateString = (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const handleEdit = () => {
    setTimeSelected(false);
    setSelectedPlan(null);
  };

  return (
    <div
      className="min-h-screen p-5 sm:p-10 lg:p-20 bg-cover bg-center flex flex-col items-center justify-between"
      style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1722375620.686804-HMGLIWUZVJUYXYSFRXXK/imgg-od3-odnbd9id.png)' }}
    >
      <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-md w-full max-w-3xl mt-10 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Choose Appointment</h1>

        {/* Step 1: Choose a Plan */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>

        {/* Step 2: Choose a Time */}
        {selectedPlan && !timeSelected && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-center">Select a Time</h2>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={getPrevDays}
                className={`flex items-center px-4 py-2 rounded-md ${currentDayIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900 '}`}
                disabled={currentDayIndex === 0}
              >
                <FiChevronLeft className="mr-2" />
                Previous
              </button>
              <button
                onClick={getNextDays}
                className="flex items-center px-4 py-2 rounded-md text-gray-900"
              >
                Next
                <FiChevronRight className="ml-2" />
              </button>
            </div>

            {/* Mobile View: Show only one day */}
            <div className="flex flex-col lg:hidden justify-between items-center mt-4">
              <div className="flex flex-col justify-between w-full px-2 sm:px-8 space-y-4">
                {getDates().slice(0, 1).map((dateObj, index) => {
                  const dateKey = dateObj.toLocaleDateString();
                  return (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md mx-2 w-full">
                      <span className="font-semibold text-lg">{getDayName(dateObj)}</span>
                      <span className="text-sm mb-4">{getDateString(dateObj)}</span>
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

            {/* Larger screens: Show all 3 days */}
            <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center mt-4">
              <div className="flex flex-col lg:flex-row justify-between w-full px-2 sm:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                {getDates().map((dateObj, index) => {
                  const dateKey = dateObj.toLocaleDateString();
                  return (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md mx-2 w-full lg:w-1/3">
                      <span className="font-semibold text-lg">{getDayName(dateObj)}</span>
                      <span className="text-sm mb-4">{getDateString(dateObj)}</span>
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

        {/* Display selected plan and time information */}
        {selectedPlan && timeSelected && (
          <div className="mt-10 text-center">
            <h2 className="text-xl font-semibold">Selected Appointment</h2>
            <p><strong>Plan:</strong> {selectedPlan}</p>
            <p><strong>Time:</strong> {Object.entries(selectedTimes).map(([date, time]) => (
              <span key={date}>{`${getDateString(new Date(date))} at ${time}`}</span>
            ))}</p>
            <button onClick={handleEdit} className="text-blue-500 underline mt-4">
              Edit Plan or Time
            </button>
          </div>
        )}

        {/* Step 3: Personal Information Form */}
        {selectedPlan && timeSelected && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-center">Your Information</h2>
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
              <button className="bg-black text-white px-6 py-2 rounded-md w-full">
                Submit Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceOption = ({ title, time, price, isSelected, onSelect }) => {
  return (
    <div
      className={`flex flex-col justify-between items-center p-4 border border-gray-300 rounded-md ${isSelected ? 'bg-gray-200' : ''} w-full`}
    >
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-md font-semibold">{price}</p>
        <button
          onClick={onSelect}
          className="bg-black text-white px-6 py-2 mt-4 rounded-md"
        >
          Select
        </button>
      </div>
    </div>
  );
};

const TimeSlot = ({ time, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-2 rounded-md w-full text-left ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
    >
      {time}
    </button>
  );
};

export default AppointmentScheduler;
