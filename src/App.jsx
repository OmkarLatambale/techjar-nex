import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./components/Login";
import Jobpost from "./components/Jobpost";
import Contact from "./pages/Contact";
import VendorDashboard from "./components/VendorDashboard";
import VendorJobInbox from "./components/VendorJobInbox";
import StudentList from "./components/StudentList";
import SubVendorDashboard from "./components/SubVendorDashboard";
import SubVendorList from "./components/SubVendorList";
import FileUpload from "./components/FileUpload";
import Reports from "./components/Reports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
     <ToastContainer position="top-center" autoClose={2000}  />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobpost" element={<Jobpost />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/subvendor-dashboard" element={<SubVendorDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/vendor-jobs" element={<VendorJobInbox />} />
        <Route path="/subvendor-list" element={<SubVendorList />} />
        <Route path="/vendor-reports" element={<Reports />} />
        <Route path="/upload" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
