// src/components/TerraceGardenPlan.js

import React, { useState } from 'react';

const plans = [
  {
    title: 'Basic Landscape',
    description: 'Our basic garden pricing starts at ₹500 to ₹800 per square foot. This package includes standard plants, planters, and soil, providing a comprehensive solution for your gardening needs. Depending on the specific selections and layout, we can tailor a garden that fits both your aesthetic preferences and budget effectively.',
  },
  {
    title: 'Premium Landscape',
    description: 'Our pricing for premium landscaping services begins at ₹800 to ₹1,200 per square foot. This range includes advanced features such as irrigation systems, premium plants, and structural elements. Our commitment to quality ensures that every project is tailored to meet the specific needs and preferences of our clients, while providing the best in aesthetics and functionality.',
  },
  {
    title: 'Luxury Landscape',
    description: 'Our prices for luxury landscape services start at ₹1,200+ per square foot. This includes features such as water features, specialized lighting, and premium structural elements. Each project is tailored to enhance your outdoor space, combining aesthetics with functionality to create a stunning environment. Our team of experts is dedicated to providing high-quality service and craftsmanship to meet your unique landscape needs.',
  },
];

const TerraceGardenPlan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Choose Terrace Garden Plan</h1>
      <p className="text-center mb-6">
        Our team of skilled landscape designers transforms outdoor spaces into stunning environments that blend beauty and functionality. With a commitment to excellence, we offer customized solutions to suit your unique landscape vision.
      </p>
      <div className="accordion">
        {plans.map((plan, index) => (
          <div key={index} className="border-b border-gray-200">
            <h4 className="flex justify-between items-center cursor-pointer py-4" onClick={() => toggleAccordion(index)}>
              <span className="font-semibold">{plan.title}</span>
              <span className={`${openIndex === index ? 'transform rotate-45' : ''} transition-transform duration-300`}>
                +
              </span>
            </h4>
            {openIndex === index && (
              <div className="pb-4">
                <p>{plan.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="/services" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default TerraceGardenPlan;
