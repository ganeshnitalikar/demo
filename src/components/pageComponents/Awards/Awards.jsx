import React from "react";
import { FaTrophy, FaMedal, FaAward, FaCertificate } from "react-icons/fa";

const Awards = () => {
  const awards = [
    {
      title: "Best Pharmacy College Award",
      year: "2023",
      description:
        "Recognized as the Best Pharmacy College in Maharashtra by the Pharmacy Council of India for excellence in education and research.",
      icon: FaTrophy,
      category: "Institutional",
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      description:
        "Awarded for outstanding research contributions in pharmaceutical sciences and innovative drug development projects.",
      icon: FaMedal,
      category: "Research",
    },
    {
      title: "Student Achievement Award",
      year: "2023",
      description:
        "Our students secured top positions in national-level pharmacy competitions and research paper presentations.",
      icon: FaAward,
      category: "Student",
    },
    {
      title: "Industry Collaboration Award",
      year: "2022",
      description:
        "Recognized for exceptional industry-academia collaboration and successful placement records.",
      icon: FaCertificate,
      category: "Industry",
    },
    {
      title: "Innovation in Teaching Award",
      year: "2023",
      description:
        "Awarded for implementing innovative teaching methodologies and digital learning platforms.",
      icon: FaTrophy,
      category: "Education",
    },
    {
      title: "Community Service Award",
      year: "2022",
      description:
        "Recognized for outstanding contributions to community health programs and public awareness campaigns.",
      icon: FaMedal,
      category: "Community",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          Awards & Recognitions
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full">
                        <Icon className="text-emerald-600 text-2xl" />
                      </div>
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {award.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                      {award.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{award.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Year: {award.year}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <p className="text-gray-600 text-center mb-6">
            These awards and recognitions reflect our continuous commitment to
            providing quality education, fostering research, and contributing to
            the pharmaceutical industry. We strive to maintain and exceed these
            standards in all our endeavors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                15+
              </div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                50+
              </div>
              <p className="text-gray-600">Awards & Recognitions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                1000+
              </div>
              <p className="text-gray-600">Successful Alumni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
