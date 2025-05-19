import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaSpinner } from "react-icons/fa";
import { api } from "../../../config/api";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("/api/testimonials");
        setTestimonials(response.data);
      } catch (error) {
        setError("Failed to load testimonials");
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="py-12 flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-emerald-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12">
        <div className="px-6">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="py-12">
        <div className="px-6">
          <p className="text-gray-600 text-center">
            No testimonials available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="px-6">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-6">
          What Our Alumni Say
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Hear from our distinguished alumni about their experiences and how the
          college shaped their successful careers in pharmacy.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={testimonials.length > 1}
          spaceBetween={24}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id} className="pb-12">
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-lg border border-emerald-100 text-center relative overflow-visible transition-all duration-300 hover:shadow-xl hover:border-emerald-200 h-full group">
                <div className="flex justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-emerald-500 bg-white shadow-lg object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold text-xl text-emerald-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-emerald-600 font-medium">
                  {testimonial.batch}
                </p>
                <FaQuoteLeft className="text-emerald-400 text-3xl mx-auto mt-4 mb-2 opacity-50" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
