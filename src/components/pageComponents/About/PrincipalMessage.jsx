import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";

const PrincipalMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          Principal’s Message
        </h2>
        <div className="bg-white p-8 mt-6 rounded-lg shadow-lg">
          <p className="text-lg italic">
            "We strive to empower students with in-depth pharmaceutical
            knowledge, research skills, and a strong ethical foundation,
            ensuring they contribute meaningfully to healthcare."
          </p>
          <h3 className="mt-4 text-xl font-semibold">
            Dr. Kuldeep Pundlik Waidya
          </h3>
          <p className="text-gray-600">M.Pharm, Ph.D. – Principal</p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
