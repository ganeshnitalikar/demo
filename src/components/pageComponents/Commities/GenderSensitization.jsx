import React from "react";
import Committee from "./Committee";

const GenderSensitization = () => {
  const members = [
    {
      name: "Dr. Kuldeep P. Waidya",
      designation: "Principal",
      position: "Chairman",
      contact: "8983232009",
      email: "kpwaidya@gmail.com",
    },
    {
      name: "Ms. Hemlata G. Shinde",
      designation: "Management Representative",
      position: "Member",
      contact: "9922518418",
      email: "smkvpcop@gmail.com",
    },

    {
      name: "Ms. Shifa R. Shikalgar",
      designation: "Vice Principal",
      position: "Member",
      contact: "8999521024",
      email: "ssr.smkvpcop2023@gmal.com ",
    },
    {
      name: "Ms. Jagruti R. Salve",
      designation: "Lecturer",
      position: "Member Secretary",
      contact: "9579172245",
      email: "jagrutisalve2000@gmail.com ",
    },
    {
      name: "Ms. Ashwini N. Gadage",
      designation: "Assistant Professor",
      position: "Member",
      contact: "7057848048",
      email: "asg.smkvpcop@gmail.com ",
    },
    {
      name: "Ms. Shiba Dilawar Shaikh",
      designation: "Assistant Professor",
      position: "Member",
      contact: "7741081606",
      email: "ssd.smkvpcop@gmail.com ",
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
      name: "Ms. Sakshi K. Waghmare",
      designation: "Lecturer",
      position: "Member",
      contact: "9022414383",
      email: "sakshiwaghmare2425@gmail.com ",
    },
  ];

  return <Committee name="Gender Sensitization Cell" members={members} />;
};

export default GenderSensitization;
