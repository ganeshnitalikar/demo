import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import {
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const AdminAdmissions = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingApplication, setEditingApplication] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/admin/admissions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setApplications(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setError(error.response?.data?.message || "Error fetching applications");
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/api/admin/admissions/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      fetchApplications();
    } catch (error) {
      console.error("Error updating application status:", error);
      setError(
        error.response?.data?.message || "Error updating application status"
      );
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`${API_BASE_URL}/api/admin/admissions/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        fetchApplications();
      } catch (error) {
        console.error("Error deleting application:", error);
        setError(error.response?.data?.message || "Error deleting application");
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${API_BASE_URL}/api/admin/admissions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setEditingApplication(id);
      setEditFormData(response.data);
    } catch (error) {
      console.error("Error fetching application details:", error);
      setError(
        error.response?.data?.message || "Error fetching application details"
      );
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/api/admin/admissions/${editingApplication}`,
        editFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setEditingApplication(null);
      setEditFormData(null);
      fetchApplications();
    } catch (err) {
      console.error("Error updating application:", err);
      setError(err.response?.data?.message || "Error updating application");
    }
  };

  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredApplications = applications.filter((application) => {
    const matchesStatus =
      activeTab === "all" || application.status === activeTab;
    const matchesSearch =
      application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.mobile.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admission Applications</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Applications
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "pending"
              ? "bg-yellow-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("approved")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "approved"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Approved
        </button>
        <button
          onClick={() => setActiveTab("rejected")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "rejected"
              ? "bg-red-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Rejected
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredApplications.map((application) => (
          <div
            key={application._id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            {editingApplication === application._id ? (
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={editFormData.mobile}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Education
                    </label>
                    <input
                      type="text"
                      name="education"
                      value={editFormData.education}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingApplication(null);
                      setEditFormData(null);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {application.name}
                    </h3>
                    <p className="text-gray-600">{application.email}</p>
                    <p className="text-gray-600">{application.mobile}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Education</h4>
                    <p>{application.education}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">10th Details</h4>
                    <p>Percentage: {application.tenthPercentage}%</p>
                    <p>Passing Year: {application.tenthPassingYear}</p>
                    <p>School: {application.tenthSchoolName}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">12th Details</h4>
                    <p>Percentage: {application.twelfthPercentage}%</p>
                    <p>Passing Year: {application.twelfthPassingYear}</p>
                    <p>College: {application.twelfthCollegeName}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Application Date</h4>
                    <p>
                      {new Date(
                        application.applicationDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(application._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
                  >
                    <FaEdit className="mr-2" />
                    Edit
                  </button>
                  {application.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          handleStatusUpdate(application._id, "approved")
                        }
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
                      >
                        <FaCheck className="mr-2" />
                        Approve
                      </button>
                      <button
                        onClick={() =>
                          handleStatusUpdate(application._id, "rejected")
                        }
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
                      >
                        <FaTimes className="mr-2" />
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(application._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
                  >
                    <FaTrash className="mr-2" />
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAdmissions;
