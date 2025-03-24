import React from "react";
import Committee from "./Committee";

const AntiDiscrimination = () => {
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
      position: "Member Secretary",
      contact: "8999521024",
      email: "ssr.smkvpcop2023@gmail.com",
    },

    {
      name: "Ms. Reshma D Pawar",
      designation: "Assistant Professor",
      position: "Member",
      contact: "9096251204",
      email: "reshmapawardcop@gmail.com ",
    },
    {
      name: "Ms. Shiba Dilawar Shaikh",
      designation: "Assistant Professor",
      position: "Member",
      contact: "7741081606",
      email: "ssd.smkvpcop@gmail.com ",
    },
    {
      name: "Mr. Ankit P Dahitule",
      designation: "Assistant Professor",
      position: "Member",
      contact: "9860963736",
      email: "ankitdhaitule2000@gmail.com ",
    },
    {
      name: "Ms. Supriya S. Gawade",
      designation: "Lecturer",
      position: "Member",
      contact: "7719082505",
      email: "sag.smkvpcop@gmail.com ",
    },
    {
      name: "Ms. Akanksha B. Kumbhar",
      designation: "Lecturer",
      position: "Member",
      contact: "7744903936",
      email: "akankshakumbhar09@gmail.com ",
    },
  ];

  return <Committee name="Anti-Discrimination Cell" members={members} />;
};

export default AntiDiscrimination;
