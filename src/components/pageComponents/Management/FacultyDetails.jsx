import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../config/api";
import BreadCrumb from "../../Common/BreadCrumb";

const FacultyDetails = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const response = await api.get(`/api/admin/faculty/${id}`);
        setFaculty(response.data);
      } catch (error) {
        console.error("Error fetching faculty details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyDetails();
  }, [id]);

  if (loading) {
    return <h1 className="text-center mt-20">Loading faculty details...</h1>;
  }

  if (!faculty) {
    return (
      <h1 className="text-center mt-20 text-red-500">Faculty Not Found</h1>
    );
  }

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-300">
          <div className="flex justify-center">
            <img
              src={faculty.photo}
              alt={faculty.name}
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
            />
          </div>

          <div className="text-center mt-4">
            <h1 className="text-3xl font-semibold text-gray-800">
              {faculty.name}
            </h1>
            <h2 className="text-lg text-gray-600">{faculty.designation}</h2>
            <p className="text-gray-700 mt-2 font-medium">
              {faculty.qualification}
            </p>
          </div>

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
              {new Date(faculty.dateOfJoining).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyDetails;
