import ImageCarousel from "./ImageCarouselHomepage";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="lg:w-full mx-auto pt-10 bg-neutral-200 m-0">
      <ImageCarousel />
      <div className=" p-4 flex justify-center items-center">
        <Link to="/admission">
          <button
            className=" 
        bg-green-500
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
