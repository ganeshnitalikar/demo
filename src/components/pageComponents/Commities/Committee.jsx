import React from "react";

const Committee = ({ name, members, isNumber = false }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        {name}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-2 border border-gray-300">#</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Designation</th>
              <th className="p-2 border border-gray-300">Position</th>
              <th className="p-2 border border-gray-300">Contact</th>
              <th className="p-2 border border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border border-gray-300">{index + 1}</td>
                <td className="p-2 border border-gray-300">{member.name}</td>
                <td className="p-2 border border-gray-300">
                  {member.designation}
                </td>
                <td className="p-2 border border-gray-300">
                  {member.position}
                </td>
                <td className="p-2 border border-gray-300">
                  {member.contact || "N/A"}
                </td>
                <td className="p-2 border border-gray-300">
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-500"
                    >
                      {member.email}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isNumber && (
          <p className="text-2xl text-center text-red-500 my-4">
            Toll Free Number Anti Ragging : 1800-180-5522
          </p>
        )}
      </div>
    </div>
  );
};

export default Committee;
