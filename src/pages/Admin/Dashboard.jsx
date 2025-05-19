import {
  FaUsers,
  FaChalkboardTeacher,
  FaRegCalendarAlt,
  FaBullhorn,
  FaUserGraduate,
  FaQuoteRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-2 md:p-6 min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-2 md:mb-4">
          Admin Dashboard
        </h2>
        <p className="text-sm md:text-lg text-gray-600 text-center mb-4 md:mb-8">
          Welcome, Admin! Manage your college data efficiently.
        </p>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          <Link
            to="/admin/committees"
            className="bg-white/80 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 text-center transition-all hover:scale-105 hover:shadow-2xl hover:border-blue-400"
          >
            <FaUsers className="text-blue-500 text-3xl md:text-5xl mb-2 md:mb-3" />
            <h3 className="text-lg md:text-xl font-bold">Committees</h3>
            <p className="text-sm md:text-base text-gray-600">
              Manage committee members & roles.
            </p>
          </Link>

          <Link
            to="/admin/faculty"
            className="bg-white/80 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 text-center transition-all hover:scale-105 hover:shadow-2xl hover:border-green-400"
          >
            <FaChalkboardTeacher className="text-green-500 text-3xl md:text-5xl mb-2 md:mb-3" />
            <h3 className="text-lg md:text-xl font-bold">Faculty</h3>
            <p className="text-sm md:text-base text-gray-600">
              Add, update, or remove faculty members.
            </p>
          </Link>

          <Link
            to="/admin/admissions"
            className="bg-white/80 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 text-center transition-all hover:scale-105 hover:shadow-2xl hover:border-indigo-400"
          >
            <FaUserGraduate className="text-indigo-500 text-3xl md:text-5xl mb-2 md:mb-3" />
            <h3 className="text-lg md:text-xl font-bold">Admissions</h3>
            <p className="text-sm md:text-base text-gray-600">
              Manage admission applications.
            </p>
          </Link>

          <Link
            to="/admin/events"
            className="bg-white/80 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 text-center transition-all hover:scale-105 hover:shadow-2xl hover:border-yellow-400"
          >
            <FaRegCalendarAlt className="text-yellow-500 text-3xl md:text-5xl mb-2 md:mb-3" />
            <h3 className="text-lg md:text-xl font-bold">Events</h3>
            <p className="text-sm md:text-base text-gray-600">
              Schedule & update upcoming events.
            </p>
          </Link>

          <Link
            to="/admin/news"
            className="bg-white/80 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 text-center transition-all hover:scale-105 hover:shadow-2xl hover:border-red-400"
          >
            <FaBullhorn className="text-red-500 text-3xl md:text-5xl mb-2 md:mb-3" />
            <h3 className="text-lg md:text-xl font-bold">Announcements</h3>
            <p className="text-sm md:text-base text-gray-600">
              Post important college updates.
            </p>
          </Link>

          <Link
            to="/admin/testimonials"
            className="bg-white/80 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-4 md:p-6 text-center transition-all hover:scale-105 hover:shadow-2xl hover:border-purple-400"
          >
            <FaQuoteRight className="text-purple-500 text-3xl md:text-5xl mb-2 md:mb-3" />
            <h3 className="text-lg md:text-xl font-bold">Testimonials</h3>
            <p className="text-sm md:text-base text-gray-600">
              Manage student testimonials.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
