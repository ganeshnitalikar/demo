import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../../assets/images/img1.jpeg";
import img2 from "../../../assets/images/img2.jpeg";
import img3 from "../../../assets/images/img3.jpeg";
import img4 from "../../../assets/images/img4.jpeg";

const ImageCarousel = () => {
  const slides = [
    {
      image: img1,
      caption: "Welcome to Our College - Excellence in Education",
    },
    {
      image: img2,
      caption: "State-of-the-Art Laboratories & Research Facilities",
    },
    {
      image: img3,
      caption: "Vibrant Campus with Cultural & Sports Activities",
    },
    {
      image: img4,
      caption: "Library - A Hub of Knowledge & Resources",
    },
  ];

  return (
    <div className="w-[80%]  mx-auto p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg overflow-hidden w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-screen">
            <img
              src={slide.image}
              alt="College Slide"
              className="w-full h-150 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
              {slide.caption}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
