import React, { useState } from "react";

const MaintenancePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const plans = [
    {
      name: "Basic Garden Maintenance Service",
      area: "Up to 500 Sq.ft.",
      frequency: "15 Days",
      services: [
        "Lawn mowing",
        "Basic weeding",
        "Leaf-blowing and debris removal",
        "Hedge trimming (once a month)",
        "Watering of plants (if no irrigation system exists)",
        "Basic garden bed cleaning",
      ],
      prices: [
        { duration: "3 Months", price: "₹999" },
        { duration: "6 Months", price: "₹1799" },
        { duration: "12 Months", price: "₹2999" },
      ],
    },
    {
      name: "Standard Garden Maintenance Service",
      area: "Up to 1000 Sq.ft.",
      frequency: "15 Days",
      services: [
        "Everything in Basic Service",
        "Fertilizing lawns and plants",
        "Seasonal planting and flower bed refresh",
        "Pruning of trees and shrubs",
        "Mulching garden beds",
        "Lawn edging",
        "Pest control (basic)",
        "Irrigation system check and minor repairs",
        "Disease management for plants",
      ],
      prices: [
        { duration: "3 Months", price: "₹1499" },
        { duration: "6 Months", price: "₹2499" },
        { duration: "12 Months", price: "₹3999" },
      ],
    },
    {
      name: "Premium Garden Maintenance Service",
      area: "Up to 1500 Sq.ft.",
      frequency: "15 Days",
      services: [
        "Everything in Standard Service",
        "Comprehensive irrigation system maintenance and repairs",
        "Expert plant care and specialized pruning",
        "Regular pest and disease monitoring and treatment",
        "Custom seasonal flower displays and garden redesigns",
        "Lawn aeration and dethatching",
        "Soil health improvement (composting, organic treatments)",
        "Water feature cleaning and maintenance",
        "Tree removal and stump grinding",
        "Landscape lighting maintenance",
        "Personalized garden management plans",
      ],
      prices: [
        { duration: "3 Months", price: "₹1999" },
        { duration: "6 Months", price: "₹3499" },
        { duration: "12 Months", price: "₹5499" },
      ],
    },
    {
      name: "Custom Garden Maintenance Service",
      area: "More Than 1500 Sq.ft.",
      frequency: "15 Days",
      services: [
        "Everything in Standard Service",
        "Comprehensive irrigation system maintenance and repairs",
        "Expert plant care and specialized pruning",
        "Regular pest and disease monitoring and treatment",
        "Custom seasonal flower displays and garden redesigns",
        "Lawn aeration and dethatching",
        "Soil health improvement (composting, organic treatments)",
        "Water feature cleaning and maintenance",
        "Tree removal and stump grinding",
        "Landscape lighting maintenance",
        "Personalized garden management plans",
      ],
      prices: [{ duration: "On demand", price: "Custom Price" }],
    },
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan.name);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Plan: ${selectedPlan}`;
    const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#f4f4f4] py-20 px-4 lg:px-16 flex flex-col items-center justify-center">
      <h1 className="text-[36px] md:text-[48px] lg:text-[56px] mb-12 font-young-serif text-center">
        Choose Your Garden Maintenance Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col px-2 py-8 bg-white shadow hover:shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500"
          >
            <div className="w-full h-[45rem] flex flex-col">
              <h2 className="text-2xl md:text-xl lg:text-2xl font-young-serif mb-4 text-gray-800 text-center">
                {plan.name}
              </h2>
              <p className="text-lg md:text-base lg:text-lg my-8 text-gray-600 text-center underline">
                {plan.area}
              </p>
              <ul className="space-y-4 ml-2 text-gray-600 mb-8 text-sm sm:text-[10px] font-semibold">
                {plan.services.map((service, idx) => (
                  <li key={idx}>✓ {service}</li>
                ))}
                <li className="text-black bold underline text-lg">
                  Frequency: {plan.frequency}
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full border-t-2 border-gray-200 pt-6">
                <h3 className="text-xl md:text-lg lg:text-xl font-young-serif mb-4 text-gray-800 pl-4">
                  Plans Available:
                </h3>
                <div className="flex flex-col items-center space-y-4">
                  {plan.prices.map((price, idx) => (
                    <span
                      key={idx}
                      className="block w-[14rem] py-3 px-6 bg-gray-100 rounded text-sm font-bold text-gray-700 cursor-pointer shadow-md hover:shadow-sm transition-all ease-in-out duration-300"
                      onClick={() =>
                        handlePlanClick(`${plan.name} - ${price.duration}`)
                      }
                    >
                      {price.duration} - {price.price}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full mb-4 p-2 border"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full mb-4 p-2 border"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="block w-full mb-4 p-2 border"
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaintenancePlan;
