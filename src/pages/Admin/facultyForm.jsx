import { useState, useEffect } from "react";
import { api } from "../../config/api";

const FacultyForm = ({ initialData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    qualification: "",
    dateOfJoining: "",
    experience: "",
    email: "",
    mobile: "",
    photo: null,
    department: "bpharm", // default value
  });

  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const uploadToCloudinary = async () => {
    if (!formData.photo || typeof formData.photo === "string")
      return formData.photo;

    const data = new FormData();
    data.append("file", formData.photo);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);

    try {
      const res = await api.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_NAME
        }/image/upload`,
        data
      );
      return res.data.secure_url;
    } catch (error) {
      console.error("Image upload failed", error);
      alert("Image upload failed");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await uploadToCloudinary();
    if (!imageUrl) return;

    const submissionData = { ...formData, photo: imageUrl };

    if (initialData) {
      // If editing
      onUpdate(initialData._id, submissionData);
    } else {
      try {
        await api.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/faculty`,
          submissionData
        );
        alert("Faculty added successfully!");
      } catch (error) {
        console.error("Error submitting form", error);
        alert("Submission failed");
      }
    }
    onClose();
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">
        {initialData ? "Edit Faculty" : "Add Faculty"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="bpharm">B.Pharm</option>
          <option value="dpharm">D.Pharm</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            {initialData ? "Update Faculty" : "Submit"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyForm;
