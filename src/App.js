import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Futureplans from "./components/Futureplans";
import Resume from "./components/Resume";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Hero/>}/>
          <Route path="/Hero" element={<Hero/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Futureplans" element={<Futureplans/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;