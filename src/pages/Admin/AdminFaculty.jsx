import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { api } from "../../config/api";
import {
  fetchFaculty,
  addFaculty,
  updateFaculty,
} from "../../redux/facultySlice";
import { toast } from "react-hot-toast";

const AdminFaculty = () => {
  const dispatch = useDispatch();
  const { facultyList, status } = useSelector((state) => state.faculty);
  const [activeTab, setActiveTab] = useState("all");

  const [formVisible, setFormVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [facultyData, setFacultyData] = useState({
    name: "",
    designation: "",
    qualification: "",
    dateOfJoining: "",
    experience: "",
    email: "",
    mobile: "",
    photo: null,
    department: "bpharm",
  });

  useEffect(() => {
    dispatch(fetchFaculty());
  }, [dispatch, refresh]);

  const handleChange = (e) => {
    setFacultyData({ ...facultyData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFacultyData({ ...facultyData, photo: e.target.files[0] });
  };

  const uploadImage = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const uploadResponse = await api.post(
        "/api/admin/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (uploadResponse.data.success) {
        return uploadResponse.data.imageUrl;
      }
      return null;
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error(error.response?.data?.message || "Failed to upload image");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = facultyData.photo;

      if (facultyData.photo instanceof File) {
        imageUrl = await uploadImage(facultyData.photo);
        if (!imageUrl) {
          setUploading(false);
          return;
        }
      }

      const submissionData = {
        ...facultyData,
        photo: imageUrl,
        id: isEditMode ? currentId : nanoid(),
        srNo: isEditMode ? facultyData.srNo : facultyList.length + 1,
      };

      if (isEditMode) {
        const result = await dispatch(
          updateFaculty({
            id: currentId,
            facultyData: {
              ...submissionData,
              department: facultyData.department,
            },
          })
        ).unwrap();
        if (result) {
          toast.success("Faculty updated successfully");
          dispatch(fetchFaculty());
        }
      } else {
        const result = await dispatch(addFaculty(submissionData)).unwrap();
        if (result) {
          toast.success("Faculty added successfully");
          dispatch(fetchFaculty());
        }
      }

      setRefresh((prev) => !prev);
      resetForm();
    } catch (error) {
      console.error("Error saving faculty:", error);
      toast.error(error.response?.data?.message || "Failed to save faculty");
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setFacultyData({
      name: "",
      designation: "",
      qualification: "",
      dateOfJoining: "",
      experience: "",
      email: "",
      mobile: "",
      photo: null,
      department: "bpharm",
    });
    setIsEditMode(false);
    setCurrentId(null);
    setFormVisible(false);
  };

  const handleEdit = (faculty) => {
    setFacultyData({
      name: faculty.name,
      designation: faculty.designation,
      qualification: faculty.qualification,
      dateOfJoining: faculty.dateOfJoining
        ? new Date(faculty.dateOfJoining).toISOString().split("T")[0]
        : "",
      experience: faculty.experience,
      email: faculty.email,
      mobile: faculty.mobile,
      photo: faculty.photo,
      department: faculty.department || "bpharm",
    });
    setCurrentId(faculty._id);
    setIsEditMode(true);
    setFormVisible(true);
  };

  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this faculty?")) {
      try {
        const response = await api.delete(`/api/admin/faculty/${_id}`);
        if (response.data.success) {
          toast.success(
            response.data.message || "Faculty deleted successfully"
          );
          setRefresh((prev) => !prev);
        } else {
          toast.error(response.data.message || "Failed to delete faculty");
        }
      } catch (error) {
        console.error("Error deleting faculty:", error);
        toast.error(
          error.response?.data?.message || "Failed to delete faculty"
        );
      }
    }
  };

  const filteredFaculty = facultyList.filter((faculty) => {
    if (activeTab === "all") return true;
    return faculty.department === activeTab;
  });

  const FacultySection = ({ faculty }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faculty.map((member) => (
        <div
          key={member._id}
          className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200"
        >
          {member.photo && (
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-blue-500"
            />
          )}
          <h3 className="text-xl font-semibold text-center mb-2">
            {member.name}
          </h3>
          <p className="text-gray-700 text-center mb-2">{member.designation}</p>
          <p className="text-gray-600 text-center mb-2">
            {member.qualification}
          </p>
          <p className="text-gray-600 text-center mb-2">
            Experience: {member.experience}
          </p>
          <p className="text-gray-600 text-center mb-2">
            Department: {member.department === "bpharm" ? "B.Pharm" : "D.Pharm"}
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => handleEdit(member)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(member._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Faculty Management
      </h2>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All Faculty
        </button>
        <button
          onClick={() => setActiveTab("bpharm")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "bpharm"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          B.Pharm
        </button>
        <button
          onClick={() => setActiveTab("dpharm")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "dpharm"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          D.Pharm
        </button>
      </div>

      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow-md transition-all mb-6"
      >
        {formVisible ? "Close Form" : "Add New Faculty"}
      </button>

      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 my-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isEditMode ? "Edit Faculty" : "Add Faculty"}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-h-[80vh] overflow-y-auto pr-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    name="department"
                    value={facultyData.department}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="bpharm">B.Pharm</option>
                    <option value="dpharm">D.Pharm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={facultyData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={facultyData.designation}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    value={facultyData.qualification}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    value={facultyData.experience}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Joining
                  </label>
                  <input
                    type="date"
                    name="dateOfJoining"
                    value={facultyData.dateOfJoining}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={facultyData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    value={facultyData.mobile}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photo
                  </label>
                  <div className="flex items-center space-x-4">
                    {facultyData.photo && (
                      <img
                        src={
                          facultyData.photo instanceof File
                            ? URL.createObjectURL(facultyData.photo)
                            : facultyData.photo
                        }
                        alt="Preview"
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className={`px-4 py-2 rounded-md text-white font-medium ${
                    uploading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-colors`}
                >
                  {uploading
                    ? "Uploading..."
                    : isEditMode
                    ? "Update"
                    : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {status === "loading" && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {status === "failed" && (
        <div className="text-center text-red-500 mt-8">
          Error loading faculty data
        </div>
      )}

      {status === "succeeded" && (
        <div>
          {filteredFaculty.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              No faculty members found.
            </p>
          ) : (
            <FacultySection faculty={filteredFaculty} />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminFaculty;
