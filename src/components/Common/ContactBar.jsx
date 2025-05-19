import { Link } from "react-router-dom";
import { mail, mobileNumber, landline } from "../../constants.js";
import { FaEnvelope, FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";

const ContactBar = () => {
  return (
    <nav className="bg-black text-white py-2 md:py-3 w-full">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-row justify-between items-center gap-2 md:gap-6 text-xs md:text-base">
          {/* Email */}
          <a
            href={`mailto:${mail}`}
            className="flex items-center gap-1 md:gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaEnvelope className="text-yellow-400 text-sm md:text-base" />
            <span className="hidden sm:inline">{mail}</span>
            <span className="sm:hidden">Email</span>
          </a>

          {/* Mobile Number */}
          <a
            href={`tel:${mobileNumber}`}
            className="flex items-center gap-1 md:gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaPhone className="text-yellow-400 text-sm md:text-base" />
            <span className="hidden sm:inline">+91 {mobileNumber}</span>
            <span className="sm:hidden">Mobile</span>
          </a>

          {/* Landline */}
          <a
            href={`tel:${landline}`}
            className="flex items-center gap-1 md:gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaPhoneAlt className="text-yellow-400 text-sm md:text-base" />
            <span className="hidden sm:inline">{landline}</span>
            <span className="sm:hidden">Landline</span>
          </a>

          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center gap-1 md:gap-2 bg-yellow-400 text-blue-800 px-2 md:px-4 py-1 md:py-2 rounded text-xs md:text-base hover:bg-yellow-500 transition-colors duration-200"
          >
            <FaUser className="text-sm md:text-base" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ContactBar;
