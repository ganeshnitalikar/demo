import { FaGraduationCap, FaUsers, FaBook, FaTrophy } from "react-icons/fa";
import ImageCarousel from "./ImageCarouselHomepage";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: "Quality Education",
    description:
      "Committed to providing excellence in pharmaceutical education with experienced faculty and modern facilities.",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Diverse Community",
    description:
      "Join a vibrant community of future healthcare professionals from various backgrounds.",
  },
  {
    icon: <FaBook className="w-8 h-8" />,
    title: "Comprehensive Programs",
    description:
      "Offering a wide range of pharmacy programs designed to prepare you for healthcare excellence.",
  },
  {
    icon: <FaTrophy className="w-8 h-8" />,
    title: "Excellence in Achievement",
    description:
      "Consistently producing graduates who excel in pharmaceutical and healthcare fields.",
  },
];

const Hero = () => {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-200 to-green-600 -z-10"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to Sahakar Maharshi Kisanrao Varal Patil College of
                Pharmacy
              </h1>
              <p className="text-xl text-gray-600">
                Shaping the future of healthcare through quality pharmacy
                education and research.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-emerald-600 mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageCarousel />
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <Link to="/apply-now">
                <button className="w-full sm:w-auto px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Apply Now
                </button>
              </Link>
              <Link to="/about/institute-at-glance">
                <button className="w-full sm:w-auto px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
