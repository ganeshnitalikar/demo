import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const { data } = useSelector((state) => state.college);

  return (
    <section id="about" className="p-8">
      <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
      <p className="text-center text-gray-600">{data?.aboutText}</p>
    </section>
  );
};

export default About;
