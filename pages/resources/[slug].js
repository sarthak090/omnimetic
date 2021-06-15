import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/FooterAlt";
import Nav from "../../components/Post/Nav";
import Subscribe from "../../components/Post/Subscribe";
import PostContainer from "../../components/Resources/PostContainer";
export default function Resource() {
  return (
    <>
      <Header />
      <main className="container md:px-32 px-3 text-gray-800">
        <div className="flex justify-center items-center w-full">
          <section className="grid grid-cols-3 gap-8 bg-gray-100  justify-center ">
            <div className="col-span-3 md:col-span-2 my-12 md:w-3/4">
              <p className="text-indigo-600">Topic</p>
              <div className="flex gap-1 my-4 items-center">
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">Full Name</p>
                </div>
              </div>
              <h1 className="text-3xl font-bold mt-4">
                Lorem Ipsum is simply dummy text
              </h1>
              <div className="block md:hidden my-2 shadow-2xl">
                <img src="/img/fplc.png" />
              </div>
              <div className="hidden md:block text-gray-500 my-6 text-xl md:text-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div className="hidden md:block animate-pulse  col-span-3 md:col-span-1 self-center">
              <img src="/img/fplc.png" />
            </div>
          </section>
        </div>
        <article className="my-4 text-xl text-gray-700 md:px-16">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="my-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </article>
        <Nav />
        <Subscribe />

        <section className="my-7">
          <p className="text-center text-2xl md:text-4xl"> More to Explore</p>
          <PostContainer showFilter={false} />
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
