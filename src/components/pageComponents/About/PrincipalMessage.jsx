import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";
import principleImg from "../../../assets/principleImg.jpeg";

const PrincipalMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="shadow-lg max-w-4xl mx-auto text-center flex justify-center items-center w-full">
        <div className="w-[30%] bg-white p-8 mt-6 rounded-lg  min-h-full">
          <img
            src={principleImg}
            alt="Principle_img"
            className="max-h-200 w-auto "
          />
        </div>

        <div className="bg-white w-[70%] p-8 mt-6 rounded-lg  flex gap-2 flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-neutral-700 my-4">
            Principal’s Message
          </h2>
          <p className="text-lg italic text-justify">
            "Welcome to Sahakar Maharshi Kisanrao Varal Patil College of
            Pharmacy, where our mission is to develop competent pharmacists who
            are both professionally skilled and socially responsible. We have
            implemented several initiatives to establish our college as a center
            of academic excellence in pharmaceutical education. Our
            comprehensive approach includes quality teaching methodologies,
            well-equipped laboratories, and a focus on personality and
            communication skills development. We encourage our students to
            engage in research, innovation, and extracurricular activities to
            become well-rounded professionals ready to contribute to the
            healthcare sector."
          </p>
          <h3 className="mt-4 text-xl font-semibold">
            Dr. Kuldeep Pundlik Waidya
          </h3>
          <p className="text-gray-600">M.Pharm, Ph.D. – Principal</p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
