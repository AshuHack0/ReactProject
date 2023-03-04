import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MainHeader from "./MainHeader";
import Services from "./Services"
import Error from "./Error";
import Footer from "./Foter";
import { BrowserRouter , Route, Routes } from "react-router-dom";
const MainMajorProject = () =>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default  MainMajorProject;