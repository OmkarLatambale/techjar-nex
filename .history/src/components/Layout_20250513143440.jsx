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
      <Outlet />
    </div>
  );
}

export default Layout;
