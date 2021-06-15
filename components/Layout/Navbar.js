import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-semibold  px-8 py-4 ">
      <div>
        <Link href="/">
          <a href="/">
            <img src="/img/horizontal.png" alt="logo" />
          </a>
        </Link>
      </div>
      <div className="block md:hidden">
        <span className="w-6 h-0.5 rounded-xl mb-1 block bg-gray-500"></span>
        <span className="w-6 h-0.5 rounded-xl mb-1 block bg-gray-500"></span>
        <span className="w-6 h-0.5 rounded-xl mb-1 block bg-gray-500"></span>
      </div>
      <div className="hidden md:flex gap-8 text-gray-50">
        <div>
          <Link href="/resources">
            <a href="/resources">Resources</a>
          </Link>
        </div>
        <div>
          <Link href="/demo">
            <a
              href="/demo"
              className="px-4 border border-gray-400 py-2 rounded-sm"
            >
              Schedule Demo
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
