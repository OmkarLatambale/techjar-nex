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
        <section id="home">
          <Home />{" "}
        </section>
        <section id="about">
          <About />{" "}
        </section>
      </main>
    </>
  );
}

export default Layout;
