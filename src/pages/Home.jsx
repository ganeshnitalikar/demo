import Hero from "../components/pageComponents/Home/Hero";
import OurDepartments from "../components/pageComponents/Home/OurDepartments";
import Testimonials from "../components/pageComponents/Home/Testimonials";
import VisionMission from "../components/pageComponents/Home/VisionMission";
import Footer from "../components/Common/Footer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <OurDepartments />
      <Testimonials />
      <VisionMission />
    </div>
  );
};

export default Home;
