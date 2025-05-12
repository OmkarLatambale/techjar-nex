import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default Layout;
