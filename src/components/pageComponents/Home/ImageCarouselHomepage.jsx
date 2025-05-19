import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useState, useEffect } from "react";
import { api } from "../../../config/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ImageCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get("/api/admin/gallery");
        const images = response.data.map((image) => ({
          image: image.url,
          caption: image.caption || "College Image",
        }));
        setSlides(images);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="w-full mx-auto">
        <div className="animate-pulse bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl h-[500px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-emerald-600 text-lg">Loading images...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="w-full mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 text-center">
          <p className="text-emerald-600 text-lg">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={true}
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative h-[500px]">
              <img
                src={slide.image}
                alt="College Slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {slide.caption}
                </h2>
                <p className="text-lg opacity-90">
                  Discover excellence in education at our institution
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
