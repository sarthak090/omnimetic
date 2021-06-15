import React from "react";
import Link from "next/link";
export default function post() {
  return (
    <div className="flex justify-center w-full my-8 ">
      <section className="grid grid-cols-3     justify-center ">
        <div className="col-span-3 mt-4 flex flex-col md:flex-row justify-between items-center px-4">
          <div>
            <p className="text-indigo-600">Topic</p>
            <div className="flex md:hidden  items-center gap-2 my-4 self-end">
              <div className="w-8 h-8 md:w-12  md:h-12 animate-pulse bg-gray-400 rounded-full"></div>
              <div>
                <p className="font-semibold text-sm ">Full Name</p>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Lorem Ipsum is simply dummy text
            </h1>
          </div>
          <div className="hidden  md:flex  items-center gap-2 my-4 self-end">
            <div className="w-12 animate-pulse h-12 bg-gray-400 rounded-full"></div>
            <div>
              <p className="font-semibold">Full Name</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-center flex-col px-4 mt-4">
          <div className="md:hidden  animate-pulse flex flex-col justify-center">
            <img src="/img/plc.png" />
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
        <div className="hidden col-span-1 animate-pulse md:flex flex-col justify-center">
          <img src="/img/plc.png" />
        </div>
      </section>
      {/* <section className="flex">
        <div>
          <p className="text-indigo-600">Topic</p>
          <h1 className="text-3xl font-bold mt-4">
            Lorem Ipsum is simply dummy text
          </h1>
          <div className="text-gray-500 my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>
        </div>
        <div>
          <div className="flex  items-center gap-2 my-4 self-end">
            <div className="w-12 animate-pulse h-12 bg-gray-400 rounded-full"></div>
            <div>
              <p className="font-semibold">Full Name</p>
            </div>
          </div>
          <div className="col-span-1 animate-pulse flex flex-col justify-center">
            <img src="img/plc.png" />
          </div>
        </div>
      </section> */}
    </div>
  );
}
