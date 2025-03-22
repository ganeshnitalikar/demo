import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      {/* First Row - Logo & NAAC Affiliation */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 md:py-6 border-b border-gray-700 text-center md:text-left">
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <img src={logo} alt="College Logo" className="h-24 md:h-40 w-auto" />
          <h2 className="text-lg md:text-xl font-bold text-white">
            Dr. D. Y. Patil College of Pharmacy
          </h2>
        </div>

        {/* Accreditation Info */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-yellow-400 font-semibold text-sm md:text-base">
            NAAC Accredited Institution
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            Affiliated to Savitribai Phule Pune University
          </p>
        </div>
      </div>

      {/* Second Row - Contact Details, Map, Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-8 border-b border-gray-700">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="flex items-center space-x-2 mt-2">
            <MdEmail className="text-blue-400" />
            <span>info@dyppharma.edu.in</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <MdPhone className="text-green-400" />
            <span>+91 9876543210</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <MdLocationOn className="text-red-400" />
            <span>Pune, Maharashtra, India</span>
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-white font-medium">
            Apply Now
          </button>
        </div>

        {/* Map Box */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.396460937081!2d74.2764389109124!3d18.958090455589176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcd4479b28fa9d%3A0x83b1d5d0cd6389e4!2sSahakar%20Maharshi%20Kisanrao%20Varal%20Patil%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1742401576598!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Admission Process",
              "Institute at a Glance",
              "Gallery",
              "Governing Body",
              "Library",
              "Faculty",
              "FAQs",
              "Alumni",
              "Awards and Recognitions",
            ].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 py-4 border-b border-gray-700">
        {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-all"
            >
              <Icon />
            </a>
          )
        )}
      </div>

      {/* Copyright Row */}
      <div className="text-center py-4 text-gray-400">
        <p>
          © 2025 DYPPHARMA. All Rights Reserved.{" "}
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
