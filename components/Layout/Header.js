import React from "react";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header>
      <div className="hidden xl:block">
        <div className="top-right-gradient"></div>
      </div>
      {/* <div className="top-right-bckg"></div> */}
      {/* <div className="absolute top-0 right-0 ">
        <svg
          width="1116"
          height="1021"
          viewBox="0 0 1116 1021"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M144 -3.48275e-06L1116 -3.26628e-05L1116 739.5C1116 739.649 1115.93 739.789 1115.8 739.875L829.944 940.47C766.6 984.92 679.209 969.549 634.833 906.153L0.549988 0L144 -3.48275e-06Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="488.885"
              y1="-506.895"
              x2="1281.1"
              y2="624.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.171875" stop-color="#5338D2" />
              <stop offset="1" stop-color="#7D61FF" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      <Navbar />
    </header>
  );
}
