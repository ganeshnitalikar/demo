import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import {
  FaGraduationCap,
  FaBook,
  FaUniversity,
  FaMapMarkedAlt,
  FaBookReader,
  FaFlask,
} from "react-icons/fa";

const InstituteAtGlance = () => {
  const stats = [
    {
      icon: <FaGraduationCap className="w-8 h-8 text-emerald-500" />,
      label: "Established",
      value: "2009-2010",
      description: "Years of Excellence in Pharmacy Education",
    },
    {
      icon: <FaBook className="w-8 h-8 text-purple-500" />,
      label: "Courses",
      value: "B.Pharm & D.Pharm",
      description: "Comprehensive Pharmacy Programs",
    },
    {
      icon: <FaUniversity className="w-8 h-8 text-blue-500" />,
      label: "Affiliated to",
      value: "Dr. Babasaheb Ambedkar Technological University",
      description: "Associated with MSBTE",
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8 text-red-500" />,
      label: "Campus Area",
      value: "2.5 acres",
      description: "Modern Infrastructure & Facilities",
    },
    {
      icon: <FaBookReader className="w-8 h-8 text-yellow-500" />,
      label: "Library",
      value: "5,000+ books & journals",
      description: "Extensive Learning Resources",
    },
    {
      icon: <FaFlask className="w-8 h-8 text-pink-500" />,
      label: "Labs",
      value: "12 state-of-the-art laboratories",
      description: "Advanced Research Facilities",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16 px-6 md:px-20">
      <BreadCrumb />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Institute at a Glance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our world-class facilities and commitment to excellence in
            pharmaceutical education, where we shape the future leaders of the
            pharmacy industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                {stat.label}
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-600">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                We maintain high academic standards with experienced faculty
                members and modern teaching methodologies to ensure quality
                education.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">
                Research & Innovation
              </h3>
              <p className="text-gray-600">
                Our well-equipped laboratories and research facilities encourage
                students to explore and innovate in pharmaceutical sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteAtGlance;
