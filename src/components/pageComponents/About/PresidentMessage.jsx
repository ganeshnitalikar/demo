import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import presidentImg from "../../../assets/presidentImg.jpeg";

const PresidentMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="shadow-lg max-w-4xl mx-auto text-center flex justify-center items-center w-full">
        <div className="w-[30%] bg-white p-8 mt-6 rounded-lg min-h-full">
          <img
            src={presidentImg}
            alt="President_img"
            className="max-h-200 w-auto"
          />
        </div>

        <div className="bg-white w-[70%] p-8 mt-6 rounded-lg flex gap-2 flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-neutral-700 my-4">
            President’s Message
          </h2>
          <p className="text-lg italic text-justify">
            "Education serves as the cornerstone of a prosperous career. At{" "}
            <strong>
              Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
            </strong>
            , we are committed to providing a nurturing environment that fosters
            both academic excellence and personal growth. Our mission is to
            empower students, especially those from rural backgrounds, by
            unlocking their innate potential and contributing to national
            development.
          </p>
          <p className="text-lg italic text-justify">
            We strive to equip our students with the knowledge and skills
            necessary to excel in the dynamic field of pharmacy and to make
            meaningful contributions to society."
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            Mr. Rangnath Kisanrao Varal Patil
          </h3>
          <p className="text-gray-600">Hon. President</p>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
