import React from "react";

export default function Subscribe() {
  return (
    <div className="flex justify-center">
      <div className="my-8 bg-indigo-300 px-4 md:px-14 py-10 md:py-12 w-full rounded-lg">
        <p className="text-center text-lg md:text-2xl mb-4">
          Subscribe To Our Newsletter
        </p>
        <div className="w-full flex gap-4 flex-col md:flex-row md:justify-center">
          <input
            className="md:py-3 py-2 px-4 w-full md:w-80 md:mr-3 rounded-sm"
            placeholder="Your email here"
          />
          <button className="btn-primary text-white md:py-3 py-2 px-4 rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
