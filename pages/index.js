import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Footer from "../components/Layout/FooterAlt";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="container text-gray-800 px-4 md:px-12">
        <Hero />
        {/* <div className="relative">
          <div className="about-left-gradient"></div>
        </div> */}
        <About />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
