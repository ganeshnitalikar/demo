import React, { useEffect, useState } from "react";
import { api } from "../../../config/api";
import { FaDownload, FaCalendarAlt } from "react-icons/fa";
import BreadCrumb from "../../Common/BreadCrumb";

const UniversityCalender = () => {
  const [calender, setCalender] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalender = async () => {
      try {
        const response = await api.get(
          "/api/pdfdownload/university-calender.pdf",
          {
            responseType: "blob",
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setCalender(url);
      } catch (error) {
        console.error("Error fetching calender:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalender();
  }, []);

  const handleDownload = async () => {
    try {
      const response = await api.get(
        "/api/pdfdownload/university_calender.pdf",
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "University_Calendar.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
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

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <BreadCrumb />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-700 text-center mb-8">
          University Calendar
        </h2>

        {/* Static Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <FaCalendarAlt className="text-4xl text-emerald-600 mr-3" />
              <h2 className="text-2xl font-semibold text-emerald-600">
                Academic Calendar 2024-25
              </h2>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Important Dates
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                    <h4 className="font-semibold text-emerald-700">
                      Semester Start
                    </h4>
                    <p className="text-gray-600">June 2024</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                    <h4 className="font-semibold text-emerald-700">
                      Mid-Semester Exams
                    </h4>
                    <p className="text-gray-600">September 2024</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                    <h4 className="font-semibold text-emerald-700">
                      End Semester Exams
                    </h4>
                    <p className="text-gray-600">December 2024</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                    <h4 className="font-semibold text-emerald-700">
                      Winter Break
                    </h4>
                    <p className="text-gray-600">
                      December 2024 - January 2025
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                    <h4 className="font-semibold text-emerald-700">
                      Second Semester Start
                    </h4>
                    <p className="text-gray-600">January 2025</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                    <h4 className="font-semibold text-emerald-700">
                      Final Exams
                    </h4>
                    <p className="text-gray-600">April-May 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="mr-2" />
                Download University Calendar PDF
              </button>
              <button
                onClick={() => {
                  const downloadLink = `${
                    import.meta.env.VITE_BACKEND_URL
                  }/api/pdfdownload/university_calender.pdf`;
                  const whatsappUrl = `https://wa.me/?text=📅 University Calendar:\n\nDownload the calendar here: ${encodeURIComponent(
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
        {calender && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <iframe
              src={calender}
              className="w-full h-[800px] rounded-lg"
              title="University Calendar"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversityCalender;
