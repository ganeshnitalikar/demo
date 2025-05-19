import React from "react";
import Hero from "../components/pageComponents/Home/Hero";
import OurDepartments from "../components/pageComponents/Home/OurDepartments";
import Testimonials from "../components/pageComponents/Home/Testimonials";
import VisionMission from "../components/pageComponents/Home/VisionMission";
import Footer from "../components/Common/Footer";
import NewsBoard from "../components/pageComponents/Home/NewsBoard";
import MetaTags from "../components/Common/MetaTags";

const Home = () => {
  return (
    <>
      <MetaTags
        title="Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy | Premier Pharmacy College in Ahmednagar"
        description="Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy in Nighoj, Parne, Ahmednagar offers quality pharmaceutical education with modern facilities and experienced faculty. Join us for a promising career in pharmacy."
        keywords="pharmacy college, pharmaceutical education, Ahmednagar pharmacy college, pharmacy courses, pharmaceutical sciences, pharmacy admission, pharmacy college in Maharashtra, Sahakar Maharshi Kisanrao Varal Patil College"
      />
      <div className="w-full min-h-screen bg-gradient-to-b from-emerald-200 via-white to-emerald-400">
        <div className="pt-0 md:pt-4">
          <Hero />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Main content column */}
            <div className="lg:col-span-9 space-y-6 md:space-y-8">
              {/* Welcome Section */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
                  Welcome to Sahakar Maharshi Kisanrao Varal Patil College of
                  Pharmacy
                </h1>
                <p className="text-gray-700 mb-4">
                  Located in the serene surroundings of Nighoj, Parne,
                  Ahmednagar, our college is dedicated to providing excellence
                  in pharmaceutical education. We offer state-of-the-art
                  facilities, experienced faculty, and a comprehensive
                  curriculum designed to prepare students for successful careers
                  in pharmacy.
                </p>
                <p className="text-gray-700">
                  Our institution is committed to fostering innovation,
                  research, and professional development in the field of
                  pharmaceutical sciences.
                </p>
              </div>

              {/* Departments section */}
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg border border-emerald-100">
                <OurDepartments />
              </div>

              {/* Vision Mission section - Full width */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg">
                <VisionMission />
              </div>

              {/* Testimonials section - Full width */}
              <div className="bg-gradient-to-br from-white via-emerald-50 to-white rounded-xl shadow-lg border border-emerald-100">
                <Testimonials />
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              {/* News board */}
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg border border-emerald-100">
                <NewsBoard />
              </div>

              {/* Quick Links section */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg text-white">
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <a
                      href="/apply-now"
                      className="block p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-white">
                        Admissions 2024
                      </h4>
                      <p className="text-sm text-emerald-100">
                        Apply now for upcoming academic year
                      </p>
                    </a>
                    <a
                      href="/research"
                      className="block p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-white">
                        Research Programs
                      </h4>
                      <p className="text-sm text-emerald-100">
                        Explore our research opportunities
                      </p>
                    </a>
                    <a
                      href="/events"
                      className="block p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-white">
                        Events & Workshops
                      </h4>
                      <p className="text-sm text-emerald-100">
                        Upcoming academic events
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Important Dates section */}
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg border border-emerald-100">
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-emerald-600 mb-3 md:mb-4">
                    Important Dates
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                      <div className="text-sm text-emerald-600 font-semibold">
                        March 15, 2024
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        Last Date for Applications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Submit your applications before the deadline
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                      <div className="text-sm text-emerald-600 font-semibold">
                        April 1, 2024
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        Entrance Exam
                      </h4>
                      <p className="text-sm text-gray-600">
                        Pharmacy entrance examination
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                      <div className="text-sm text-emerald-600 font-semibold">
                        April 15, 2024
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        Results Declaration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Entrance exam results will be announced
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
