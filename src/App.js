import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Hero/>}/>
          <Route path="/Hero" element={<Hero/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;