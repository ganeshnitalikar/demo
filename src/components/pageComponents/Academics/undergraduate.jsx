import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";

const UndergraduateProgramme = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <BreadCrumb />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center">
          Undergraduate Programme
        </h2>
        <div className="mt-8 bg-blue-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold">
            Bachelor of Pharmacy (B.Pharm)
          </h3>
          <p className="mt-2 text-lg">
            The <strong>B.Pharm</strong> is a **4-year undergraduate degree**
            that prepares students for the pharmaceutical and healthcare
            industries. It covers **pharmacology, drug development, regulatory
            affairs,** and more, ensuring students develop expertise in
            **medicinal chemistry, drug formulation, and quality assurance**.
          </p>

          <div className="mt-4 space-y-4">
            <p>
              <strong>📅 Duration:</strong> 4 years (with 1-month industrial
              training)
            </p>
            <p>
              <strong>🎓 Eligibility:</strong> 10+2 (HSC) with PCB/PCM | 50%
              aggregate (45% for reserved categories)
            </p>
            <p>
              <strong>📝 Entrance Exam:</strong> MHT-CET / NEET (Preferred)
            </p>
            <p>
              <strong>🛑 Intake:</strong> 60 Seats
            </p>
            <p>
              <strong>🏛 Affiliation:</strong> Dr. Babasaheb Ambedkar
              Technological University, Lonere
            </p>
            <p>
              <strong>📚 Medium of Instruction:</strong> English
            </p>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 font-bold hover:underline">
              📌 Know More About B.Pharm Course →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduateProgramme;
