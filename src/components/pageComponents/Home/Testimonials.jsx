import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon

const avatar = "https://i.pravatar.cc/150?img=1";
const testimonials = [
  {
    name: "Mr. Suyog Pate",
    batch: "2007 Batch - Regulatory Affairs Officer",
    quote:
      "I remember vividly and with great fondness my graduation from Dr. D. Y. Patil College of Pharmacy...",
    image: avatar,
  },
  {
    name: "Ms. Priya Sharma",
    batch: "2012 Batch - Clinical Research Associate",
    quote:
      "The institution provided me with excellent academic and research exposure, shaping my career in Clinical Research.",
    image: avatar,
  },
  {
    name: "Dr. Amit Verma",
    batch: "2010 Batch - Pharmacologist",
    quote:
      "The faculty and infrastructure helped me build a strong foundation in Pharmacology, which was crucial in my career.",
    image: avatar,
  },
];

const Testimonial = () => {
  return (
    <div className="border-4 border-blue-500 p-10 md:p-16 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center my-10 relative">
      {/* Left - Title & Description */}
      <div className="w-full md:w-1/3 p-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-600">Testimonials</h2>
        <p className="text-gray-700 mt-2">
          Hear from our alumni about their experiences and how the college
          shaped their careers.
        </p>
      </div>

      {/* Right - Testimonial Swiper Carousel */}
      <div className="w-full md:w-2/3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md w-full max-w-xs mx-auto text-center relative overflow-visible">
                <div className="flex justify-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-blue-500 bg-white"
                  />
                </div>
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.batch}</p>
                <FaQuoteLeft className="text-blue-400 text-2xl mx-auto mt-2" />
                <p className="text-gray-700 mt-3 text-sm">{t.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
