import ImageCarousel from "./ImageCarouselHomepage";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="lg:w-full mx-auto p-0 bg-red-500 m-0">
      <ImageCarousel />
      <div className=" p-4 flex justify-center items-center">
        <Link to="/admission">
          <button
            className=" 
        bg-blue-500
        p-2
        text-white 
        text-2xl
        font-bold
        textcenter
        hover:cursor-pointer
      "
          >
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
