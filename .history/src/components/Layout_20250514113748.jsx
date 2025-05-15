import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="min-h-screen bg-gray-100 py-16">
          <Home />{" "}
        </section>
        <section id="about" className="min-h-screen bg-gray-100 py-16">
          <About />{" "}
        </section>
      </main>
    </>
  );
}

export default Layout;
