import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginAdmin({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/admin/dashboard"); // Redirect after successful login
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold">Admin Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 my-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-full bg-blue-600 text-white p-2 rounded mt-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
