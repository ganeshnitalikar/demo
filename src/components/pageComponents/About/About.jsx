import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";

const AboutUs = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700">About Us</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Shraddha Rural Medical Social Welfare And Educational Trust's
          <strong>
            {" "}
            Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
          </strong>
          , established in <strong>2009-2010</strong>, is dedicated to providing
          top-tier pharmaceutical education and research.
        </p>
        <p className="mt-4">
          Located in <strong>Nighoj, Parner, Ahmednagar</strong>, we offer a
          comprehensive learning environment with state-of-the-art facilities,
          expert faculty, and strong industry collaborations.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
