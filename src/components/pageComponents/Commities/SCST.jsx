import React from "react";
import Committee from "./Committee";

const SCSTCell = () => {
  const members = [
    {
      name: "Dr. Kuldeep P. Waidya",
      designation: "Principal",
      position: "Chairman",
      contact: "8983232009",
      email: "kpwaidya@gmail.com",
    },
    {
      name: "Ms. Jagruti R. Salve",
      designation: "Lecturer",
      position: "Member",
      contact: "9579172245",
      email: "jagrutisalve2000@gmail.com ",
    },
    {
      name: "Ms. Kajol B. Sonawane",
      designation: "Lecturer",
      position: "Member Secretary",
      contact: "7378628859",
      email: "kajolsonawanesmkvp@gmail.com ",
    },
    {
      name: "Mr. Aditya D.Sathe",
      designation: "Student Representative",
      position: "Member",
      contact: "7498903482",
      email: "adsathe379@gmail.com ",
    },
    {
      name: "Ms. Kajal R. Rokade",
      designation: "Student Representative",
      position: "Member",
      contact: "8605888455",
      email: "rokadek595@gmail.com ",
    },
    {
      name: "Ms. Gauri B. Vaydande",
      designation: "Student Representative",
      position: "Member",
      contact: "7385286035",
      email: "b45838998@gmail.com ",
    },
  ];

  return <Committee name="SC/ST Cell" members={members} />;
};

export default SCSTCell;
