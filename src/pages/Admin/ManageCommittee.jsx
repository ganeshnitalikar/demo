import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMember, removeMember } from "../redux/committeeSlice";
import { useState } from "react";

export default function ManageCommittee() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const committee = useSelector((state) =>
    state.committee.committees.find((c) => c._id === id)
  );
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
  });

  if (!committee) return <h1>Loading...</h1>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage {committee.name}</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border px-2 py-1 mr-2"
          onChange={(e) => setMember({ ...member, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="border px-2 py-1 mr-2"
          onChange={(e) => setMember({ ...member, role: e.target.value })}
        />
        <button
          onClick={() => dispatch(addMember({ id, member }))}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add Member
        </button>
      </div>

      {committee.members.map((m) => (
        <div
          key={m._id}
          className="flex justify-between items-center border p-2 mb-2"
        >
          <span>
            {m.name} ({m.role})
          </span>
          <button
            onClick={() => dispatch(removeMember({ id, memberId: m._id }))}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
