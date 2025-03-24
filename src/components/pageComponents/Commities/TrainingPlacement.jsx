import React from "react";
import Committee from "./Committee";

const TrainingPlacement = () => {
  const members = [
    {
      name: "Dr. Kuldeep P. Waidya",
      designation: "Principal",
      position: "Chairman",
      contact: "8983232009",
      email: "kpwaidya@gmail.com",
    },
    {
      name: "Ms. Shifa R. Shikalgar",
      designation: "Vice Principal",
      position: "Member",
      contact: "8999521024",
      email: "ssr.smkvpcop2023@gmal.com",
    },
    {
      name: "Ms. Ashwini N. Gadage",
      designation: "Assistant Professor",
      position: "Member",
      contact: "7057848048",
      email: "asg.smkvpcop@gmail.com",
    },
    {
      name: "Ms. Kiran S. Langhe",
      designation: "Lecturer",
      position: "Member",
      contact: "7620381138",
      email: "lk.smkvpcop@gmail.com",
    },
    {
      name: "Ms. Archana T. Chaskar",
      designation: "Assistant Professor",
      position: "TPO/Member Secretary",
      contact: "9503822674",
      email: "archanachaskar12@gmail.com",
    },
  ];

  return <Committee name="Training & Placement Cell" members={members} />;
};

export default TrainingPlacement;
