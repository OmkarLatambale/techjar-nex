import "./App.css";
import Header from "./components/Header"; // Import your Header component
import Home from "./pages/Home"; // Import the Home component
import About from "./pages/About"; // Import the About component
import Jobpost from "./components/Jobpost"; // Import the Jobpost component
import Login from "./components/Login"; // Import the Login component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="content">
        {/* Home section */}
        <Home />

        {/* About section - placed below the Home section */}
        <About />
      </div>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/jobpost" element={<Jobpost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
