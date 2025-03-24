import React from "react";
import Committee from "./Committee";

const AntiHarassement = () => {
  const members = [
    {
      name: "Dr. Kuldeep P. Waidya",
      designation: "Principal",
      position: "Chairman",
      contact: "8983232009",
      email: "kpwaidya@gmail.com ",
    },
    {
      name: "Ms. Shifa R. Shikalgar",
      designation: "Vice Principal",
      position: "Member",
      contact: "8999521024",
      email: "ssr.smkvpcop2023@gmal.com ",
    },
    {
      name: "Ms. Kiran S. Langhe",
      designation: "Lecturer",
      position: "Member",
      contact: "7820381138",
      email: "lk.smkvpcop@gmail.com ",
    },
    {
      name: "Ms. Supriya A. Gawade",
      designation: "Lecturer",
      position: "Member",
      contact: "7719082505",
      email: "sag.smkvpcop2023@gmail.com ",
    },
    {
      name: "Ms. Pratiksha R. Varal",
      designation: "Student Representative",
      position: "Member",
      contact: "9130326422",
      email: "varalpratiksha@gmail.com ",
    },
    {
      name: "Mr. Abhishek M. Avhad",
      designation: "Student Representative",
      position: "Member",
      contact: "9657763721",
      email: "abhishek.avhad121@gmail.com ",
    },
    {
      name: "Ms. Nikita R. Bhakare",
      designation: "Student Representative",
      position: "Member",
      contact: "7822854723",
      email: "nikitabhakre@gmail.com ",
    },
  ];
  return <Committee name={"Anti Harassment"} members={members} />;
};

export default AntiHarassement;
