import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import secretaryImg from "../../../assets/secretaryImg.jpeg";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SecretaryMessage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 px-6 md:px-20">
      <BreadCrumb />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-12 gap-0">
            {/* Image Section */}
            <div className="md:col-span-4 bg-gradient-to-br from-purple-600 to-purple-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="mb-6">
                <img
                  src={secretaryImg}
                  alt="Secretary"
                  className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mr. Viraj Rangnath Varal
              </h3>
              <p className="text-purple-100 text-lg">Hon. Secretary</p>
              <div className="mt-6 space-y-3">
                <div className="bg-purple-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold">Core Values</h4>
                  <p className="text-purple-100 text-sm">
                    Integrity, Excellence, Innovation
                  </p>
                </div>
                <div className="bg-purple-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold">Commitment</h4>
                  <p className="text-purple-100 text-sm">
                    Student Success & Growth
                  </p>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="md:col-span-8 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <FaHandshake className="text-4xl text-purple-600" />
                  <h2 className="text-4xl font-bold text-gray-800">
                    Secretary's Message
                  </h2>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-purple-200 text-4xl absolute -top-4 -left-4" />
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Welcome to{" "}
                      <strong className="text-purple-700">
                        Sahakar Maharshi Kisanrao Varal Patil College of
                        Pharmacy
                      </strong>
                      , where we believe in nurturing not just pharmacists, but
                      future leaders in healthcare.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Our institution stands as a beacon of quality education,
                      combining traditional values with modern teaching
                      methodologies. We focus on creating an environment that
                      encourages innovation, research, and practical learning.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Through our dedicated faculty and state-of-the-art
                      facilities, we ensure that our students receive the best
                      possible education and training to excel in their careers.
                    </p>
                  </div>
                  <FaQuoteRight className="text-purple-200 text-4xl absolute -bottom-4 -right-4" />
                </div>

                <div className="mt-12 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Our Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4 flex items-start gap-3">
                      <FaAward className="text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-purple-800">
                          Academic Excellence
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Consistently high university rankings
                        </p>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 flex items-start gap-3">
                      <FaAward className="text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-purple-800">
                          Industry Integration
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Strong partnerships with leading companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecretaryMessage;
