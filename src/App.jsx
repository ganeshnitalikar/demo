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
const PresidentMessage = lazy(() =>
  import("./components/pageComponents/About/PresidentMessage")
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
  import("./components/pageComponents/Academics/overview")
);
const DiplomaProgramme = lazy(() =>
  import("./components/pageComponents/Academics/diploma")
);
const UnderGraduateProgramme = lazy(() =>
  import("./components/pageComponents/Academics/undergraduate")
);
const UniversityCalender = lazy(() =>
  import("./components/pageComponents/Academics/UniversityCalender")
);

const Admissions = lazy(() => import("./pages/Admin/Admissions"));

// Admin
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const ProtectedRoute = lazy(() => import("./components/protectedRoute"));
const ApplyNow = lazy(() =>
  import("./components/pageComponents/Admissions/ApplyNow")
);

//Commitiee
const TrainingPlacement = lazy(() =>
  import("./components/pageComponents/Commities/TrainingPlacement")
);
const AntiRagging = lazy(() =>
  import("./components/pageComponents/Commities/AntiRagging")
);
const StudentGrievance = lazy(() =>
  import("./components/pageComponents/Commities/StudentGrievience")
);
const AntiDescrimination = lazy(() =>
  import("./components/pageComponents/Commities/AntiDescrimination")
);
const GenderSensitization = lazy(() =>
  import("./components/pageComponents/Commities/GenderSensitization")
);
const SCSTCell = lazy(() =>
  import("./components/pageComponents/Commities/SCST")
);
const AntiHarassement = lazy(() =>
  import("./components/pageComponents/Commities/AntiHarassement")
);

//manadatory discloure
const MandatoryDisclosure = lazy(() =>
  import("./components/pageComponents/Manadatory_discloure")
);

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
          <Route
            path="/about/president's-message"
            element={<PresidentMessage />}
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
            path="/academics/b.pharm"
            element={<UnderGraduateProgramme />}
          />
          <Route
            path="/academics/diploma-programmes"
            element={<DiplomaProgramme />}
          />

          <Route
            path="/academics/university-calender"
            element={
              <UniversityCalender
                course={"B.pharm"}
                university={""}
                pdfFile={"university_calender"}
              />
            }
          />

          <Route path="/academics/overview" element={<Overview />} />

          {/* Admissions Routes */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/apply-now" element={<ApplyNow />} />
          {/* Auth Route */}
          <Route path="/login" element={<Login />} />

          {/* Manadatory Discloure */}
          <Route
            path="/mandatory-disclosure"
            element={<MandatoryDisclosure />}
          />

          {/* Commitiee */}
          <Route
            path="/committees/training-&-placement"
            element={<TrainingPlacement />}
          />
          <Route path="/committees/anti-ragging" element={<AntiRagging />} />
          <Route
            path="/committees/student-grievance"
            element={<StudentGrievance />}
          />
          <Route
            path="/committees/anti-descrimination-cell"
            element={<AntiDescrimination />}
          />
          <Route path="/committees/sc-st-cell" element={<SCSTCell />} />
          <Route
            path="/committees/gender-sensitization"
            element={<GenderSensitization />}
          />
          <Route
            path="committees/anti-harassment"
            element={<AntiHarassement />}
          />

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
