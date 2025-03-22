import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ContactBar from "./components/Common/ContactBar";

// Home
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Common/Navbar"));
const Footer = lazy(() => import("./components/Common/Footer"));

//About
const About = lazy(() => import("./components/pageComponents/About/About"));
const InstituteAtGlance = lazy(() =>
  import("./components/pageComponents/About/InstituteAtGlance")
);
const PrincipalMessage = lazy(() =>
  import("./components/pageComponents/About/PrincipalMessage")
);

// Management

const Principal = lazy(() =>
  import("./components/pageComponents/Management/Principal")
);
const Faculty = lazy(() =>
  import("./components/pageComponents/Management/Faculty")
);
const FacultyDetail = lazy(() =>
  import("./components/pageComponents/Management/FacultyDetails")
);
const NonTeachingStaff = lazy(() =>
  import("./components/pageComponents/Management/NonTeachingStaff")
);

//Academics
const Overview = lazy(() =>
  import("./components/pageComponents/Academics/Overview")
);
const DiplomaProgramme = lazy(() =>
  import("./components/pageComponents/Academics/Diploma")
);
const UnderGraduateProgramme = lazy(() =>
  import("./components/pageComponents/Academics/UnderGraduate")
);

const Admissions = lazy(() => import("./pages/Admin/Admissions"));

// Admin
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const ProtectedRoute = lazy(() => import("./components/protectedRoute"));

//No page found
const NoPageFound = lazy(() => import("./pages/NoPageFound"));

function App() {
  return (
    <Router>
      <ContactBar />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/about/institute-at-glance"
            element={<InstituteAtGlance />}
          />
          <Route
            path="/about/principal's-message"
            element={<PrincipalMessage />}
          />
          {/* Management Route */}
          <Route path="/management/faculty" element={<Faculty />} />
          <Route path="/management/principal" element={<Principal />} />
          <Route path="management/faculty/:id" element={<FacultyDetail />} />
          <Route
            path="/management/non-teaching-staff"
            element={<NonTeachingStaff />}
          />
          {/* Academics Routes */}
          <Route path="/academics" element={<div>Academics</div>} />
          <Route
            path="/academics/under-graduate-programme"
            element={<UnderGraduateProgramme />}
          />
          <Route
            path="/academics/diploma-programmes"
            element={<DiplomaProgramme />}
          />

          <Route path="/academics/overview" element={<Overview />} />

          {/* Departments Routes */}
          {/* Auth Route */}
          <Route path="/login" element={<Login />} />
          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/admissions"
            element={
              <ProtectedRoute>
                <Admissions />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
