import React from "react";

const MandatoryDisclosure = () => {
  // Backend URL
  const backendUrl = "http://localhost:5000";
  const pdfFile = "SIF.pdf";

  const handleDownload = () => {
    window.open(`${backendUrl}/api/pdfdownload/${pdfFile}`, "_blank");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Mandatory Disclosure</h1>
      <p className="mb-4">
        Here are the details of the institution's mandatory disclosure. Please
        download the document for complete information.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;
