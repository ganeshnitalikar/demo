import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <Link to="/admin/admissions">
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Admissions
        </button>
      </Link>

      <button
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
