import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { api } from "../../config/api";
import {
  fetchNonTeachingStaff,
  addNonTeachingStaff,
  updateNonTeachingStaff,
} from "../../redux/nonTeachingStaff";
import { toast } from "react-hot-toast";

const AdminNonTeachingStaff = () => {
  const dispatch = useDispatch();
  const { nonTeachingList, status } = useSelector(
    (state) => state.nonTeachingStaff
  );

  const [formVisible, setFormVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [staffData, setStaffData] = useState({
    name: "",
    designation: "",
    qualification: "",
    experience: "",
    email: "",
    dateOfJoining: "",
    mobile: "",
    photo: null,
  });

  useEffect(() => {
    dispatch(fetchNonTeachingStaff());
  }, [dispatch, refresh]);

  const handleChange = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setStaffData({ ...staffData, photo: e.target.files[0] });
  };

  const uploadImage = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("image", file);

    try {
      // First upload the image
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
      let imageUrl = staffData.photo;

      // If photo is a File object, upload it
      if (staffData.photo instanceof File) {
        imageUrl = await uploadImage(staffData.photo);
        if (!imageUrl) {
          setUploading(false);
          return;
        }
      }

      const submissionData = { ...staffData, photo: imageUrl };

      if (isEditMode) {
        await dispatch(
          updateNonTeachingStaff({ id: currentId, staffData: submissionData })
        ).unwrap();
        toast.success("Staff member updated successfully");
      } else {
        await dispatch(
          addNonTeachingStaff({
            ...submissionData,
            id: nanoid(),
            srNo: nonTeachingList.length + 1,
          })
        ).unwrap();
        toast.success("Staff member added successfully");
      }

      setRefresh((prev) => !prev);
      resetForm();
    } catch (error) {
      console.error("Error saving staff member:", error);
      toast.error(
        error.response?.data?.message || "Failed to save staff member"
      );
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setStaffData({
      name: "",
      designation: "",
      qualification: "",
      experience: "",
      email: "",
      dateOfJoining: "",
      mobile: "",
      photo: null,
    });
    setIsEditMode(false);
    setCurrentId(null);
    setFormVisible(false);
  };

  const handleEdit = (staff) => {
    setStaffData({
      ...staff,
      dateOfJoining: staff.dateOfJoining
        ? new Date(staff.dateOfJoining).toISOString().split("T")[0]
        : "",
    });

    setCurrentId(staff._id);
    setIsEditMode(true);
    setFormVisible(true);
  };

  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      try {
        const response = await api.delete(`/api/admin/nonteachingstaff/${_id}`);
        if (response.data.success) {
          toast.success(
            response.data.message || "Staff member deleted successfully"
          );
          setRefresh((prev) => !prev);
        } else {
          toast.error(response.data.message || "Failed to delete staff member");
        }
      } catch (error) {
        console.error("Error deleting staff member:", error);
        toast.error(
          error.response?.data?.message || "Failed to delete staff member"
        );
      }
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Non-Teaching Staff Management
      </h2>

      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow-md transition-all"
      >
        {formVisible ? "Close Form" : "New Staff Member"}
      </button>

      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 my-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isEditMode ? "Edit Staff Member" : "Add Staff Member"}
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
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={staffData.name}
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
                    value={staffData.designation}
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
                    value={staffData.qualification}
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
                    value={staffData.experience}
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
                    value={staffData.email}
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
                    value={staffData.dateOfJoining}
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
                    value={staffData.mobile}
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
                    {staffData.photo && (
                      <img
                        src={
                          staffData.photo instanceof File
                            ? URL.createObjectURL(staffData.photo)
                            : staffData.photo
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

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading data</p>}

      {status === "succeeded" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {nonTeachingList.map((staff) => (
            <div
              key={staff._id}
              className="bg-gradient-to-bl bg-blue-200 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {staff.photo && (
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
              )}
              <h3 className="text-xl font-semibold text-center mb-2">
                {staff.name}
              </h3>
              <p className="text-gray-700 text-center mb-2">
                {staff.designation}
              </p>
              <p className="text-gray-600 text-center mb-2">
                {staff.qualification}
              </p>
              <p className="text-gray-600 text-center mb-2">
                Experience: {staff.experience}
              </p>
              <p className="text-gray-600 text-center mb-2">
                Email: {staff.email}
              </p>
              <p className="text-gray-600 text-center mb-2">
                Mobile: {staff.mobile}
              </p>
              <p className="text-gray-600 text-center mb-4">
                Joined: {new Date(staff.dateOfJoining).toLocaleDateString()}
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleEdit(staff)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(staff._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminNonTeachingStaff;
