import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const icons = [
  { id: 1, icon: IoCallSharp, link: "tel:+" },
  { id: 2, icon: FaWhatsapp, link: "https://" },
  { id: 3, icon: IoMail, link: "mailto:info@landsarck.com" },
  { id: 4, icon: FaInstagram, link: "mailto:dr." },
  { id: 5, icon: FaFacebookF, link: "mailto:dr." },
  { id: 6, icon: FaLinkedinIn, link: "mailto:dr." },
  { id: 7, icon: IoLogoYoutube, link: "youtube" },
];

const Sidebar = () => {
  return (
    <div className="fixed top-1/4 right-0 flex flex-col mx-1 space-y-2 z-30">
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
  );
};

export default Sidebar;
