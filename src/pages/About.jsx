import React from "react";
import Footer from "../components/Common/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 via-white to-emerald-400">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
          About Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Our History
          </h2>
          <p className="text-gray-700 mb-6">
            Established with a vision to provide quality pharmaceutical
            education, Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
            has been a pioneer in pharmaceutical education in the Ahmednagar
            district. Located in the serene surroundings of Nighoj, Parne, our
            institution has been nurturing future pharmacists since its
            inception.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Location & Campus
          </h2>
          <p className="text-gray-700 mb-6">
            Our college is strategically located in Nighoj, Parne, Ahmednagar,
            providing a peaceful and conducive environment for learning. The
            campus is equipped with state-of-the-art facilities including modern
            laboratories, a well-stocked library, and advanced research
            facilities.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Academic Excellence
          </h2>
          <p className="text-gray-700 mb-6">
            We offer comprehensive pharmacy programs that combine theoretical
            knowledge with practical experience. Our curriculum is designed to
            meet the evolving needs of the pharmaceutical industry and
            healthcare sector.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6">
            To provide quality pharmaceutical education and research
            opportunities that prepare students for successful careers in
            pharmacy and healthcare. We aim to develop competent professionals
            who can contribute to the advancement of pharmaceutical sciences and
            patient care.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Experienced and dedicated faculty members</li>
            <li>Modern infrastructure and well-equipped laboratories</li>
            <li>Strong industry-academia collaboration</li>
            <li>Comprehensive placement support</li>
            <li>Research-oriented approach to education</li>
            <li>Focus on practical learning and skill development</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
