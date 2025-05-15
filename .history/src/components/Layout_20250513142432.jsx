import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Header />
      <p>-- Layout is working --</p>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
