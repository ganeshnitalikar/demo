import React from "react";
import { useNavigate } from "react-router-dom";
// import principalImage from "../assets/DrNSVyawahare.jpg"; // Ensure the image is in the correct path

const Principal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      {/* Principal Card */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8 border border-gray-300">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            //add image here
            src="https://avatar.iran.liara.run/public"
            alt="Dr. Kuldeep Pundlik Waidya"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center mt-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Dr. Kuldeep Pundlik Waidya
          </h1>
          <h2 className="text-xl text-gray-600">Principal</h2>
        </div>

        {/* Message Section */}
        <div className="mt-6 text-gray-700 space-y-4 leading-relaxed text-justify">
          <p>Dear Students,</p>
          <p>
            Welcome to{" "}
            <strong>
              Sahakar Maharshi Kisanrao Varal Patil College Of Pharmacy D
              Pharmacy Nighoj
            </strong>
            . I heartily congratulate you for opting Pharmacy as a trajectory to
            shape up your professional career and personal lives.
          </p>
          <p>
            Pharmacy as a profession comprises an integral part of the health
            care system in India and across the globe. It has expanded multifold
            and set new trends with respect to the Indian education system and
            career opportunities. Pharmacy enjoys an egalitarian position
            amongst other professional courses, contributing to an increased
            demand for Pharmacists, rating India as the third-largest healthcare
            professional group in the world.
          </p>
          <p>Something about institute here</p>
          <p>
            The college is committed to providing quality education in the field
            of pharmacy. The college is equipped with state-of-the-art
            facilities and infrastructure to provide a conducive environment for
            learning. The college has a team of highly qualified and experienced
            faculty members who are dedicated to imparting quality education to
            the students. The college also provides a platform for students to
            develop their skills and knowledge through various co-curricular and
            extra-curricular activities. The college also provides placement
            assistance to the students to help them secure jobs in reputed
            organizations.
          </p>
          <p>
            I am confident that you will have a rewarding and fulfilling
            experience at the college. I wish you all the best for your future
            endeavors.
          </p>
          <p className="text-blue-700 font-bold text-center">
            strong Message Here
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-800">
            <strong>Principal E. Mail:</strong>{" "}
            <a
              href="mailto:kpwaidya@gmail.com "
              className="text-blue-500 hover:underline"
            >
              kpwaidya@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principal;
