import React from "react";

const VisionMission = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[400px]">
      {/* Mission Section */}
      <div
        className="w-full md:w-1/2 relative flex flex-col justify-center items-center text-white text-center px-6 py-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1491975474562-1f4e30bc9468')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="mt-4 text-lg max-w-md">
            Empowering Future Pharmacists – Provide a dynamic learning
            environment that nurtures professional competence, leadership, and
            ethical responsibility in pharmaceutical sciences.
          </p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
            Read More
          </button>
        </div>
      </div>

      {/* Vision Section */}
      <div
        className="w-full md:w-1/2 relative flex flex-col justify-center items-center text-white text-center px-6 py-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Vision</h2>
          <p className="mt-4 text-lg max-w-md">
            To be a center of excellence in pharmaceutical education, research,
            and innovation, shaping future pharmacists who contribute to global
            healthcare advancements with integrity, knowledge, and compassion.
          </p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
