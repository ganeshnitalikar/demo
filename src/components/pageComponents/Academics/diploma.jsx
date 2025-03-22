import React from "react";
import Breadcrumb from "../../Common/Breadcrumb";

const DiplomaProgramme = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <Breadcrumb />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center">
          Diploma Programme
        </h2>
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold">
            Diploma in Pharmacy (D.Pharm)
          </h3>
          <p className="mt-2 text-lg">
            The **D.Pharm** is a **2-year diploma course** designed to equip
            students with **foundational pharmaceutical knowledge, drug
            dispensing skills, and healthcare management expertise**. Graduates
            can work in **hospital pharmacies, pharmaceutical industries, and
            retail pharmacy chains**.
          </p>

          <div className="mt-4 space-y-4">
            <p>
              <strong>📅 Duration:</strong> 2 years (with hospital & industry
              training)
            </p>
            <p>
              <strong>🎓 Eligibility:</strong> 10+2 (HSC) with PCB/PCM
            </p>
            <p>
              <strong>🛑 Intake:</strong> 60 Seats
            </p>
            <p>
              <strong>🏛 Affiliation:</strong> Maharashtra State Board of
              Technical Education (MSBTE)
            </p>
            <p>
              <strong>📚 Medium of Instruction:</strong> English
            </p>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 font-bold hover:underline">
              📌 Know More About D.Pharm Course →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiplomaProgramme;
