import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8 ">
      <div className=" flex flex-col items-center gap-5 lg:flex-row lg:justify-around lg:gap-20">
        <div>
          <h2 className="font-bold text-lg mb-2">WarmPaws</h2>
          <p>Keeping your pets warm <br />and safe during winter!</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Links</h2>
          <Link to="/privacy" className="block hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-400">© 2025 WarmPaws. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
