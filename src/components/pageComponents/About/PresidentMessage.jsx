import React from "react";
import presidentImage from "../../assets/president.jpg"; // Add an image of the president

const PresidentMessage = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* ✅ President's Image */}
        <div className="relative w-full">
          <img
            src={presidentImage}
            alt="President"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* ✅ Message Content */}
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            President's Message
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            "Education serves as the cornerstone of a prosperous career. At{" "}
            <strong>
              Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
            </strong>
            , we are committed to providing a nurturing environment that fosters
            both academic excellence and personal growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our mission is to empower students, especially those from rural
            backgrounds, by unlocking their innate potential and contributing to
            national development. We strive to equip our students with the
            knowledge and skills necessary to excel in the dynamic field of
            pharmacy and to make meaningful contributions to society."
          </p>

          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Mr. Rangnath Kisanrao Varal Patil
            </h3>
            <p className="text-gray-600 text-lg">Hon. President</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
