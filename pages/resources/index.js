import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/FooterAlt";
import Featured from "../../components/Resources/Featured";
import PostContainer from "../../components/Resources/PostContainer";
export default function resources() {
  return (
    <>
      <Header />

      <main className="container px-3 md:px-12 text-gray-800">
        <Featured />
        <PostContainer />
      </main>
      {/* <Footer /> */}
    </>
  );
}
