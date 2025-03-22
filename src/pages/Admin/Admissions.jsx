import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdmissions,
  addAdmission,
  deleteAdmission,
} from "../../redux/admissionSlice";

const Admissions = () => {
  const dispatch = useDispatch();
  const { admissions } = useSelector((state) => state.admissions);
  const [student, setStudent] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchAdmissions());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdmission(student));
    setStudent({ name: "", email: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Manage Admissions</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          type="text"
          placeholder="Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add
        </button>
      </form>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map((adm) => (
            <tr key={adm._id}>
              <td className="border p-2">{adm.name}</td>
              <td className="border p-2">{adm.email}</td>
              <td className="border p-2">
                <button
                  onClick={() => dispatch(deleteAdmission(adm._id))}
                  className="bg-red-500 text-white p-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admissions;
