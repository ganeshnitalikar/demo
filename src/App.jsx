import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { initializeAuth } from "./redux/authSlice";
import MainLayout from "./pages/MainLayout";
import AdminLayout from "./pages/Admin";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <Router>
      <Toaster position="top-right" />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          {/* Main Website Routes with Navbar & Footer */}
          <Route path="/*" element={<MainLayout />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
