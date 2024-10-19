import React from 'react';
import { useState, useEffect } from 'react';

const WhyChooseUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex space-x-12" style={{ transform: `translateX(-${scrollPosition}%)`, transition: 'transform 0.3s' }}>
          {/* Slide 1 */}
          <div className="min-w-max bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-icon1.png" alt="Warranty" className="h-16 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Flat 10 Year Warranty</h3>
          </div>
          {/* Slide 2 */}
          <div className="min-w-max bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-icon2.png" alt="EMIs" className="h-16 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Easy EMIs</h3>
          </div>
          {/* Slide 3 */}
          <div className="min-w-max bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-icon3.png" alt="Designers" className="h-16 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">600+ In-House Designers</h3>
          </div>
          {/* Slide 4 */}
          <div className="min-w-max bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-icon4.png" alt="Homes" className="h-16 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">35,000+ Homes Delivered</h3>
          </div>
          {/* Slide 5 */}
          <div className="min-w-max bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-icon5.png" alt="Studios" className="h-16 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">44 Studios</h3>
          </div>
          {/* Slide 6 */}
          <div className="min-w-max bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-icon6.png" alt="Cities" className="h-16 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">22 Cities</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
