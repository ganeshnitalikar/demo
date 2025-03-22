import React from "react";
import Breadcrumb from "../../Common/Breadcrumb";

const InstituteAtGlance = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <Breadcrumb />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          Institute at a Glance
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6 text-lg">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <p>
              <strong>Established:</strong> 2009-2010
            </p>
            <p>
              <strong>Courses:</strong> B.Pharm & D.Pharm
            </p>
            <p>
              <strong>Affiliated to:</strong> Dr. Babasaheb Ambedkar
              Technological University
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <p>
              <strong>Campus Area:</strong> 2.5 acres
            </p>
            <p>
              <strong>Library:</strong> 5,000+ books & journals
            </p>
            <p>
              <strong>Labs:</strong> 12 state-of-the-art laboratories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteAtGlance;
