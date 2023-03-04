import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <>
    <Navbar/>
    </>
    // <div className="cont">
    //   <nav>
    //     <ul className="listMain">
    //       <h2 className="heading">Technical Ashu</h2>
    //       <li className="list">
    //         <NavLink to="/"> Home </NavLink>
    //       </li>
    //       <li className="list">
    //         <NavLink to="/Services"> Services </NavLink>
    //       </li>
    //       <li className="list">
    //         <NavLink to="/About"> About </NavLink>
    //       </li>
    //       <li className="list">
    //         <NavLink to="/Contact"> Contact</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Header;
