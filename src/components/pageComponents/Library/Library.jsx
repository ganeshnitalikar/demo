import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { api } from "../../../config/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Library = () => {
  const [libraryImages, setLibraryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibraryImages = async () => {
      try {
        const response = await api.get("/api/admin/images/library");
        if (response.data && Array.isArray(response.data)) {
          setLibraryImages(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setLibraryImages([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching library images:", error);
        setLibraryImages([]);
        setLoading(false);
      }
    };

    fetchLibraryImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          College Library
        </h1>

        {/* Image Carousel */}
        <div className="w-full mx-auto mb-12">
          {loading ? (
            <div className="animate-pulse bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-emerald-600 text-lg">Loading images...</p>
              </div>
            </div>
          ) : libraryImages.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              effect="fade"
              loop={true}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              {libraryImages.map((image, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="relative h-[500px]">
                    <img
                      src={image.url}
                      alt="Library"
                      className="w-full h-full object-fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        College Library
                      </h2>
                      <p className="text-lg opacity-90">
                        Discover our extensive collection of resources
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl h-[500px] flex items-center justify-center">
              <p className="text-emerald-600 text-lg">No images available</p>
            </div>
          )}
        </div>

        {/* Library Information */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            About Our Library
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Extensive Collection
                </h3>
                <p className="text-gray-600">
                  Our library boasts a vast collection of books, journals, and
                  digital resources covering various academic disciplines.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Digital Resources
                </h3>
                <p className="text-gray-600">
                  Access to online databases, e-books, and research papers to
                  support your academic journey.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Study Spaces
                </h3>
                <p className="text-gray-600">
                  Comfortable reading rooms and study areas designed to provide
                  the perfect environment for learning and research.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Library Hours */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            Library Hours
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">
                Monday - Friday
              </span>
              <span className="text-gray-600">8:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">Saturday</span>
              <span className="text-gray-600">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">Sunday</span>
              <span className="text-gray-600">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
