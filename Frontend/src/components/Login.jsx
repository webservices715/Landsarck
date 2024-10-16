import React from 'react';

const Login = ({ closeLogin }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-bitter">
      <div className="bg-white w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] flex flex-col items-center rounded-lg shadow-lg px-6 py-10 sm:py-12 md:py-16 relative">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/5757/5757029.png" 
          alt="login image" 
          className='w-20 sm:w-24 md:w-28 mb-6' 
        />

        <button
          onClick={closeLogin}
          className="absolute top-2 right-2 text-black text-4xl sm:text-5xl px-4 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-center text-black text-2xl sm:text-3xl mb-4">Welcome Back</h2>
        <input
          type="email"
          placeholder="you@yourmail.com"
          className="w-full sm:w-80 border-2 px-4 sm:px-6 py-4 sm:py-5 border-black text-black outline-none rounded-full bg-transparent mb-4"
        />

        <div className='flex flex-col items-center w-full'>
          <button className="bg-black border hover:bg-transparent hover:text-black hover:border-black transition-all ease-in-out duration-300 text-white px-10 sm:px-12 text-base sm:text-lg py-3 rounded-full mb-3 sm:mb-4">
            Next
          </button>
          <a href="#" className="text-black">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
