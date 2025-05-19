import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import withFocusManagement from "../hocs/withFocusManagement";
import Dashboard from "./Admin/Dashboard";
import AdminFaculty from "./Admin/AdminFaculty";
import AdminNews from "./Admin/AdminNews";
import AdminImages from "./Admin/AdminImages";
import AdminNonTeachingStaff from "./Admin/AdminNonTeachingStaff";
import AdminAdmissions from "./Admin/AdminAdmissions";
import AdminTestimonials from "./Admin/AdminTestimonials";
import leftLogo from "../assets/leftLogo.png";
import rightLogo from "../assets/rightLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

// Wrap admin components with focus management
const DashboardWithFocus = withFocusManagement(Dashboard);
const AdminFacultyWithFocus = withFocusManagement(AdminFaculty);
const AdminNewsWithFocus = withFocusManagement(AdminNews);
const AdminImagesWithFocus = withFocusManagement(AdminImages);
const AdminNonTeachingStaffWithFocus = withFocusManagement(
  AdminNonTeachingStaff
);
const AdminAdmissionsWithFocus = withFocusManagement(AdminAdmissions);
const AdminTestimonialsWithFocus = withFocusManagement(AdminTestimonials);

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-green-400 py-2 md:py-4 px-4 md:px-8 shadow-md">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={leftLogo} alt="left_logo" className="h-16 md:h-20" />
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="text-center mt-2 md:mt-0">
          <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-blue-950">
            Shraddha Rural Medical Social Welfare & Educational Trust's
          </h4>
          <h1 className="text-red-900 font-bold text-base md:text-2xl lg:text-3xl uppercase">
            Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
          </h1>
          <h3 className="text-sm md:text-lg font-bold text-blue-950">
            (D. Pharm. & B. Pharm.)
          </h3>
          <h3 className="text-xs md:text-md text-blue-950 font-bold">
            At/Post-Nighoj, Tal. Parner, Dist. Ahmednagar (MS) - 414 306
          </h3>
          <h4 className="text-xs md:text-sm font-medium text-gray-700">
            <a
              href="https://www.shraddhaedu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.shraddhaedu.com
            </a>{" "}
            | Email: smkvpcop@gmail.com
          </h4>
        </div>

        <img
          src={rightLogo}
          alt="right_logo"
          className="h-16 md:h-20 hidden md:block"
        />
      </div>

      {/* Layout Container */}
      <div className="flex relative">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 z-50 w-64 md:w-1/6 bg-red-500 text-white transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
              Admin Panel
            </h2>
            <nav className="space-y-2">
              {[
                { path: "/admin/dashboard", label: "Dashboard" },
                { path: "/admin/faculty", label: "Faculty" },
                {
                  path: "/admin/nonteachingstaff",
                  label: "Non-Teaching Staff",
                },
                { path: "/admin/news", label: "News" },
                { path: "/admin/images", label: "Images" },
                { path: "/admin/admissions", label: "Admissions" },
                { path: "/admin/testimonials", label: "Testimonials" },
                { path: "/", label: "Logout" },
              ].map((item, index) => (
                <li key={index} className="list-none w-full">
                  <Link
                    to={item.path}
                    className="block w-full p-2 md:p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300 text-sm md:text-lg font-semibold text-center"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="w-full md:w-5/6 min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-center text-white bg-amber-900 py-3 md:py-4 rounded-lg shadow-md">
            Admin Panel
          </h2>

          <div className="mt-4 md:mt-6 bg-white/80 backdrop-blur-lg p-4 md:p-6 rounded-xl shadow-xl">
            <Routes>
              <Route path="/dashboard" element={<DashboardWithFocus />} />
              <Route path="/faculty" element={<AdminFacultyWithFocus />} />
              <Route
                path="/nonteachingstaff"
                element={<AdminNonTeachingStaffWithFocus />}
              />
              <Route path="/news" element={<AdminNewsWithFocus />} />
              <Route path="/images" element={<AdminImagesWithFocus />} />
              <Route
                path="/admissions"
                element={<AdminAdmissionsWithFocus />}
              />
              <Route
                path="/testimonials"
                element={<AdminTestimonialsWithFocus />}
              />
              <Route path="*" element={<DashboardWithFocus />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
