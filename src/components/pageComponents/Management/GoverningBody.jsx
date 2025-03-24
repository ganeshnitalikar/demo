import React from "react";
import BreadCrumb from "../../Common/BreadCrumb";

const governingBodyMembers = [
  {
    name: "Mr. Rangnath Kisanrao Varal Patil",
    designation:
      "Hon. President, Shraddha Rural Medical Social Welfare & Educational Trust’s Nighoj",
    position: "Chairman",
  },
  {
    name: "Mr. Viraj Rangnath Varal Patil",
    designation:
      "Hon. Secretary, Shraddha Rural Medical Social Welfare & Educational Trust’s Nighoj",
    position: "Member",
  },
  {
    name: "Mrs. Neema Santosh Supekar",
    designation:
      "Hon. Member, Shraddha Rural Medical Social Welfare & Educational Trust’s Nighoj",
    position: "Member",
  },
  {
    name: "The Regional Officer & Director WRO, AICTE, Mumbai",
    designation: "AICTE Nominee",
    position: "Member",
  },
  {
    name: "Joint Director, RDTE, Nashik",
    designation: "DTE Nominee",
    position: "Member",
  },
  {
    name: "Dy. Secretary, RBTE, Chtrapatti Sambhajinagar",
    designation: "MSBTE Nominee",
    position: "Member",
  },
  {
    name: "Dr. Chintamani Ravi B.",
    designation: "Academician, Principal of Rajmata Pharmacy College Pune",
    position: "Member",
  },
  {
    name: "Mr. Zawar Govind B.",
    designation: "Industrialist, G.B. Health Care Beed.",
    position: "Member",
  },
  {
    name: "Miss. Shaikh Shiba Dilavar",
    designation: "Assistant Professor, S.M.K.V.P. College of Pharmacy, Nighoj",
    position: "Member",
  },
  {
    name: "Miss. Shikalgar Shifa Rafique",
    designation: "Vice Principal, S.M.K.V.P. College of Pharmacy, Nighoj",
    position: "Member",
  },
  {
    name: "Dr. Kuldeep Pundlik Waidya",
    designation: "Principal, S.M.K.V.P. College of Pharmacy, Nighoj",
    position: "Member Secretary",
  },
];

const GoverningBody = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <BreadCrumb />
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h2 className="text-4xl font-bold text-center text-neutral-700 mb-6">
          Governing Body
        </h2>

        {/* Governing Body Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 shadow-lg">
            <thead className="bg-neutral-500 text-white">
              <tr>
                <th className="p-3 border border-gray-300 text-left">Sr.No</th>
                <th className="p-3 border border-gray-300 text-left">Name</th>
                <th className="p-3 border border-gray-300 text-left">
                  Designation
                </th>
                <th className="p-3 border border-gray-300 text-left">
                  Position
                </th>
              </tr>
            </thead>
            <tbody>
              {governingBodyMembers.map((member, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border border-gray-300">{index + 1}</td>
                  <td className="p-3 border border-gray-300">{member.name}</td>
                  <td className="p-3 border border-gray-300">
                    {member.designation}
                  </td>
                  <td className="p-3 border border-gray-300 font-semibold">
                    {member.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GoverningBody;
