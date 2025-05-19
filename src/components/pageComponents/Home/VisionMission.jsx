import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <div className="py-12">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden group h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1491975474562-1f4e30bc9468')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
            </div>

            <div className="relative p-8 h-full flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <FaBullseye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-100 mb-6">
                Empowering Future Pharmacists – Provide a dynamic learning
                environment that nurtures professional competence, leadership,
                and ethical responsibility in pharmaceutical sciences.
              </p>
              <button className="self-start bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-300 transform hover:translate-x-2">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden group h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
            </div>

            <div className="relative p-8 h-full flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-100 mb-6">
                To be a center of excellence in pharmaceutical education,
                research, and innovation, shaping future pharmacists who
                contribute to global healthcare advancements with integrity,
                knowledge, and compassion.
              </p>
              <button className="self-start bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-300 transform hover:translate-x-2">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
