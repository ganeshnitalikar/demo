import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import useFocusOnMount from "../hooks/useFocusOnMount";

const ApplyNow = () => {
  const formRef = useFocusOnMount();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    education: "",
    tenthPercentage: "",
    tenthPassingYear: "",
    tenthSchoolName: "",
    twelfthPercentage: "",
    twelfthPassingYear: "",
    twelfthCollegeName: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setStatus((prev) => ({ ...prev, error: null }));
  };

  const getErrorMessage = (error) => {
    if (error.response) {
      const errorData = error.response.data;

      // Handle validation errors
      if (errorData.errors) {
        return `Please correct the following issues:\n${errorData.errors.join(
          "\n"
        )}`;
      }

      // Handle duplicate email error
      if (errorData.message?.includes("already registered")) {
        return `This email address (${formData.email}) has already been used for an application. 
        
Please try one of the following:
1. Use a different email address
2. Contact the admissions office if you need to update your existing application`;
      }

      return (
        errorData.message ||
        "An error occurred while submitting your application."
      );
    }

    // Handle network errors
    if (error.message === "Network Error") {
      return "Unable to connect to the server. Please check your internet connection and try again.";
    }

    return "An unexpected error occurred. Please try again later.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await axios.post(`${API_BASE_URL}/api/admissions/apply`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setStatus({
        loading: false,
        success: true,
        error: null,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        education: "",
        tenthPercentage: "",
        tenthPassingYear: "",
        tenthSchoolName: "",
        twelfthPercentage: "",
        twelfthPassingYear: "",
        twelfthCollegeName: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: getErrorMessage(error),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={formRef}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Admission Application Form
            </h2>
            <p className="text-blue-100 text-center mt-2">
              Please fill out all the required information below
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {status.success && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg">Application submitted successfully!</p>
                </div>
                <p className="text-sm mt-1">
                  We will review your application and get back to you soon.
                </p>
              </div>
            )}

            {status.error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaExclamationCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700 whitespace-pre-line font-medium">
                      {status.error}
                    </p>
                    {status.error.includes("already been used") && (
                      <div className="mt-2 text-sm text-red-600">
                        <p className="font-medium">Need help?</p>
                        <ul className="list-disc list-inside mt-1">
                          <li>
                            Check your email for previous application
                            confirmation
                          </li>
                          <li>
                            Contact admissions office at admissions@college.edu
                          </li>
                          <li>
                            Use a different email address if you want to submit
                            a new application
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaUser className="mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Education *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGraduationCap className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 10th Details Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaSchool className="mr-2 text-blue-600" />
                  10th Standard Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage *
                    </label>
                    <input
                      type="number"
                      name="tenthPercentage"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passing Year *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="tenthPassingYear"
                        value={formData.tenthPassingYear}
                        onChange={handleChange}
                        min="2000"
                        max={new Date().getFullYear()}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Name *
                    </label>
                    <input
                      type="text"
                      name="tenthSchoolName"
                      value={formData.tenthSchoolName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 12th Details Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaSchool className="mr-2 text-blue-600" />
                  12th Standard Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage *
                    </label>
                    <input
                      type="number"
                      name="twelfthPercentage"
                      value={formData.twelfthPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passing Year *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="twelfthPassingYear"
                        value={formData.twelfthPassingYear}
                        onChange={handleChange}
                        min="2000"
                        max={new Date().getFullYear()}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College Name *
                    </label>
                    <input
                      type="text"
                      name="twelfthCollegeName"
                      value={formData.twelfthCollegeName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 ${
                    status.loading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {status.loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
