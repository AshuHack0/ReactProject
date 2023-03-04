// import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./Main.css"
// const Navbar = () => {
//   return (
//     <>
//       <div className="container-fluid nav_bg">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//               <div className="container-fluid">
//                 <a className="navbar-brand text-dark">
//                   AshuTechnical
//                 </a>
//                 <button
//                   className="navbar-toggler"
//                   type=" "
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="true"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div
//                   className="collapse navbar-collapse"
//                   id="navbarSupportedContent"
//                 >
//                   <ul className="navbar-nav   me-0 mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <NavLink
//                         to="/"
//                         className="nav-link  "
//                         aria-current="page"
//                         href="#"
//                       >
//                         Home
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink to="/Services" className="nav-link" href="#">
//                         Services
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink to="/About" className="nav-link" href="#">
//                         About
//                       </NavLink>
//                     </li>

//                     <li className="nav-item">
//                       <NavLink to="/Contact" className="nav-link" href="#">
//                           Contact  
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default Navbar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar ClassName="bg-transparent" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#home">
          AshuTechnical
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link " to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " to="/About">
              About
            </NavLink>
            <NavLink className="nav-link " to="/Services">
              Services
            </NavLink>
            <NavLink className="nav-link " to="/Contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
