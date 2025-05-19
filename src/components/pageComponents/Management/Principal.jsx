import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaGraduationCap,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";
import principalImg from "../../../assets/principleImg.jpeg";

const Principal = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16 px-6 md:px-20">
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
            <div className="md:col-span-4 bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="mb-6">
                <img
                  src={principalImg}
                  alt="Dr. Kuldeep Pundlik Waidya"
                  className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Dr. Kuldeep Pundlik Waidya
              </h3>
              <p className="text-emerald-100 text-lg">Principal</p>
              <div className="mt-6 space-y-3">
                <div className="bg-emerald-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold">Expertise</h4>
                  <p className="text-emerald-100 text-sm">
                    Pharmaceutical Sciences & Research
                  </p>
                </div>
                <div className="bg-emerald-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold">Experience</h4>
                  <p className="text-emerald-100 text-sm">
                    15+ Years in Academia
                  </p>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="md:col-span-8 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <FaGraduationCap className="text-4xl text-emerald-600" />
                  <h2 className="text-4xl font-bold text-gray-800">
                    Principal's Message
                  </h2>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="text-emerald-200 text-4xl absolute -top-4 -left-4" />
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Dear Students,
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Welcome to{" "}
                      <strong className="text-emerald-700">
                        Sahakar Maharshi Kisanrao Varal Patil College of
                        Pharmacy
                      </strong>
                      . I heartily congratulate you for opting Pharmacy as a
                      trajectory to shape up your professional career and
                      personal lives.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                      Pharmacy as a profession comprises an integral part of the
                      health care system in India and across the globe. It has
                      expanded multifold and set new trends with respect to the
                      Indian education system and career opportunities. Pharmacy
                      enjoys an egalitarian position amongst other professional
                      courses, contributing to an increased demand for
                      Pharmacists, rating India as the third-largest healthcare
                      professional group in the world.
                    </p>
                  </div>
                  <FaQuoteRight className="text-emerald-200 text-4xl absolute -bottom-4 -right-4" />
                </div>

                <div className="mt-12 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                    Our Commitment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-lg p-4 flex items-start gap-3">
                      <FaAward className="text-emerald-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-emerald-800">
                          Quality Education
                        </h4>
                        <p className="text-gray-600 text-sm">
                          State-of-the-art facilities and infrastructure
                        </p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 flex items-start gap-3">
                      <FaHandshake className="text-emerald-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-emerald-800">
                          Student Development
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Focus on skills and knowledge enhancement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                    Contact Information
                  </h3>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:kpwaidya@gmail.com"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        kpwaidya@gmail.com
                      </a>
                    </p>
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

export default Principal;
