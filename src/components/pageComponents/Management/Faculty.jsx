import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../config/api";
import BreadCrumb from "../../Common/BreadCrumb";
import { FaUserTie, FaChalkboardTeacher } from "react-icons/fa";

const FacultyList = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await api.get("/api/admin/faculty");
        setFacultyList(response.data);
      } catch (error) {
        console.error("Error fetching faculty:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  const bPharmFaculty = facultyList.filter((f) => f.department === "bpharm");
  const dPharmFaculty = facultyList.filter((f) => f.department === "dpharm");

  const FacultySection = ({ faculty, title, icon: Icon }) => (
    <div className="mb-12 bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-8">
        <Icon className="text-4xl text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>

      {faculty.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No faculty members found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="pt-14 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.designation}
                </p>
                <p className="text-gray-600 mb-4">
                  Experience: {member.experience}
                </p>

                <button
                  onClick={() =>
                    navigate(`/management/faculty/details/${member._id}`)
                  }
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow hover:shadow-lg"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumb />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Teaching Faculty
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced and dedicated faculty members who are committed
            to providing quality education and guidance to our students.
          </p>
        </div>

        <FacultySection
          faculty={bPharmFaculty}
          title="B.Pharm Faculty"
          icon={FaUserTie}
        />
        <FacultySection
          faculty={dPharmFaculty}
          title="D.Pharm Faculty"
          icon={FaChalkboardTeacher}
        />
      </div>
    </div>
  );
};

export default FacultyList;
