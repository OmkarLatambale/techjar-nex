import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Jobpost from "./Jobpost";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
