import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNonTeachingStaff } from "../../../redux/nonTeachingStaff";

const NonTeachingStaff = () => {
  const dispatch = useDispatch();
  const { nonTeachingList, status } = useSelector(
    (state) => state.nonTeachingStaff
  );

  useEffect(() => {
    dispatch(fetchNonTeachingStaff());
  }, [dispatch]);

  return (
    <div className="h-full w-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Non-Teaching Staff
      </h1>
      <div className="flex justify-center">
        {status === "loading" ? (
          <p className="text-center">Loading staff details...</p>
        ) : status === "failed" ? (
          <p className="text-center text-red-500">
            Error loading staff details
          </p>
        ) : nonTeachingList.length === 0 ? (
          <p className="text-center text-gray-500">No staff found.</p>
        ) : (
          <table className="w-3/4 border-2 border-black text-center">
            <thead>
              <tr className="bg-gray-300">
                <th className="border-2 border-black p-2">Sr.</th>
                <th className="border-2 border-black p-2">Name</th>
                <th className="border-2 border-black p-2">Designation</th>
                <th className="border-2 border-black p-2">Qualification</th>
                <th className="border-2 border-black p-2">Experience</th>
                <th className="border-2 border-black p-2">Email</th>
                <th className="border-2 border-black p-2">Contact</th>
                <th className="border-2 border-black p-2">Date of Joining</th>
              </tr>
            </thead>
            <tbody>
              {nonTeachingList.map((staff, index) => (
                <tr key={staff._id}>
                  <td className="border-2 border-black p-2">{index + 1}</td>
                  <td className="border-2 border-black p-2">{staff.name}</td>
                  <td className="border-2 border-black p-2">
                    {staff.designation}
                  </td>
                  <td className="border-2 border-black p-2">
                    {staff.qualification}
                  </td>
                  <td className="border-2 border-black p-2">
                    {staff.experience}
                  </td>
                  <td className="border-2 border-black p-2">{staff.email}</td>
                  <td className="border-2 border-black p-2">{staff.mobile}</td>
                  <td className="border-2 border-black p-2">
                    {new Date(staff.dateOfJoining).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NonTeachingStaff;
