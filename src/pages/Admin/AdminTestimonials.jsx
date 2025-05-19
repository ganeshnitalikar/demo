import React, { useState, useEffect } from "react";
import { api } from "../../config/api";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
  FaSpinner,
  FaSearch,
  FaUpload,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminTestimonials = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    quote: "",
    image: "",
    isActive: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchTestimonials();
  }, [navigate]);

  const fetchTestimonials = async () => {
    try {
      const response = await api.get("/api/testimonials/admin");
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      if (error.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPEG, PNG)");
      return;
    }

    setUploadingImage(true);
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
        setFormData((prev) => ({
          ...prev,
          image: uploadResponse.data.imageUrl,
        }));
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      if (error.status === 401) {
        navigate("/login");
      } else {
        toast.error(error.response?.data?.message || "Failed to upload image");
      }
    } finally {
      setUploadingImage(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingId) {
        await api.put(`/api/testimonials/${editingId}`, formData);
        toast.success("Testimonial updated successfully");
      } else {
        await api.post("/api/testimonials", formData);
        toast.success("Testimonial added successfully");
      }
      setFormData({
        name: "",
        batch: "",
        quote: "",
        image: "",
        isActive: true,
      });
      setEditingId(null);
      fetchTestimonials();
    } catch (error) {
      console.error("Error saving testimonial:", error);
      if (error.status === 401) {
        navigate("/login");
      } else {
        toast.error("Failed to save testimonial");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit
  const handleEdit = (testimonial) => {
    setFormData({
      name: testimonial.name,
      batch: testimonial.batch,
      quote: testimonial.quote,
      image: testimonial.image,
      isActive: testimonial.isActive,
    });
    setEditingId(testimonial._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?"))
      return;

    try {
      await api.delete(`/api/testimonials/${id}`);
      toast.success("Testimonial deleted successfully");
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      if (error.status === 401) {
        navigate("/login");
      } else {
        toast.error("Failed to delete testimonial");
      }
    }
  };

  // Handle toggle active status
  const handleToggleActive = async (id, currentStatus) => {
    try {
      await api.patch(`/api/testimonials/${id}/toggle`);
      toast.success("Testimonial status updated successfully");
      fetchTestimonials();
    } catch (error) {
      console.error("Error updating testimonial:", error);
      if (error.status === 401) {
        navigate("/login");
      } else {
        toast.error("Failed to update testimonial status");
      }
    }
  };

  // Filter testimonials based on search term
  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-emerald-600" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Manage Testimonials
      </h2>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search testimonials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Add/Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Batch & Designation
            </label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Testimonial
          </label>
          <textarea
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Image
          </label>
          <div className="flex items-center space-x-4">
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                {uploadingImage ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  <FaUpload className="mr-2" />
                )}
                Upload Image
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || uploadingImage}
          className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex items-center justify-center disabled:opacity-50"
        >
          {isSubmitting ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            <FaPlus className="mr-2" />
          )}
          {editingId ? "Update Testimonial" : "Add Testimonial"}
        </button>
      </form>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className={`bg-white rounded-lg shadow-md p-6 border ${
              testimonial.isActive ? "border-emerald-200" : "border-gray-200"
            } transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-emerald-200"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-emerald-600">{testimonial.batch}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {testimonial.quote}
            </p>
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(testimonial._id)}
                  className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-full transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
              <button
                onClick={() =>
                  handleToggleActive(testimonial._id, testimonial.isActive)
                }
                className={`${
                  testimonial.isActive ? "text-emerald-600" : "text-gray-400"
                } hover:text-emerald-800 p-2 hover:bg-emerald-50 rounded-full transition-colors`}
              >
                {testimonial.isActive ? (
                  <FaToggleOn size={24} />
                ) : (
                  <FaToggleOff size={24} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTestimonials;
