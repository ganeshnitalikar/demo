import React from "react";
import Committee from "./Committee";

const StudentGrievance = () => {
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
      email: "ssr.smkvpcop2023@gmal.com ",
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
      name: "Ms. Rutuja R. Kawad",
      designation: "Lecturer",
      position: "Member",
      contact: "9834258778",
      email: "kawadrutuja@gmail.com ",
    },
    {
      name: "Ms. Sakshi K. Waghmare",
      designation: "Lecturer",
      position: "Member",
      contact: "9022414383",
      email: "sakshiwaghmare2425@gmail.com ",
    },
    {
      name: "Mr. Kartik D. Kawade",
      designation: "Student Representative",
      position: "Member",
      contact: "7447365540",
      email: "kawadekartik74@gmail.com ",
    },
    {
      name: "Ms.Semma K. Ugalmuhale",
      designation: "Student Representative",
      position: "Member",
      contact: "8669731123",
      email: "seemaugalmugale78@gmail.com ",
    },
    {
      name: "Mr. Sarthak S. Lanke",
      designation: "Student Representative",
      position: "Member",
      contact: "8767022930",
      email: "lankesarthak@gmail.com ",
    },
    {
      name: "Ms. Kajal S. More",
      designation: "Student Representative",
      position: "Member",
      contact: "9421080433",
      email: "kajalmore5877@gmail.com ",
    },
  ];

  return (
    <Committee
      name="Student Grievance & Mentoring Committee"
      members={members}
    />
  );
};

export default StudentGrievance;
