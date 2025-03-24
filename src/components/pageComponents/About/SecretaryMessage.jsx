import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import secretaryImg from "../../../assets/secretaryImg.jpeg";
const SecretaryMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="shadow-lg max-w-4xl mx-auto text-center flex justify-center items-center w-full">
        {/* ✅ Secretary's Image */}
        <div className="w-[30%] bg-white p-8 mt-6 rounded-lg min-h-full">
          <img
            src={secretaryImg}
            alt="Secretary_img"
            className="max-h-200 w-auto"
          />
        </div>

        {/* ✅ Message Content */}
        <div className="bg-white w-[70%] p-8 mt-6 rounded-lg flex gap-2 flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-neutral-700 my-4">
            Secretary’s Message
          </h2>
          <p className="text-lg italic text-justify">
            "In today's rapidly evolving world, the role of pharmacists has
            become increasingly vital in healthcare. At{" "}
            <strong>
              Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy
            </strong>
            , we prioritize delivering quality pharmacy education that not only
            imparts technical knowledge but also emphasizes ethical practices
            and social responsibility.
          </p>
          <p className="text-lg italic text-justify">
            Our dedicated faculty and state-of-the-art facilities ensure that
            students receive a comprehensive education, preparing them to meet
            the challenges of the pharmaceutical industry and serve the
            community effectively."
          </p>

          {/* ✅ Signature & Name */}
          <h3 className="mt-4 text-xl font-semibold">
            Mr. Viraj Rangnath Varal Patil
          </h3>
          <p className="text-gray-600">Hon. Secretary</p>
        </div>
      </div>
    </section>
  );
};

export default SecretaryMessage;
