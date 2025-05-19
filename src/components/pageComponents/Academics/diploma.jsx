import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import { api } from "../../../config/api";
import { FaDownload, FaGraduationCap } from "react-icons/fa";

const DiplomaProgramme = () => {
  const [syllabus, setSyllabus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const response = await api.get("/api/pdfdownload/dpharma-syllabus.pdf");
        setSyllabus(response.data);
      } catch (error) {
        console.error("Error fetching syllabus:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabus();
  }, []);

  const handleDownload = async () => {
    try {
      const response = await api.get("/api/pdfdownload/dpharma-syllabus.pdf", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "DPharm_Syllabus.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!syllabus) {
    return (
      <div className="text-center py-12 bg-blue-50 rounded-lg">
        <p className="text-gray-500 text-lg">No syllabus available.</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <BreadCrumb />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Diploma Programme
        </h2>

        {/* Static Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <FaGraduationCap className="text-4xl text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-600">
                Diploma in Pharmacy (D.Pharm)
              </h2>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-600 leading-relaxed">
                The <strong>D.Pharm</strong> is a <b>2-year Diploma</b> that
                prepares students for the pharmaceutical and healthcare
                industries. It covers{" "}
                <b>
                  Pharmaceutics, Pharmacology, Law & Ethics, Pharmaceutical
                  Chemistry
                </b>{" "}
                and more, ensuring students develop expertise in pharmaceutical
                sciences and healthcare practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-700">Duration</h4>
                  <p className="text-gray-600">2 years</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-700">Eligibility</h4>
                  <p className="text-gray-600">10+2 (HSC) with PCB/PCM</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-700">Intake</h4>
                  <p className="text-gray-600">60 Seats</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-700">Affiliation</h4>
                  <p className="text-gray-600">
                    Maharashtra State Board of Technical Education, Mumbai
                    (MSBTE)
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-700">
                    Medium of Instruction
                  </h4>
                  <p className="text-gray-600">English</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-700">
                    Career Opportunities
                  </h4>
                  <p className="text-gray-600">
                    Hospital Pharmacies, Pharmaceutical Industries, Retail
                    Pharmacy
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="mr-2" />
                Download Syllabus PDF
              </button>
              <button
                onClick={() => {
                  const downloadLink = `${
                    import.meta.env.VITE_BACKEND_URL
                  }/api/pdfdownload/dpharma-syllabus.pdf`;
                  const whatsappUrl = `https://wa.me/?text=📚 D.Pharm Syllabus:\n\nDownload the syllabus here: ${encodeURIComponent(
                    downloadLink
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        {syllabus && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <iframe
              src={syllabus}
              className="w-full h-[800px] rounded-lg"
              title="D.Pharm Syllabus"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DiplomaProgramme;
