import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const quickLinks = [
    { name: "Admission Process", path: "/admissions/process" },
    { name: "Institute at a Glance", path: "/about/institute-at-glance" },
    { name: "Governing Body", path: "/management/governing-body" },
    { name: "Faculty", path: "/management/faculty" },
    { name: "FAQs", path: "/faqs" },
    { name: "Awards and Recognitions", path: "/awards" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/people/Smkvp-College-Of-Pharmacy-Nighoj/61574789912420/?mibextid=wwXIfr&rdid=4CIn0RsAVkwGamkd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AKFf1UCxf%2F%3Fmibextid%3DwwXIfr",
    },
    // { icon: FaTwitter, url: "https://twitter.com" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/smkvp_college_of_pharmacy_/?igsh=NXNubW8zM3dsOHY%3D#",
    },
    // { icon: FaLinkedin, url: "https://linkedin.com" },
    // { icon: FaYoutube, url: "https://youtube.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-emerald-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MdEmail className="text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">smkvpcop@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdPhone className="text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400">+91 9322815988</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdLocationOn className="text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-400">
                    At/Post-Nighoj, Tal. Parner,
                    <br />
                    Dist. Ahmednagar (MS) - 414 306
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/apply-now"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7573460106796!2d74.2688558!3d18.9421318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcd453bc74069b%3A0x9e124ccdb7f08564!2sS.%20M.%20K.%20V.%20P.%20College%20Of%20Pharmacy!5e0!3m2!1sen!2sin!4v1743532039143!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: "250px" }}
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>
                © {new Date().getFullYear()} SMKVPCoP. All Rights Reserved.{" "}
                <Link to="/privacy-policy" className="hover:text-emerald-400">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
