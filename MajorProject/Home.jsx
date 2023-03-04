import React from "react";
 import { NavLink } from "react-router-dom";
const  Home = () => {
 return (
   <>
     <section id="header" className="d-flex align-items-center">
       <div className="container-fluid nav_bg ">
         <div className="row ">
           <div className="col-10 mx-auto ">
             <div className="row  ">
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                 <h1>
                   Grow Your Business with
                   <strong className="text-primary d-inline-block">
                     <div className="typed-out">AshuTechnical</div>
                   </strong>
                 </h1>
                 <h2
                   className="my-2 "
                   style={{ color: "#484848", textTransform: "capitalize" }}
                 >
                   We are team of Talented developer making websites
                 </h2>
                 <div className="mt-2">
                   <NavLink
                     to="/Services"
                     href=""
                     className="btn btn-outline-primary "
                     style={{ borderRadius: "50px" }}
                   >
                     Get Started
                   </NavLink>
                 </div>
               </div>
               <div className="col-lg-6 order-1 order-lg-2 header-img  d-flex justify-content-center align-items-center bg-transparent">
                 <img
                   className="img-fluid vert-move bg-transparent"
                   src=" https://img.freepik.com/premium-vector/businessman-working-computer_24877-8270.jpg?w=2000"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   </>
 );
};

export default  Home;
