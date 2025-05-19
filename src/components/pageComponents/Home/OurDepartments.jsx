import React from "react";
import { FaCapsules, FaFlask, FaMicroscope, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Pharmaceutics",
    icon: <FaCapsules className="w-8 h-8" />,
    description: "Study of drug formulation and delivery systems",
  },
  {
    name: "Pharmaceutical Quality Assurance",
    icon: <FaFlask className="w-8 h-8" />,
    description: "Ensuring quality and safety of pharmaceutical products",
  },
  {
    name: "Pharmaceutical Chemistry",
    icon: <FaMicroscope className="w-8 h-8" />,
    description: "Research and development of new drugs",
  },
  {
    name: "Pharmacognosy",
    icon: <FaLeaf className="w-8 h-8" />,
    description: "Study of medicinal plants and natural products",
  },
];

const OurDepartments = () => {
  return (
    <div className="bg-emerald-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Departments
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-emerald-600 font-semibold">
            Admissions Open 2024-2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-300">
                      {dept.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600">{dept.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurDepartments;
