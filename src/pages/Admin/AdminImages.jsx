import { useState, useEffect } from "react";
import { api } from "../../config/api";
import toast from "react-hot-toast";

const AdminImages = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [sectionImages, setSectionImages] = useState({});
  const [initialLoad, setInitialLoad] = useState(true);
  const [activeTab, setActiveTab] = useState("gallery"); // Default to gallery tab

  const sections = ["gallery", "events", "campus", "laboratories", "library"];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesBySection = {};
        const promises = sections.map(async (section) => {
          try {
            const response = await api.get(`/api/admin/images/${section}`);
            imagesBySection[section] = response.data;
          } catch (error) {
            console.error(
              `Error fetching images for section ${section}:`,
              error
            );
            imagesBySection[section] = [];
          }
        });

        await Promise.all(promises);

        setSectionImages(imagesBySection);
        setInitialLoad(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Failed to fetch images");
        setInitialLoad(false);
      }
    };

    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError(null);
  };

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile || !selectedSection) {
      toast.error("Please select both a section and an image");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

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
        const saveResponse = await api.post("/api/admin/images", {
          url: uploadResponse.data.imageUrl,
          section: selectedSection,
        });

        if (saveResponse.data.success) {
          setSectionImages((prev) => ({
            ...prev,
            [selectedSection]: [
              ...(prev[selectedSection] || []),
              saveResponse.data.image,
            ],
          }));

          toast.success("Image uploaded successfully!");
          setSelectedFile(null);
          setSelectedSection("");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to upload image";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (section, imageId) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        const response = await api.delete(`/api/admin/images/${imageId}`);
        if (response.data.success) {
          setSectionImages((prev) => ({
            ...prev,
            [section]: prev[section].filter((img) => img._id !== imageId),
          }));
          toast.success("Image deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting image:", error);
        const errorMessage =
          error.response?.data?.message || "Failed to delete image";
        toast.error(errorMessage);
        setError(errorMessage);
      }
    }
  };

  const ImageGrid = ({ images }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {images.map((image) => (
        <div key={image._id} className="relative group aspect-square">
          <img
            src={image.url}
            alt="Gallery image"
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={() => handleDeleteImage(activeTab, image._id)}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ×
          </button>
        </div>
      ))}
      {images.length === 0 && (
        <div className="col-span-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">No images uploaded yet</p>
        </div>
      )}
    </div>
  );

  const SectionImages = ({ section }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sectionImages[section]?.map((image) => (
          <div key={image._id} className="relative group aspect-square">
            <img
              src={image.url}
              alt={`${section} image`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => handleDeleteImage(section, image._id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          </div>
        ))}
        {(!sectionImages[section] || sectionImages[section].length === 0) && (
          <div className="col-span-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No images uploaded yet</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Image Gallery Management
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Upload New Image</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Section
            </label>
            <select
              value={selectedSection}
              onChange={handleSectionChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Choose a section</option>
              {sections.map((section) => (
                <option key={section} value={section}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Section Tabs */}
      <div className="mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveTab(section)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeTab === section
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Image Display */}
      {initialLoad ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading images...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {activeTab === "gallery" ? (
            <ImageGrid images={sectionImages[activeTab] || []} />
          ) : (
            <SectionImages section={activeTab} />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminImages;
