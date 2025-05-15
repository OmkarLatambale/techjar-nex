import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Jobpost from "./Jobpost";
function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Jobpost />
    </div>
  );
}

export default Layout;
