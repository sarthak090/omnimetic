import React from "react";
import Link from "next/link";
export default function Featured() {
  return (
    <div className="flex justify-center w-full mt-8">
      <section className="grid grid-cols-3 border md:border-none shadow-2xl  border-gray-300 rounded-lg gap-8   justify-center ">
        <div className="animate-pulse col-span-3 flex justify-center md:col-span-1">
          <img src="img/fplc.png" className="h-auto" />
        </div>
        <div className="col-span-3 md:col-span-2 md:my-12 md:w-3/4 px-3 py-3 md:py-0">
          <p className="text-indigo-600">Topic</p>
          <h1 className="text-3xl font-bold md:mt-4">
            Lorem Ipsum is simply dummy text
          </h1>
          <div className="flex gap-1 md:gap-4 my-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div>
              <p className="font-semibold">Full Name</p>
              <p className="italic">subtitle</p>
            </div>
          </div>
          <div className="text-gray-500 my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>

          <div>
            <Link href="/resources/1">
              <a href="/resources/1" className="text-indigo-500 font-semibold">
                Read More {">"}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
