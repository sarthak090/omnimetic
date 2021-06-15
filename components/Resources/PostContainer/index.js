import React from "react";
import Post from "./Post";
export default function index({ showFilter, totalPost }) {
  return (
    <div>
      {showFilter == false ? (
        ""
      ) : (
        <div className="my-8 flex gap-8">
          <select className="border-b-2 font-semibold border-gray-400  w-36 py-2 focus:outline-none">
            <option>Topic</option>
            <option>Topic</option>
          </select>

          <select className="border-b-2 font-semibold border-gray-400 flex w-36 py-2 focus:outline-none">
            <option>Resources</option>
            <option>Topic</option>
          </select>
        </div>
      )}

      {[0, 1, 2, 3].map((post) => (
        <Post />
      ))}
      <div className="flex justify-center my-8">
        <a href="/view-more">View More</a>
      </div>
    </div>
  );
}
