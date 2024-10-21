import React, { useState } from 'react';
 import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
 
 const AppointmentScheduler = () => {
   const [selectedPlan, setSelectedPlan] = useState(null);
   const [selectedTimes, setSelectedTimes] = useState({});
   const [currentDayIndex, setCurrentDayIndex] = useState(0); // Track the first day in the 3-day window
   const [timeSelected, setTimeSelected] = useState(false);
   const [formSubmitted, setFormSubmitted] = useState(false);
   const [formData, setFormData] = useState({
     fullName: '',
     email: '',
     phone: '',
   });
 
   const serviceOptions = [
     { title: 'Free Consultation', time: '30 minutes', price: 'Free' },
     { title: 'Basic Service', time: '1 hour', price: '$99.00' },
     { title: 'Advanced Service', time: '1 hour', price: '$199.00' },
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
 
   // Shift day window forward by 3 days
   const getNextDays = () => setCurrentDayIndex((prevIndex) => prevIndex + 3);
 
   // Shift day window backward by 3 days, ensure it doesn't go below 0
   const getPrevDays = () => setCurrentDayIndex((prevIndex) => Math.max(prevIndex - 3, 0));
 
   // Get the current set of 3 days based on the index
   const getDates = () => {
     const today = new Date();
     today.setHours(0, 0, 0, 0); // Reset to the start of today
     const dates = [];
     for (let i = 0; i < 3; i++) {
       const date = new Date(today);
       date.setDate(today.getDate() + currentDayIndex + i); // Shift days based on the index
       dates.push(date);
     }
     return dates;
   };
 
   const getDayName = (date) => date.toLocaleDateString('en-US', { weekday: 'long' });
 
   const getDateString = (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
 
   const handleEdit = () => {
     setTimeSelected(false);
     setSelectedPlan(null);
     setFormSubmitted(false);
     setFormData({ fullName: '', email: '', phone: '' });
   };
 
   const handleFormSubmit = (e) => {
     e.preventDefault();
     setFormSubmitted(true);
   };
 
   return (
     <div
       className="min-h-screen p-5 sm:p-10 lg:p-20 bg-cover bg-center flex flex-col items-center justify-center"
       style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/6706b570121dfe1f37390221/1722375620.686804-HMGLIWUZVJUYXYSFRXXK/imgg-od3-odnbd9id.png)' }}
     >
       <div className="bg-white bg-opacity-70 p-10  shadow-2xl w-full max-w-4xl mt-10">
         <div className='flex gap-2'>
           <div className='rounded-[150%] w-10 h-10 bg-black text-white text-center font-bold p-2'>1</div>
           <h1 className="text-3xl font-bold mb-8">Choose Appointment</h1>
         </div>
 
         {/* Step 1: Choose a Plan */}
         <div className="flex flex-col space-y-4">
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
 
         {/* Accordion for Step 2: Choose a Time */}
         <div className={`transition-all duration-500 overflow-hidden ${selectedPlan ? 'max-h-screen' : 'max-h-0'}`}>
           {selectedPlan && !timeSelected && (
             <div className="mt-10">
               <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
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
 
               {/* Display Dates and Time Slots */}
               <div className="flex justify-between mt-8 space-x-4">
                 {getDates().map((dateObj, index) => {
                   const dateKey = dateObj.toLocaleDateString();
                   return (
                     <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg w-full">
                       <span className="font-semibold text-lg">{getDayName(dateObj)}</span>
                       <span className="text-sm mb-4">{getDateString(dateObj)}</span>
                       <div className="grid gap-2">
                         {['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '2:00 PM', '4:30 PM'].map((time, idx) => (
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
           )}
         </div>
 
         {/* Your Information Section */}
         <div className={`transition-all duration-500 overflow-hidden border rounded-lg p-4 mt-4 ${timeSelected ? 'max-h-screen' : 'max-h-15'}`}>
           <div className='flex gap-2'>
             <div className='rounded-[150%] w-10 h-10 bg-black text-white text-center font-bold p-2'>2</div>
             <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
           </div>
           {timeSelected && !formSubmitted && (
             <form onSubmit={handleFormSubmit} className="space-y-4">
               <input
                 type="text"
                 placeholder="Full Name"
                 className="w-full px-4 py-3 border border-gray-300 rounded-md"
                 value={formData.fullName}
                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                 required
               />
               <input
                 type="email"
                 placeholder="Email Address"
                 className="w-full px-4 py-3 border border-gray-300 rounded-md"
                 value={formData.email}
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 required
               />
               <input
                 type="tel"
                 placeholder="Phone Number"
                 className="w-full px-4 py-3 border border-gray-300 rounded-md"
                 value={formData.phone}
                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                 required
               />
               <button type="submit" className="bg-black text-white px-6 py-3 rounded-md w-full mt-4">
                 Submit Appointment
               </button>
             </form>
           )}
         </div>
 
         {/* Confirmation Section */}
         <div className={`transition-all duration-500 overflow-hidden border rounded-lg p-4 mt-4 ${formSubmitted ? 'max-h-screen' : 'max-h-15'}`  }>
               <div className='flex gap-2'>
                 <div className='rounded-[150%] w-10 h-10 bg-black text-white text-center font-bold p-2'>3</div>
                 <h2 className="text-2xl font-semibold mb-6">Confirmation</h2>
               </div>
           {formSubmitted && (
             <div>
               <p className="mb-4"><strong>Plan:</strong> {selectedPlan}</p>
               <p className="mb-4">
                 <strong>Time:</strong> {Object.entries(selectedTimes).map(([date, time]) => (
                   <span key={date}>{$`{getDateString(new Date(date))} at ${time}`}</span>
                 ))}
               </p>
               <p className="mb-4"><strong>Name:</strong> {formData.fullName}</p>
               <p className="mb-4"><strong>Email:</strong> {formData.email}</p>
               <p className="mb-4"><strong>Phone:</strong> {formData.phone}</p>
               <button onClick={handleEdit} className="bg-black text-white px-6 py-3 rounded-md mt-4">
                 Edit Appointment
               </button>
               <button className="bg-white text-black border border-black px-6 py-3 rounded-md mt-4 ml-4">
                 Submit
               </button>
             </div>
           )}
         </div>
       </div>
     </div>
   );
 };
 
 const ServiceOption = ({ title, time, price, onSelect, isSelected }) => {
   return (
     <div
       className={`p-6 rounded-lg  cursor-pointer bg-white bg-opacity-80 text-gray-800 flex justify-between`}
     >
       <div>
       <h3 className="text-lg font-semibold">{title}</h3>
       <p>{time}</p>
       <p className="font-bold">{price}</p>
       </div>
       <button
         className="bg-black text-white px-2 py-2 rounded-md mt-4 h-10 w-24"
         onClick={onSelect}
       >
         Book Now
       </button>
     </div>
   );
 };
 
 
 const TimeSlot = ({ time, isSelected, onSelect }) => {
   return (
     <div
       className={`px-4 py-2 border rounded-md cursor-pointer ${isSelected ? 'bg-black text-white' : 'bg-white text-gray-800'}`}
       onClick={onSelect}
     >
       {time}
     </div>
   );
 };
 
 export default AppointmentScheduler;