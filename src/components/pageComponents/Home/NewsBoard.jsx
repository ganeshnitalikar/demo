import React, { useEffect, useState } from "react";
import { api } from "../../../config/api";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { MdFiberNew } from "react-icons/md";
import { motion } from "framer-motion";

const NewsBoard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/api/admin/latestnews");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const isNew = (date) => {
    const postedDate = new Date(date);
    const now = new Date();
    return (now - postedDate) / (1000 * 60 * 60) < 24;
  };

  return (
    <div className="bg-white py-12 border-4 border-red-200 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest News
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-12 bg-emerald-50 rounded-lg">
              <p className="text-gray-500 text-lg">No latest news available.</p>
            </div>
          ) : (
            <div className="space-y-4 ">
              {news.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100"
                >
                  <div className="p-6 bg-red-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                            {item.title}
                          </h3>
                          {isNew(item.postedAt) && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              <MdFiberNew className="mr-1" />
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiClock className="mr-1.5" />
                          {formatDistanceToNow(parseISO(item.postedAt))} ago
                        </div>
                      </div>
                      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FiArrowRight className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
