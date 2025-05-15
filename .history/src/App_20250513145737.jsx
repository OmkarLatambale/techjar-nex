import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobpost from "./components/Jobpost";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobpost" element={<Jobpost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
