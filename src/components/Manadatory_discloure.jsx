import React, { useEffect, useState } from "react";
import { api } from "../config/api";
import { FaDownload } from "react-icons/fa";

const MandatoryDisclosure = () => {
  const [disclosure, setDisclosure] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDisclosure = async () => {
      try {
        const response = await api.get("/api/pdfdownload/SIF.pdf");
        setDisclosure(response.data);
      } catch (error) {
        console.error("Error fetching disclosure:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisclosure();
  }, []);

  const handleDownload = async () => {
    try {
      const response = await api.get("/api/pdfdownload/SIF.pdf", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Mandatory_Disclosure.pdf");
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
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!disclosure) {
    return (
      <div className="text-center py-12 bg-emerald-50 rounded-lg">
        <p className="text-gray-500 text-lg">No disclosure available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Mandatory Disclosure
        </h1>

        {/* Static Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
                About Mandatory Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As per the guidelines of the All India Council for Technical
                Education (AICTE), we are required to disclose certain
                information about our institution. This disclosure includes
                details about our infrastructure, faculty, facilities, and other
                important information that helps students make informed
                decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Key Information Disclosed
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Institution Details and Infrastructure</li>
                <li>Faculty Information and Qualifications</li>
                <li>Programs Offered and Intake Capacity</li>
                <li>Facilities and Resources</li>
                <li>Placement Statistics</li>
                <li>Research and Development Activities</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="mr-2" />
                Download Mandatory Disclosure PDF
              </button>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <iframe
            src={disclosure}
            className="w-full h-[800px] rounded-lg"
            title="Mandatory Disclosure"
          />
        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;
