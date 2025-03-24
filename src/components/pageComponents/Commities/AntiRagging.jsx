import React from "react";
import Committee from "./Committee";

const AntiRagging = () => {
  const members = [
    {
      name: "Dr. Kuldeep P. Waidya",
      designation: "Principal",
      position: "Chairman",
      contact: "8983232009",
      email: "kpwaidya@gmail.com",
    },
    {
      name: "Ms. Reshma D Pawar",
      designation: "Assistant Professor",
      position: "Member Secretary",
      contact: "9096251204",
      email: "reshmapawardcop@gmail.com",
    },
    {
      name: "Mr. Shivaji N. Kadus",
      designation: "Police",
      position: "Member",
      contact: "8275200942",
      email: "-",
    },
    {
      name: "Mr. Dattaji Unawane",
      designation: "Journalist",
      position: "Member",
      contact: "9096276687",
      email: "-",
    },
    {
      name: "Ms. Kajol B. Sonawane ",
      designation: "Lecturer ",
      position: "Member",
      contact: "7378628859 ",
      email: "kajolsonawanesmkvp@gmail.co",
    },
    {
      name: "Mr. Kamalesh V. Pipada ",
      designation: "Office Superintendent ",
      position: "Member",
      contact: "9860772277 ",
      email: "Pipada.kamalesh@gmail.com ",
    },
    {
      name: "Mr. Santosh B. Supekar  ",
      designation: "Representative of Non-Teaching staff Member  ",
      position: "Member",
      contact: "7588694806 ",
      email: "santoshsupekar@gmail.com ",
    },
    {
      name: "Mr. Kiran V.  Kale  ",
      designation: "Student Representative ",
      position: "Member",
      contact: "8261005079  ",
      email: "kalekiran8261@gmail.com",
    },
    {
      name: "Miss. Anam S. Shaikh   ",
      designation: "Student Representative ",
      position: "Member",
      contact: "8605616425   ",
      email: "amansardarshaikh623@gmail.com ",
    },
    {
      name: "Mr. Swapnil Y Disale  ",
      designation: "Student Representative ",
      position: "Member",
      contact: "8080717849 ",
      email: "sopandisale11@gmail.com ",
    },
    {
      name: "Miss. Sakshi R Dhembara  ",
      designation: "Student Representative ",
      position: "Member",
      contact: "7219305647 ",
      email: "dhembarasakshi@gmail.com ",
    },
  ];

  return (
    <Committee name="Anti-Ragging Cell" members={members} isNumber={true} />
  );
};

export default AntiRagging;
