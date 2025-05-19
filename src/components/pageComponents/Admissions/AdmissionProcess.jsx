import React from "react";
import { Link } from "react-router-dom";

const AdmissionProcess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          Admission Process
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            How to Apply
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Check Eligibility
                </h3>
                <p className="text-gray-600">
                  Review the eligibility criteria for your desired program.
                  Ensure you meet all the academic and other requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Prepare Documents
                </h3>
                <p className="text-gray-600">
                  Gather all necessary documents including academic transcripts,
                  identification proof, and other required certificates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Fill Application Form
                </h3>
                <p className="text-gray-600">
                  Complete the online application form with accurate information
                  and upload the required documents.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Pay Application Fee
                </h3>
                <p className="text-gray-600">
                  Submit the application fee through the available payment
                  methods.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-2">
                  Wait for Confirmation
                </h3>
                <p className="text-gray-600">
                  After submission, wait for the admission committee to review
                  your application. You will be notified about the next steps.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            Important Dates
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">
                Application Start Date
              </span>
              <span className="text-gray-600">1st June 2024</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">
                Last Date to Apply
              </span>
              <span className="text-gray-600">30th June 2024</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">
                Document Verification
              </span>
              <span className="text-gray-600">1st - 5th July 2024</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-medium text-emerald-700">
                Admission Confirmation
              </span>
              <span className="text-gray-600">10th July 2024</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/apply-now"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
