import { useState } from "react";
import { Link } from "react-router-dom";
import CollegeBanner from "./CollegeBanner";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Toggle Dropdown
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Define category base paths
  const categoryPaths = {
    "About Us": "/about",
    Management: "/management",
    Academics: "/academics",
    "Student's Corner": "/students-corner",
    Committees: "/committees",
  };

  return (
    <nav className="bg-green-300 text-white  w-full">
      <CollegeBanner />

      {/* ✅ Full-width background with centered content */}
      <div className=" w-full bg-green-900 flex justify-center">
        {/* ✅ Restricting inner content to screen size */}
        <div className="w-full max-w-screen-xl flex justify-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white mb-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <ul
            className={`md:flex md:justify-center md:space-x-6 w-full md:w-auto bg-green-900 absolute md:static left-0 top-16 md:top-auto transition-all duration-300 ease-in ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {[
              {
                name: "About Us",
                subItems: ["Institute At Glance", "Principal's Message"],
              },
              {
                name: "Management",
                subItems: ["Principal", "Faculty", "Non-Teaching Staff"],
              },
              {
                name: "Academics",
                subItems: ["Overview", "B.Pharm", "University Calender"],
              },
              // {
              //   name: "Infrastructure",
              //   subItems: ["Library", "Laboratories", "Classrooms"],
              // },
              // {
              //   name: "Student's Corner",
              //   subItems: ["Events", "Hostel", "Clubs"],
              // },
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
                name: "Admissions",
                subItems: ["Apply Now"],
              },
            ].map((item, index) => (
              <li key={index} className="relative group">
                {/* Main Category Button */}
                <button
                  className="px-4 py-2 block w-full md:w-auto hover:bg-green-700"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name + (item.subItems.length > 0 ? " ▼" : "")}
                </button>

                {/* Dropdown Menu */}
                <ul
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-green-500 w-52 shadow-lg z-50 ${
                    dropdownOpen === item.name ? "block" : "hidden"
                  } md:group-hover:block`}
                  onClick={(e) => e.stopPropagation()} // Prevents click from closing dropdown
                >
                  {item.subItems.map((sub, subIndex) => {
                    const basePath = categoryPaths[item.name] || "";
                    const subPath = sub.toLowerCase().replace(/\s+/g, "-");
                    const finalPath = `${basePath}/${subPath}`;

                    return (
                      <li key={subIndex}>
                        <Link
                          to={finalPath}
                          className="block px-4 py-2 hover:bg-green-700"
                          onClick={() => setMenuOpen(false)} // Close menu after selection
                        >
                          {sub}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}

            {/* ✅ Mandatory Disclosure Link */}
            <li>
              <Link
                to="/mandatory-disclosure"
                className="px-4 py-2 block w-full md:w-auto hover:bg-green-700"
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
