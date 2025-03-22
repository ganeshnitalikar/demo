import React from "react";
import { nonTeachingStaffData } from "./nonTeachingStaffData";

const NonTeachingStaff = () => {
  return (
    <div className="h-full w-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Non-Teaching Staff
      </h1>
      <div className="flex justify-center">
        <table className="w-3/4 border-2 border-black text-center">
          <thead>
            <tr className="bg-gray-300">
              <th className="border-2 border-black p-2">Sr.</th>
              <th className="border-2 border-black p-2">Name</th>
              <th className="border-2 border-black p-2">Designation</th>
              <th className="border-2 border-black p-2">Qualification</th>
              <th className="border-2 border-black p-2">Contact</th>
              <th className="border-2 border-black p-2">Date of Joining</th>
            </tr>
          </thead>
          <tbody>
            {nonTeachingStaffData.map((staff, index) => (
              <tr key={staff.id}>
                <td className="border-2 border-black p-2">{index + 1}</td>
                <td className="border-2 border-black p-2">{staff.name}</td>
                <td className="border-2 border-black p-2">
                  {staff.designation}
                </td>
                <td className="border-2 border-black p-2">
                  {staff.qualification}
                </td>
                <td className="border-2 border-black p-2">{staff.mobile}</td>
                <td className="border-2 border-black p-2">
                  {staff.dateOfJoining}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NonTeachingStaff;
