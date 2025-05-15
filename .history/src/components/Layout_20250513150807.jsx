import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where Home, About, Jobpost, etc. are rendered */}
      </main>
    </>
  );
}

export default Layout;
