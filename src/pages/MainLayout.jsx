import { Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ContactBar from "../components/Common/ContactBar";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import withFocusManagement from "../hocs/withFocusManagement";

// Import all components
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import ApplyNow from "./ApplyNow";
import InstituteAtGlance from "../components/pageComponents/About/InstituteAtGlance";
import DiplomaProgramme from "../components/pageComponents/Academics/Diploma";
import Overview from "../components/pageComponents/Academics/Overview";
import UndergraduateProgramme from "../components/pageComponents/Academics/Undergraduate";
import UniversityCalender from "../components/pageComponents/Academics/UniversityCalender";
import AdmissionProcess from "../components/pageComponents/Admissions/AdmissionProcess";
import Library from "../components/pageComponents/Library/Library";
import Events from "../components/pageComponents/Events/Events";
import FAQ from "../components/pageComponents/FAQ/FAQ";
import Awards from "../components/pageComponents/Awards/Awards";
import MandatoryDisclosure from "../components/Manadatory_discloure";
import PrincipalMessage from "../components/pageComponents/About/PrincipalMessage";
import PresidentMessage from "../components/pageComponents/About/PresidentMessage";
import SecretaryMessage from "../components/pageComponents/About/SecretaryMessage";
import Principal from "../components/pageComponents/Management/Principal";
import Faculty from "../components/pageComponents/Management/Faculty";
import FacultyDetail from "../components/pageComponents/Management/FacultyDetails";
import NonTeachingStaff from "../components/pageComponents/Management/NonTeachingStaff";
import GoverningBody from "../components/pageComponents/Management/GoverningBody";
import SCSTCell from "../components/pageComponents/Commities/SCST";
import AntiDescrimination from "../components/pageComponents/Commities/AntiDescrimination";
import AntiHarassement from "../components/pageComponents/Commities/AntiHarassement";
import GenderSensitization from "../components/pageComponents/Commities/GenderSensitization";
import TrainingPlacement from "../components/pageComponents/Commities/TrainingPlacement";
import StudentGrievance from "../components/pageComponents/Commities/StudentGrievience";
import AntiRagging from "../components/pageComponents/Commities/AntiRagging";
import NoPageFound from "./NoPageFound";

// Wrap all components with focus management
const HomeWithFocus = withFocusManagement(Home);
const AboutWithFocus = withFocusManagement(About);
const LoginWithFocus = withFocusManagement(Login);
const ApplyNowWithFocus = withFocusManagement(ApplyNow);
const InstituteAtGlanceWithFocus = withFocusManagement(InstituteAtGlance);
const DiplomaProgrammeWithFocus = withFocusManagement(DiplomaProgramme);
const OverviewWithFocus = withFocusManagement(Overview);
const UndergraduateProgrammeWithFocus = withFocusManagement(
  UndergraduateProgramme
);
const UniversityCalenderWithFocus = withFocusManagement(UniversityCalender);
const AdmissionProcessWithFocus = withFocusManagement(AdmissionProcess);
const LibraryWithFocus = withFocusManagement(Library);
const EventsWithFocus = withFocusManagement(Events);
const FAQWithFocus = withFocusManagement(FAQ);
const AwardsWithFocus = withFocusManagement(Awards);
const MandatoryDisclosureWithFocus = withFocusManagement(MandatoryDisclosure);
const PrincipalMessageWithFocus = withFocusManagement(PrincipalMessage);
const PresidentMessageWithFocus = withFocusManagement(PresidentMessage);
const SecretaryMessageWithFocus = withFocusManagement(SecretaryMessage);
const PrincipalWithFocus = withFocusManagement(Principal);
const FacultyWithFocus = withFocusManagement(Faculty);
const FacultyDetailWithFocus = withFocusManagement(FacultyDetail);
const NonTeachingStaffWithFocus = withFocusManagement(NonTeachingStaff);
const GoverningBodyWithFocus = withFocusManagement(GoverningBody);
const SCSTCellWithFocus = withFocusManagement(SCSTCell);
const AntiDescriminationWithFocus = withFocusManagement(AntiDescrimination);
const AntiHarassementWithFocus = withFocusManagement(AntiHarassement);
const GenderSensitizationWithFocus = withFocusManagement(GenderSensitization);
const TrainingPlacementWithFocus = withFocusManagement(TrainingPlacement);
const StudentGrievanceWithFocus = withFocusManagement(StudentGrievance);
const AntiRaggingWithFocus = withFocusManagement(AntiRagging);
const NoPageFoundWithFocus = withFocusManagement(NoPageFound);

const MainLayout = () => {
  const location = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Skip focusing for home route
    if (location.pathname === "/") return;

    if (mainContentRef.current) {
      // Focus the main content area when route changes
      mainContentRef.current.focus();
      mainContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <ContactBar />
      <Navbar />
      <main ref={mainContentRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomeWithFocus />} />
          <Route path="/about" element={<AboutWithFocus />} />
          <Route
            path="/about/institute-at-glance"
            element={<InstituteAtGlanceWithFocus />}
          />
          <Route
            path="/about/principal's-message"
            element={<PrincipalMessageWithFocus />}
          />
          <Route
            path="/about/president's-message"
            element={<PresidentMessageWithFocus />}
          />
          <Route
            path="/about/secretary's-message"
            element={<SecretaryMessageWithFocus />}
          />
          <Route path="/management/faculty" element={<FacultyWithFocus />} />
          <Route
            path="/management/principal"
            element={<PrincipalWithFocus />}
          />
          <Route
            path="management/faculty/details/:id"
            element={<FacultyDetailWithFocus />}
          />
          <Route
            path="/management/non-teaching-staff"
            element={<NonTeachingStaffWithFocus />}
          />
          <Route
            path="/management/governing-body"
            element={<GoverningBodyWithFocus />}
          />
          <Route path="/login" element={<LoginWithFocus />} />
          <Route path="/apply-now" element={<ApplyNowWithFocus />} />
          <Route
            path="/committees/training-&-placement"
            element={<TrainingPlacementWithFocus />}
          />
          <Route
            path="/committees/student-grievance"
            element={<StudentGrievanceWithFocus />}
          />
          <Route
            path="/committees/anti-ragging"
            element={<AntiRaggingWithFocus />}
          />
          <Route
            path="/committees/anti-descrimination-cell"
            element={<AntiDescriminationWithFocus />}
          />
          <Route
            path="/committees/gender-sensitization"
            element={<GenderSensitizationWithFocus />}
          />
          <Route
            path="/committees/anti-harassment"
            element={<AntiHarassementWithFocus />}
          />
          <Route
            path="/committees/sc-st-cell"
            element={<SCSTCellWithFocus />}
          />
          <Route
            path="/mandatory-disclosure"
            element={<MandatoryDisclosureWithFocus />}
          />
          <Route path="/academics/overview" element={<OverviewWithFocus />} />
          <Route
            path="/academics/d.pharm"
            element={<DiplomaProgrammeWithFocus />}
          />
          <Route
            path="/academics/b.pharm"
            element={<UndergraduateProgrammeWithFocus />}
          />
          <Route
            path="/academics/university-calender"
            element={<UniversityCalenderWithFocus />}
          />
          <Route
            path="/admissions/process"
            element={<AdmissionProcessWithFocus />}
          />
          <Route
            path="/admissions-process"
            element={<AdmissionProcessWithFocus />}
          />
          <Route path="/library" element={<LibraryWithFocus />} />
          <Route path="/events" element={<EventsWithFocus />} />
          <Route path="/faqs" element={<FAQWithFocus />} />
          <Route path="/awards" element={<AwardsWithFocus />} />
          <Route path="*" element={<NoPageFoundWithFocus />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
