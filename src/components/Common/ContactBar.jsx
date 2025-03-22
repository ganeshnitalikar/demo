import { Link } from "react-router-dom";
import { mail, mobileNumber, landline } from "../../constants.js";

const ContactBar = () => {
  return (
    <nav className="bg-black text-white p-3 md:p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-sm md:text-base">
          {/* Email */}
          <a
            href={`mailto:${mail}`}
            className="hover:text-yellow-300 text-center"
          >
            {mail}
          </a>

          {/* Mobile Number */}
          <a
            href={`tel:${mobileNumber}`}
            className="hover:text-yellow-300 text-center"
          >
            +91 {mobileNumber}
          </a>

          {/* Landline */}
          <a
            href={`tel:${landline}`}
            className="hover:text-yellow-300 text-center"
          >
            {landline}
          </a>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-yellow-400 text-blue-800 px-4 py-2 rounded hover:bg-yellow-500 text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ContactBar;
