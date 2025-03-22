import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const CollegeBanner = () => {
  return (
    <div className="flex items-center justify-between w-full mx-auto bg-amber-200 p-5">
      <Link to="/" className="">
        {/* logo */}
        <img src={logo} alt="College Logo" className="object-fill" />
      </Link>
      <div className="container  w-full">
        <h1 className="lg:text-5xl font-bold text-center text-black md:text-2xl">
          Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy,Nighoj
        </h1>
      </div>
    </div>
  );
};

export default CollegeBanner;
