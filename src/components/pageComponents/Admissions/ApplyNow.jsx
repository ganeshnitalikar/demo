import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    institute: "",
    specialization: "",
    captcha: null,
  });

  const [message, setMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle CAPTCHA verification
  const handleCaptcha = (value) => {
    setFormData({ ...formData, captcha: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.captcha) {
      setMessage({ type: "error", text: "Please verify the CAPTCHA." });
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      await axios.post("/api/admin/admissions", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setMessage({
        type: "success",
        text: "Application submitted successfully!",
      });
      setFormData({
        name: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        institute: "",
        specialization: "",
        captcha: null,
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: "Server Error. Please try again.",
        error,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-700">
        Apply Now
      </h2>

      {message && (
        <div
          className={`mt-4 p-3 text-center ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          } rounded`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Enter Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Enter Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Enter Mobile Number *
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Select State *
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Select City *
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        {/* Institute */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Select Institute Applying for *
          </label>
          <select
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Institute</option>
            <option value="D Y Patil Pharmacy">D Y Patil Pharmacy</option>
            <option value="D Y Patil Engineering">D Y Patil Engineering</option>
          </select>
        </div>

        {/* Specialization */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Select Specialization *
          </label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Specialization</option>
            <option value="Pharmaceutics">Pharmaceutics</option>
            <option value="Pharmaceutical Chemistry">
              Pharmaceutical Chemistry
            </option>
          </select>
        </div>

        {/* CAPTCHA */}
        <div className="flex flex-col items-center">
          <ReCAPTCHA
            sitekey="https://www.google.com/recaptcha/enterprise.js?render=6LeZYvwqAAAAAKdvjEkse5BVsh_UCWP9sgTUmTSj"
            onChange={handleCaptcha}
          />
        </div>

        {/* Terms & Submit */}
        <div className="flex items-center">
          <input type="checkbox" required className="mr-2" />
          <label className="text-sm text-gray-600">
            I agree to receive information regarding my submitted application by
            signing up on D Y Patil Pratishthan.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;
