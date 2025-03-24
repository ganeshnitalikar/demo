import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";

const UndergraduateProgramme = () => {
  // Backend URL
  const backendUrl = "http://localhost:5000";

  const handleDownload = () => {
    window.open(`${backendUrl}/api/pdfdownload/bpharma-syllabus.pdf`, "_blank");
  };

  const handleShare = () => {
    const syllabusLink = `${backendUrl}/api/pdfdownload/bpharma-syllabus.pdf`;
    const whatsappUrl = `https://wa.me/?text=📚 B.Pharm Syllabus:\n\nDownload here: ${encodeURIComponent(
      syllabusLink
    )}`;
    window.open(whatsappUrl, "_blank");
  };

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
            The <strong>B.Pharm</strong> is a <b>4-year undergraduate degree</b>{" "}
            that prepares students for the pharmaceutical and healthcare
            industries. It covers{" "}
            <b>pharmacology, drug development, regulatory affairs,</b> and more,
            ensuring students develop expertise in{" "}
            <b>medicinal chemistry, drug formulation, and quality assurance</b>.
          </p>

          <div className="mt-4 space-y-4">
            <p>
              <strong>Duration:</strong> 4 years
            </p>
            <p>
              <strong>Eligibility:</strong> 10+2 (HSC) with PCB/PCM | 50%
              aggregate (45% for reserved categories)
            </p>
            <p>
              <strong>Entrance Exam:</strong> MHT-CET / NEET
            </p>
            <p>
              <strong>Intake:</strong> 60 Seats
            </p>
            <p>
              <strong>🏛 Affiliation:</strong> Dr. Babasaheb Ambedkar
              Technological University, Lonere
            </p>
            <p>
              <strong>📚 Medium of Instruction:</strong> English
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Download Syllabus
            </button>
            <button
              onClick={handleShare}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
            >
              Share on WhatsApp
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 font-bold hover:underline">
              Know More About B.Pharm Course →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduateProgramme;
