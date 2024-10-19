import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#dcdcdc] lg:px-6 lg:py-6">
      {/* Large centered heading */}
      <h1 className="text-[4rem] md:text-[8rem] lg:text-[15rem] text-black mb-8 lg:text-center  font-young-serif">Contact Us</h1>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-16 w-full px-4 sm:px-8 lg:px-16">
        {/* Paragraph on the left */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-[20px] sm:text-[22px] lg:text-[25px] text-black max-w-xl leading-relaxed mx-auto font-bitter lg:mx-0 text-left">
            If you’re interested in collaborating, please provide your information, and we will contact you soon. We look forward to connecting with you.
          </p>
        </div>

        {/* Form on the right */}
        <form className="sm:p-8 rounded-lg lg:w-1/2 font-bitter">
          <label className="block text-gray-900 mb-1 text-lg">Name <span className='text-gray-500 ml-1'>(required)</span></label>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-900 mb-1 text-lg">First Name</label>
              <input
                type="text"
                className="w-full px-4 p-3 border border-gray-900 rounded-full focus:outline-none focus:ring-2 bg-transparent outline-none"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-900 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full px-4 p-3 border border-gray-900 rounded-full focus:outline-none focus:ring-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-900 rounded-full focus:outline-none focus:ring-2 bg-transparent outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-1">Email <span className='text-gray-500 ml-1'>(required)</span></label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-900 rounded-full focus:outline-none focus:ring-2 bg-transparent outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 sm:px-10 sm:py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
