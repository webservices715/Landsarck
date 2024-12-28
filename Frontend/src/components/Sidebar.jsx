import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const phoneNumber = "9680027791";

const icons = [
  { id: 1, icon: IoCallSharp, link: `tel:+${phoneNumber}` }, 
  { id: 2, icon: FaWhatsapp, link: `https://wa.me/${phoneNumber}` },
  { id: 3, icon: IoMail, link: "mailto:info@landsarck.com" },
  { id: 4, icon: FaInstagram, link: "https://www.instagram.com/landsarck/" },
  { id: 5, icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61566920546974" },
  // { id: 6, icon: FaLinkedinIn, link: "mailto:dr." },
  // { id: 7, icon: IoLogoYoutube, link: "youtube" },
  { id: 8, icon: FaPinterest, link: "https://in.pinterest.com/landsarck/" },
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
