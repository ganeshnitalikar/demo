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
    Departments: "/departments",
    "Student's Corner": "/students-corner",
    Committees: "/committees",
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <CollegeBanner />
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-blue-600 w-full md:w-auto left-0 top-16 md:top-auto transition-all duration-300 ease-in ${
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
              subItems: [
                "Overview",
                "Under Graduate Programme",
                "Diploma Programmes",
              ],
            },
            {
              name: "Departments",
              subItems: ["Computer Science", "Electronics"],
            },
            {
              name: "Infrastructure",
              subItems: ["Library", "Laboratories", "Classrooms"],
            },
            {
              name: "Student's Corner",
              subItems: ["Events", "Hostel", "Clubs"],
            },
            {
              name: "Committees",
              subItems: ["Anti-Ragging", "Placement Cell"],
            },
          ].map((item, index) => (
            <li key={index} className="relative group z-50">
              <button
                className="px-4 py-2 block w-full md:w-auto hover:bg-blue-700"
                onClick={() => toggleDropdown(item.name)}
              >
                {item.name + (item.subItems.length > 0 ? " ▼" : "")}
              </button>
              <ul
                className={`absolute left-0 bg-blue-500 w-52 shadow-lg ${
                  dropdownOpen === item.name ? "block" : "hidden"
                } md:group-hover:block`}
              >
                {item.subItems.map((sub, subIndex) => {
                  const basePath = categoryPaths[item.name] || "";
                  const subPath = sub.toLowerCase().replace(/\s+/g, "-");
                  const finalPath = `${basePath}/${subPath}`;

                  return (
                    <li key={subIndex}>
                      <Link
                        to={finalPath}
                        className="block px-4 py-2 hover:bg-blue-700"
                      >
                        {sub}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
