import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import JobPost from "../pages/JobPost"; // Assuming you have this page
import Footer from "./Footer"; // Optionally, add a footer if you like

function Layout() {
  return (
    <Router>
      <div>
        <Header /> {/* Your navigation bar */}
        <main>
          {/* Routes for different pages */}
          <Switch>
            <Route exact path="/" component={Home} /> {/* Home page */}
            <Route path="/job-post" component={JobPost} /> {/* Job Post page */}
          </Switch>

          {/* About section - this is always visible below the home section */}
          <div className="min-h-screen bg-[#222831] text-white py-4">
            <About />
          </div>
        </main>
        <Footer /> {/* Optional footer */}
      </div>
    </Router>
  );
}

export default Layout;
