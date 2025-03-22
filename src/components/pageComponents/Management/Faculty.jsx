import React from "react";
import { useNavigate } from "react-router-dom";
import { facultyData } from "./facultyData";

const FacultyList = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Teaching Faculty (Department of Pharmaceutics)
      </h1>
      <div className="flex justify-center">
        <table className="w-3/4 border-2 border-black text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-black p-2">Photo</th>
              <th className="border-2 border-black p-2">Name</th>
              <th className="border-2 border-black p-2">Experience</th>
              <th className="border-2 border-black p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty) => (
              <tr key={faculty.id}>
                <td className="border-2 border-black p-2">
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="border-2 border-black p-2">{faculty.name}</td>
                <td className="border-2 border-black p-2">
                  {faculty.experience}
                </td>
                <td className="border-2 border-black p-2">
                  <button
                    onClick={() =>
                      navigate(`/management/faculty/${faculty.id}`)
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Know More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyList;
