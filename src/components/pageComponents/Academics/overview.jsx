import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";

const AcademicsOverview = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700">Academics Overview</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Welcome to{" "}
          <strong>
            Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
          </strong>
          , a hub of excellence in pharmaceutical education, research, and
          innovation since <strong>2009-2010</strong>. Our mission is to nurture
          aspiring pharmacists with high-quality education, a state-of-the-art
          learning environment, and industry exposure.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700">
              1400+ Successful Alumni
            </h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700">
              12+ Advanced Labs
            </h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700">
              Highly Qualified Faculty
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsOverview;
