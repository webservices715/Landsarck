import React, { useState } from "react";
import Login from "./Login";

const SignUp = ({ closeSignup }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    termsAccepted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const {firstName, lastName, gender, email } = formData;

    const whatsappMessage = `Hello! My name is ${firstName} ${lastName}. \n Email: ${email} \n Gender: ${gender}`;

    const whatsappNum = 7737002188;

    const whatsappURL = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    closeSignup();

  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
      {!isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-bitter">
          <div className="bg-white mt-14 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] flex flex-col items-center rounded-lg shadow-lg px-6 py-10 sm:py-12 md:py-16 relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5757/5757029.png"
              alt="signup image"
              className="w-20 sm:w-24 md:w-16 mb-6"
            />

            <button
              onClick={closeSignup}
              className="absolute top-2 right-2 text-black text-4xl sm:text-5xl px-4 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-center text-black text-2xl sm:text-3xl mb-4">
              Become a Member
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center space-y-4"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-0"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-3"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-3 border-black text-black outline-none rounded-full bg-transparent mb-4"
                required
              />

              <div className="flex justify-around text-black items-start w-full sm:w-80">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
              <div className="flex items-center w-full sm:w-80">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="text-sm text-black">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500">
                    Terms and Conditions
                  </a>
                </span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-80 bg-black text-white py-3 sm:py-4 rounded-full hover:bg-transparent hover:text-black hover:border-black border transition-all ease-in-out duration-300 mt-4"
              >
                Join Us
              </button>
            </form>
            {/* <div className="text-center mt-4">
              <p className="text-sm text-black">
                Already a member?{" "}
                <button onClick={openLogin} className="text-blue-500">
                  Sign in
                </button>
              </p>
            </div> */}
          </div>
        </div>
      )}

      {isLoginOpen && <Login closeLogin={closeLogin} />}
    </>
  );
};

export default SignUp;
