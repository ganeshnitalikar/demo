import React from "react";
import { Link } from "react-router-dom";
import rightLogo from "../../assets/rightLogo.png";
import leftLogo from "../../assets/leftLogo.png";

const CollegeBanner = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full mx-auto bg-transparent p-2 md:p-5 gap-2 md:gap-4">
        {/* Left Logo */}
        <div className="left-logo w-16 md:w-auto">
          <img
            src={leftLogo}
            alt="left_logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Center Text */}
        <div className="text-center flex-1 px-2 md:px-4">
          <h4 className="text-blue-950 text-xs md:text-lg lg:text-2xl font-medium">
            Shraddha Rural Medical Social Welfare & Educational Trust's
          </h4>
          <h1 className="text-red-900 font-bold text-sm md:text-2xl lg:text-3xl mt-1 md:mt-2">
            SAHAKAR MAHARSHI KISANRAO VARAL PATIL COLLEGE OF PHARMACY
          </h1>
          <h3 className="text-sm md:text-2xl font-bold text-blue-950 mt-1 md:mt-2">
            (D. Pharm. & B. Pharm.)
          </h3>
          <h3 className="text-xs md:text-xl text-blue-950 font-bold mt-1 md:mt-2">
            At/Post-Nighoj, Tal. Parner, Dist. Ahmednagar (MS)- 414 306
          </h3>
          <h4 className="text-xs md:text-base font-bold text-neutral-500 mt-1 md:mt-2">
            www.shraddhaedu.com | Email: smkvpcop@gmail.com
          </h4>
        </div>

        {/* Right Logo */}
        <div className="right-logo w-16 md:w-auto">
          <img
            src={rightLogo}
            alt="right_logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Approval Banner */}
      <div className="bg-amber-950 text-white text-center font-bold py-1 md:py-2 px-2 md:px-4">
        <h5 className="text-xs md:text-base">
          Approved by DTE, Govt. of Maharashtra | Regulated by PCI, New Delhi |
          Affiliated to DBATU, Lonere and MSBTE, Mumbai
        </h5>
        <h5 className="text-xs md:text-base mt-0.5 md:mt-1">
          DTE : 5300 MSBTE : 1436 PCI :2056
        </h5>
      </div>
    </>
  );
};

export default CollegeBanner;
{
  /* <Link to="/" className=""> */
}
{
  /* logo */
}
{
  /* <img src={logo} alt="College Logo" className="object-fill" />
</Link>
<div className="container  w-full">
<h1 className="lg:text-5xl font-bold text-center text-black md:text-2xl">
  Sahakar Maharshi Kisanrao Varal Patil College of Pharmacy,Nighoj
</h1>
</div> */
}
