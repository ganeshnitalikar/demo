import React from "react";
import { Link } from "react-router-dom";
import rightLogo from "../../assets/rightLogo.png";
import leftLogo from "../../assets/leftLogo.png";

const CollegeBanner = () => {
  return (
    <>
      <div className="flex items-center justify-around w-full mx-auto bg-transparent p-5">
        <div className="left-logo">
          <img src={leftLogo} alt="left_logo" />
        </div>
        <div className="text-center">
          <h4 className="text-blue-950 text lg:text-2xl">
            Shraddha Rural Medical Social Welfare & Educational Trust’s
          </h4>
          <h1 className="text-red-900  font-bold lg:text-3xl">
            SAHAKAR MAHARSHI KISANRAO VARAL PATIL COLLEGE OF PHARMACY
          </h1>
          <h3 className="text-2xl font-bold text-blue-950">
            (D. Pharm. & B. Pharm.)
          </h3>
          <h3 className="text-xl text-blue-950 font-bold ">
            At/Post-Nighoj, Tal. Parner, Dist. Ahmednagar (MS)- 414 306{" "}
          </h3>
          <h4 className="text-md font-bold text-neutral-500">
            www.shraddhaedu.com| Email: smkvpcop@gmail.com{" "}
          </h4>
        </div>
        <div className="right-logo">
          <img src={rightLogo} alt="right_logo" />
        </div>
      </div>
      <div className="bg-amber-950 text-white text-center font-bold py-2">
        <h5>
          Approved by DTE, Govt. of Maharashtra | Regulated by PCI, New Delhi |
          Affiliated to DBATU, Lonere and MSBTE, Mumbai{" "}
        </h5>
        <h5>DTE : 5300 MSBTE : 1436 PCI :2056 </h5>
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
