import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import principleImg from "../../../assets/principleImg.jpeg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const PrincipalMessage = () => {
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
                  src={principleImg}
                  alt="Principal"
                  className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Dr. Kuldeep Pundlik Waidya
              </h3>
              <p className="text-emerald-100 text-lg">
                M.Pharm, Ph.D. – Principal
              </p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Principal's Message
                </h2>
                <div className="relative">
                  <FaQuoteLeft className="text-emerald-200 text-4xl absolute -top-4 -left-4" />
                  <p className="text-lg text-gray-700 leading-relaxed pl-8 pr-8">
                    Welcome to Sahakar Maharshi Kisanrao Varal Patil College of
                    Pharmacy, where our mission is to develop competent
                    pharmacists who are both professionally skilled and socially
                    responsible. We have implemented several initiatives to
                    establish our college as a center of academic excellence in
                    pharmaceutical education.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4 pl-8 pr-8">
                    Our comprehensive approach includes quality teaching
                    methodologies, well-equipped laboratories, and a focus on
                    personality and communication skills development. We
                    encourage our students to engage in research, innovation,
                    and extracurricular activities to become well-rounded
                    professionals ready to contribute to the healthcare sector.
                  </p>
                  <FaQuoteRight className="text-emerald-200 text-4xl absolute -bottom-4 -right-4" />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    Our Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-800">
                        Academic Excellence
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Quality education with modern teaching methods
                      </p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-800">
                        Research & Innovation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Encouraging scientific exploration and discovery
                      </p>
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

export default PrincipalMessage;
