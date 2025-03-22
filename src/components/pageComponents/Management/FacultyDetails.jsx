import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { facultyData } from "./facultyData";
import BreadCrumb from "../../Common/BreadCrumb";

const FacultyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const faculty = facultyData.find((f) => f.id === parseInt(id));

  if (!faculty) {
    return (
      <h1 className="text-center mt-20 text-red-500">Faculty Not Found</h1>
    );
  }

  return (
    <>
      <BreadCrumb />{" "}
      <div className="h-full flex flex-col items-center justify-center bg-gray-100 p-6">
        {/*       
    <button
      onClick={() => navigate("/management/faculty")}
      className="mb-4 bg-gray-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
    >
      ← Back to Faculty List
    </button> */}

        {/* Faculty Card */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-300">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={faculty.photo}
              alt={faculty.name}
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="text-center mt-4">
            <h1 className="text-3xl font-semibold text-gray-800">
              {faculty.name}
            </h1>
            <h2 className="text-lg text-gray-600">{faculty.designation}</h2>
            <p className="text-gray-700 mt-2 font-medium">
              {faculty.qualification}
            </p>
          </div>

          {/* Info Section */}
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong className="text-blue-600">Experience:</strong>{" "}
              {faculty.experience}
            </p>
            <p>
              <strong className="text-blue-600">Email:</strong>{" "}
              <a
                href={`mailto:${faculty.email}`}
                className="text-blue-500 hover:underline"
              >
                {faculty.email}
              </a>
            </p>
            <p>
              <strong className="text-blue-600">Contact:</strong>{" "}
              {faculty.mobile}
            </p>
            <p>
              <strong className="text-blue-600">Joining Date:</strong>{" "}
              {faculty.dateOfJoining}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyDetails;
