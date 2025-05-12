import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Jobpost from "./components/Jobpost";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Jobpost />
  );
}

export default App;
