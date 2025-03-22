import React from "react";
import { FaCapsules, FaFlask, FaMicroscope, FaLeaf } from "react-icons/fa"; // Importing icons

const departments = [
  { name: "Pharmaceutics", icon: <FaCapsules /> },
  { name: "Pharmaceutical Quality Assurance", icon: <FaFlask /> },
  { name: "Pharmaceutical Chemistry", icon: <FaMicroscope /> },
  { name: "Pharmacognosy", icon: <FaLeaf /> },
];

const OurDepartments = () => {
  return (
    <div className="text-center  bg-gray-700 text-white  p-15">
      <h1 className="lg:text-5xl text-3xl font-bold text-blue-700">
        Our Departments
      </h1>
      <h3 className=" md:text-2xl text-gray-100 mt-2">
        Admissions Open 2024-2025
      </h3>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer w-60"
          >
            <div className="text-5xl text-blue-500">{dept.icon}</div>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              {dept.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDepartments;
