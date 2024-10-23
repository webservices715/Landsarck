import React from 'react';
import { FaClipboardList, FaPhone, FaShareAlt, FaUser } from 'react-icons/fa';
import { FaBuilding, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown } from 'react-icons/ai';

const HowWeWorks = () => {
  const stepsRow1 = [
    { text: "Fill Form", icon: <FaClipboardList /> },
    { text: "Get a Call", icon: <FaPhone /> },
    { text: "Share Your Floor Plan", icon: <FaShareAlt /> },
    { text: "Speak to Your Designer", icon: <FaUser />, downIcon: <AiOutlineArrowDown /> },
  ];

  const stepsRow2 = [
    { text: 'Design Proposal', icon: <FaClipboardList /> },
    { text: "Visit an Experience Center", icon: <FaBuilding /> },
    { text: "Revised Quote", icon: <FaFileAlt /> },
    { text: "Book with Us", icon: <FaCheckCircle /> },
  ];

  // Mobile specific steps order (after Speak to Designer, Design Proposal)
  const mobileSteps = [
    ...stepsRow1,
    { text: 'Design Proposal', icon: <FaClipboardList /> }, // Design Proposal right after 'Speak to Your Designer'
    { text: "Visit an Experience Center", icon: <FaBuilding /> },
    { text: "Revised Quote", icon: <FaFileAlt /> },
    { text: "Book with Us", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 px-4 py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium text-gray-900 font-young-serif">How We Work</h2>
        <p className="mt-2 text-lg text-gray-600 font-bitter">Now our services are available across all India.</p>
      </div>

      {/* For medium and large screens (md and above) */}
      <div className="hidden md:flex flex-col md:flex-row items-center w-full max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between w-full">
          {stepsRow1.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-1 text-center p-2">
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="font-semibold">{step.text}</div>
                {step.downIcon && (
                  <div className="text-3xl mt-5 mb-5">{step.downIcon}</div>
                )}
              </div>
              {/* Render right arrow in desktop view */}
              {index < stepsRow1.length - 1 && (
                <div className="hidden md:block">
                  <AiOutlineArrowRight className="h-6 w-6 text-black" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second Row for md and lg screens */}
      <div className="hidden md:flex flex-col md:flex-row justify-between w-full max-w-4xl mt-4">
        {stepsRow2.slice().reverse().map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center flex-1 text-center p-2">
              <div className="text-3xl mb-2">{step.icon}</div>
              <div className="font-semibold font-bitter">{step.text}</div>
            </div>
            {index < stepsRow2.length - 1 && (
              <div className="hidden md:block">
                <AiOutlineArrowLeft className="h-6 w-6 text-black" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* For mobile screens (below md) */}
      <div className="md:hidden flex flex-col items-center w-full max-w-4xl">
        {mobileSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center flex-1 text-center p-2">
              <div className="text-3xl mb-2">{step.icon}</div>
              <div className="font-semibold">{step.text}</div>
            </div>
            {index < mobileSteps.length - 1 && (
              <div className="flex items-center justify-center mt-4 mb-4">
                <AiOutlineArrowDown className="h-6 w-6 text-black" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorks;
