import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/iamgirishwadhwani_100?igsh=cGhnemx6dnhmdTly"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://x.com/GirishWad20716" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/girish-wadhwani-5564a2227/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://medium.com/@girishwadhwani100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium size={24} />
      </a>
    </footer>
  );
};

export default Footer;