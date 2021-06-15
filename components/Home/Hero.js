import React from "react";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 mt-9">
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-4">
        <div className="text-blue-500">Early Bird Access</div>
        <div className="h-title text-2xl md:text-5xl font-bold ">
          Utility data simpler than ever before
        </div>
        <div className="h-desc text-gray-500 text-lg">
          Simplifying utility data access. Instant account linking using
          Omnimetic widget - access account details, monthly bills, and real
          time energy usage data.
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="btn-primary border  px-8 py-2 text-gray-50">
            Schedule Demo
          </button>
        </div>
      </div>
      <div className=" hidden md:flex  py-8  justify-center">
        <div className="h-img-cont h-72 sha">
          <img
            src="img/hero.png"
            className="h-full object-cover"
            alt="showcase"
          />
        </div>
      </div>
    </div>
  );
}
