import React, { useState, useEffect } from 'react';
import Login from './Login'; // Ensure this is the correct path for your Login component

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    pincode: '',
    phone: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setShowPopup(false); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 seconds = 30000ms

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      {showPopup && !isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-bitter">
          <div className="bg-white mt-14 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] flex flex-col items-center rounded-lg shadow-lg px-6 py-10 sm:py-12 md:py-16 relative">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5757/5757029.png" 
              alt="signup image" 
              className="w-20 sm:w-24 md:w-16 mb-6" 
            />

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-black text-4xl sm:text-5xl px-4 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-center text-black text-2xl mb-4">Join Our Community of Innovators!</h2>
            <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-center space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-3"
                required
              />
              <input
                type="number"
                name="pincode"
                placeholder="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-4"
                required
              />
             
              <input
                type="number"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-4"
                required
              />
             
              <button
                type="submit"
                className="w-full sm:w-80 bg-black text-white py-3 sm:py-4 rounded-full hover:bg-transparent hover:text-black hover:border-black border transition-all ease-in-out duration-300 mt-4"
              >
                Submit
              </button>
            </form>
           
          </div>
        </div>
      )}
      
      {isLoginOpen && <Login closeLogin={closeLogin} />}
    </>
  );
};

export default PopupForm;
