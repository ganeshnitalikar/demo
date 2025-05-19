import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import presidentImg from "../../../assets/presidentImg.jpeg";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaUniversity,
} from "react-icons/fa";
import { motion } from "framer-motion";

const PresidentMessage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-6 md:px-20">
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
            <div className="md:col-span-4 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="mb-6">
                <img
                  src={presidentImg}
                  alt="President"
                  className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mr. Rangnath Kisanrao Varal Patil
              </h3>
              <p className="text-blue-100 text-lg">Hon. President</p>
              <div className="mt-6 space-y-3">
                <div className="bg-blue-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold">Vision</h4>
                  <p className="text-blue-100 text-sm">
                    Empowering through Education
                  </p>
                </div>
                <div className="bg-blue-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold">Mission</h4>
                  <p className="text-blue-100 text-sm">
                    Excellence in Pharmacy Education
                  </p>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="md:col-span-8 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <FaUniversity className="text-4xl text-blue-600" />
                  <h2 className="text-4xl font-bold text-gray-800">
                    President's Message
                  </h2>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-blue-200 text-4xl absolute -top-4 -left-4" />
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Education serves as the cornerstone of a prosperous
                      career. At{" "}
                      <strong className="text-blue-700">
                        Sahakar Maharshi Kisanrao Varal Patil College of
                        Pharmacy
                      </strong>
                      , we are committed to providing a nurturing environment
                      that fosters both academic excellence and personal growth.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Our mission is to empower students, especially those from
                      rural backgrounds, by unlocking their innate potential and
                      contributing to national development.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      We strive to equip our students with the knowledge and
                      skills necessary to excel in the dynamic field of pharmacy
                      and to make meaningful contributions to society.
                    </p>
                  </div>
                  <FaQuoteRight className="text-blue-200 text-4xl absolute -bottom-4 -right-4" />
                </div>

                <div className="mt-12 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Key Initiatives
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <FaStar className="text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Rural Development
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Focusing on empowering rural students
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <FaStar className="text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Quality Education
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Maintaining high academic standards
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

export default PresidentMessage;
