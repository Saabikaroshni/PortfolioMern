import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/About" element={<About></About>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Skills" element={<Skills></Skills>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/Resume" element={<Resume></Resume>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;