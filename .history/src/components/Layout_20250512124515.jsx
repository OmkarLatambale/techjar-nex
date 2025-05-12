import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default Layout;
