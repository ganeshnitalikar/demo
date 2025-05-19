import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CollegeBanner from "./CollegeBanner";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Dropdown
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".nav-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Define category base paths
  const categoryPaths = {
    "About Us": "/about",
    Management: "/management",
    Academics: "/academics",
    "Student's Corner": "/students-corner",
    Committees: "/committees",
  };

  return (
    <nav
      className={`relative z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-900 shadow-lg" : "bg-green-300"
      }`}
    >
      <Link to="/">
        <CollegeBanner />
      </Link>

      <div className="w-full bg-green-900">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-green-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Menu */}
          <ul
            className={`nav-menu md:flex md:justify-center md:space-x-6 w-full md:w-auto bg-green-900 absolute md:relative left-0 text-white top-full md:top-auto transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {[
              {
                name: "About Us",
                subItems: [
                  "Institute At Glance",
                  "President's Message",
                  "Secretary's Message",
                  "Principal's Message",
                ],
              },
              {
                name: "Management",
                subItems: [
                  "Principal",
                  "Faculty",
                  "Non-Teaching Staff",
                  "Governing Body",
                ],
              },
              {
                name: "Academics",
                subItems: [
                  "Overview",
                  "D.Pharm",
                  "B.Pharm",
                  "University Calender",
                ],
              },
              {
                name: "Committees",
                subItems: [
                  "Training & Placement",
                  "Anti-Ragging",
                  "Student Grievance",
                  "Anti-Descrimination Cell",
                  "SC-ST Cell",
                  "Gender Sensitization",
                  "Anti-Harassment",
                ],
              },
              {
                name: "More",
                subItems: ["Library", "Events"],
              },
              {
                name: "Admissions",
                subItems: ["Apply Now", "Admission Process"],
              },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <button
                  className="px-4 py-2 block w-full md:w-auto text-white hover:bg-green-700 transition-colors duration-200"
                  onClick={() => toggleDropdown(item.name)}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {item.subItems.length > 0 && (
                      <span className="ml-2 text-xs md:text-base">▼</span>
                    )}
                  </span>
                </button>

                {/* Dropdown Menu */}
                <ul
                  className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 bg-green-500 w-full md:w-52 shadow-lg z-50 ${
                    dropdownOpen === item.name ? "block" : "hidden"
                  } md:group-hover:block transition-all duration-200`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.subItems.map((sub, subIndex) => {
                    const basePath = categoryPaths[item.name] || "";
                    const subPath = sub.toLowerCase().replace(/\s+/g, "-");
                    const finalPath = `${basePath}/${subPath}`;

                    return (
                      <li key={subIndex}>
                        <Link
                          to={finalPath}
                          className="block px-4 py-2 hover:bg-green-700 transition-colors duration-200"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}

            {/* Mandatory Disclosure Link */}
            <li>
              <Link
                to="/mandatory-disclosure"
                className="px-4 py-2 block w-full md:w-auto hover:bg-green-700 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Mandatory Disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
