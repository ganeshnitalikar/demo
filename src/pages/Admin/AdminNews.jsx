import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNews,
  deleteNews,
  updateNews,
  addNews,
} from "../../redux/newsSlice";

const AdminNews = () => {
  const dispatch = useDispatch();
  const { news, status, error } = useSelector((state) => state.news);

  const [newTitle, setNewTitle] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedExpiry, setUpdatedExpiry] = useState("");

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      dispatch(deleteNews(id));
    }
  };

  const handleUpdate = (id) => {
    if (updatedTitle && updatedExpiry) {
      dispatch(
        updateNews({
          id,
          updatedData: { title: updatedTitle, expiryDate: updatedExpiry },
        })
      );
      setEditMode(null);
    }
  };

  const handleAddNews = () => {
    if (newTitle && expiryDate) {
      dispatch(addNews({ title: newTitle, expiryDate }));
      setNewTitle("");
      setExpiryDate("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Latest News Management
      </h2>

      {/* Add New News Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Add News</h3>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter News Title"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-blue-400 transition"
          />
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-blue-400 transition"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            onClick={handleAddNews}
          >
            Add
          </button>
        </div>
      </div>

      {/* News List */}
      {status === "loading" && (
        <p className="text-center text-gray-500">Loading...</p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center"
          >
            {editMode === item._id ? (
              <div className="flex flex-col md:flex-row gap-3 w-full">
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-blue-400 transition"
                />
                <input
                  type="date"
                  value={updatedExpiry}
                  onChange={(e) => setUpdatedExpiry(e.target.value)}
                  className="px-4 py-2 border rounded-md focus:outline-blue-400 transition"
                />
              </div>
            ) : (
              <p className="text-gray-800 font-medium">
                {item.title}{" "}
                <span className="text-gray-500">
                  {" "}
                  (Expires: {new Date(item.expiryDate).toLocaleDateString()})
                </span>
              </p>
            )}

            <div className="flex gap-2">
              {editMode === item._id ? (
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                  onClick={() => handleUpdate(item._id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => setEditMode(item._id)}
                >
                  Edit
                </button>
              )}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;
