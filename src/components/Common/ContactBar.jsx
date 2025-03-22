import { Link } from "react-router-dom";
import { mail, mobileNumber, landline } from "../../constants.js";

const ContactBar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto ">
        <div className="flex lg:justify-center lg:gap-10 justify-evenly items-center">
          <a href="mailto:${mail}" className="hover:text-yellow-300">
            {mail}
          </a>

          <a href="tel:${mobileNumber}" className="hover:text-yellow-300">
            +91 {mobileNumber}
          </a>

          <a href="tel:${landline}" className="hover:text-yellow-300">
            {landline}
          </a>

          <Link
            to="/login"
            className="bg-yellow-400 text-blue-800 px-4 py-2 rounded hover:bg-yellow-500"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ContactBar;
