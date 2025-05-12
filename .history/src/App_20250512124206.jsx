import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      {/* <Login/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes> 
      <BrowserRouter/>
    </>
  );
}

export default App;
