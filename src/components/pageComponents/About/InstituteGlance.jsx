import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUsers,
  FaFlask,
  FaChalkboardTeacher,
  FaAward,
  FaBook,
  FaHandshake,
  FaMicroscope,
} from "react-icons/fa";

const InstituteGlance = () => {
  const stats = [
    { icon: FaGraduationCap, count: "1000+", label: "Alumni" },
    { icon: FaUsers, count: "500+", label: "Current Students" },
    { icon: FaChalkboardTeacher, count: "50+", label: "Faculty Members" },
    { icon: FaFlask, count: "10+", label: "Research Labs" },
  ];

  const features = [
    {
      icon: FaMicroscope,
      title: "State-of-the-Art Laboratories",
      description:
        "Modern facilities equipped with the latest pharmaceutical equipment",
    },
    {
      icon: FaBook,
      title: "Comprehensive Library",
      description:
        "Extensive collection of books, journals, and digital resources",
    },
    {
      icon: FaHandshake,
      title: "Industry Partnerships",
      description: "Strong connections with leading pharmaceutical companies",
    },
    {
      icon: FaAward,
      title: "Academic Excellence",
      description: "Consistently high performance in university examinations",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16 px-6 md:px-20">
      <BreadCrumb />
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Institute at a Glance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy is
            committed to excellence in pharmacy education, research, and
            innovation.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="text-4xl text-emerald-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6 transform hover:scale-102 transition-transform duration-300"
            >
              <feature.icon className="text-3xl text-emerald-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Journey of Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Educational Programs
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Bachelor of Pharmacy (B.Pharm)</li>
                  <li>Diploma in Pharmacy (D.Pharm)</li>
                  <li>Master of Pharmacy (M.Pharm)</li>
                  <li>Ph.D. Programs</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Infrastructure
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modern Lecture Halls</li>
                  <li>Research Laboratories</li>
                  <li>Digital Library</li>
                  <li>Computer Center</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be a leading institution in pharmacy education, fostering
                innovation, research, and professional excellence while
                contributing to healthcare advancement and community welfare.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteGlance;
