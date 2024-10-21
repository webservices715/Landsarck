import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; 

const icons = [
  { id: 1, icon: IoCallSharp, link: "tel:+" },
  { id: 2, icon: FaWhatsapp, link: "https://" },
  { id: 3, icon: IoMail, link: "mailto:info@landsarck.com" },
  { id: 4, icon: FaInstagram, link: "mailto:dr." },
  { id: 5, icon: FaFacebookF, link: "mailto:dr." },
  { id: 6, icon: FaLinkedinIn, link: "mailto:dr." },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed md:top-1/3 bottom-12  right-0 flex flex-col mx-1 space-y-2 z-30">
      <button
        onClick={toggleSidebar}
        className="bg-black text-white md:w-14 md:h-14 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-700 transition ease-in-out delay-100"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      <div
        className={`flex flex-col space-y-2 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "absolute right-[-20px] translate-x-full"
        }`}
      >
        {icons.map(({ id, icon: Icon, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-black md:w-14 md:h-14 w-12 h-12 flex items-center justify-center md:rounded-xl rounded-lg shadow-lg hover:bg-black hover:text-white transition ease-in-out delay-100"
          >
            <Icon className="md:text-2xl text-xl" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
