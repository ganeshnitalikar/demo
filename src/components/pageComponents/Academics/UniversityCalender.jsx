import React from "react";

const UniversityCalendar = ({ university, course, pdfFile }) => {
  // Backend URL
  const backendUrl = "http://localhost:5000";

  const handleDownload = () => {
    window.open(`${backendUrl}/api/pdfdownload/${pdfFile}`, "_blank");
  };

  const handleShare = () => {
    const calendarLink = `${backendUrl}/api/pdfdownload/${pdfFile}`;
    const whatsappUrl = `https://wa.me/?text=📆 ${university} - ${course} University Calendar:\n\nDownload here: ${encodeURIComponent(
      calendarLink
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold text-blue-700">{university}</h2>
      <h3 className="text-xl text-gray-700 mt-2">
        {course} - University Calendar
      </h3>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Download Calendar
        </button>
        <button
          onClick={handleShare}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
           Share on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default UniversityCalendar;
