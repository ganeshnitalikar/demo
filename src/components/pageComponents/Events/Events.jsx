import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { api } from "../../../config/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/api/admin/images/events");
        if (response.data && Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setEvents([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          College Events
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
          ) : events.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              effect="fade"
              loop={true}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              {events.map((event, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="relative h-[500px]">
                    <img
                      src={event.url}
                      alt="College Event"
                      className="w-full h-full object-fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {event.title || "College Event"}
                      </h2>
                      <p className="text-lg opacity-90">
                        {event.description || "Join us for this exciting event"}
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

        {/* Upcoming Events */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                  Annual Sports Day
                </h3>
                <p className="text-gray-600">
                  Join us for a day filled with sports, competitions, and fun
                  activities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                  Cultural Festival
                </h3>
                <p className="text-gray-600">
                  Experience the rich cultural diversity of our college through
                  performances and exhibitions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                  Career Fair
                </h3>
                <p className="text-gray-600">
                  Connect with top companies and explore career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((event) => (
              <div
                key={event}
                className="bg-emerald-50 rounded-lg overflow-hidden"
              >
                <div className="h-48 bg-emerald-200"></div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-emerald-700 mb-2">
                    Event {event}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
