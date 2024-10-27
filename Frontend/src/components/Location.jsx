import React from "react";

const Location = () => {
  const cities = [
    "Delhi", "Gurugram", "Noida", "Indore", "Lucknow", "Ghaziabad", "Faridabad", 
    "Bengaluru", "Chennai", "Hyderabad", "Kochi", "Mysore", "Coimbatore", 
    "Mangalore", "Vijayawada", "Vizag", "Kolkata", "Mumbai", "Pune", 
    "Ahmedabad", "Jaipur", "Surat", "Thane", "Nagpur", "Goa", 
    "Chandigarh", "Trivandrum", "Vadodara", "Patna", "Bhubaneswar", 
    "Guwahati", "Bhopal", "Nashik", "Navi Mumbai", "Dehradun", "Kanpur", 
    "Madurai", "Thrissur", "Raipur", "Ranchi", "Rajkot", "Pondicherry", 
    "Ludhiana", "Srinagar", "Salem", "Agra", "Amritsar", "Jalandhar", 
    "Meerut", "Gorakhpur", "Jodhpur", "Varanasi", "Jammu", "Kozhikode", 
    "Bikaner", "Baramulla"
  ];

  const professions = [
    "Landscape Designer", "Landscape Architect", "Gardener", "Horticulturalist"
  ];

  return (
    <div className="bg-[#4d3a4b] text-[#ffffff99] py-10 px-4">
      {professions.map((profession, idx) => (
        <div key={idx} className="mb-8 font-young-serif">
          <h2 className="text-lg font-medium text-white mb-4">{profession} Locations</h2>
          <div className="flex flex-wrap gap-4">
            {cities.map((city, index) => (
              <p key={index} className="text-[12px] font-bitter">
                {`${profession} in ${city}`}
              </p>
            ))}
            <div className="w-full h-[1px] block bg-[#ffffff33] "></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Location;
