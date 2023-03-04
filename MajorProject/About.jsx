 import React from "react";
 import { NavLink } from "react-router-dom";
 import my from "./mypic.jpg";

 import "./Main.css";
 const Home = () => {
   return (
     <>
       <section className="d-flex align-items-center">
         <div className="container-fluid nav_bg">
           <div className="row">
             <div className="col-10 mx-auto">
               <div className="row  ">
                 <div className=" col-md-6 order-lg-1 order-2 d-flex justify-content-center flex-column mt-4">
                   <h1 className="text-info">About Me</h1>
                   <p>
                     Hey there, I’m Ashutosh. I’m a web developer living in
                     Muzaffarpur , Bihar. I am focused in technology, web
                     development, and programming. I’m also interested in design
                     and entrepreneurship. I am a Developer specialized in MERN
                     Stack. Applying responsive design principles on web pages
                     and watching them shrink into mobile screens and still look
                     amazing is oddly satisfying. I think in a way, I'm kind of
                     like those web pages; I'm moldable, but I still keep my
                     creative flair intact. Apart from work I love graphic
                     designing, singing, blogging, and learning new skills. I am
                     a highly grounded person that values culture and people.
                   </p>
                   <div>
                     <NavLink to="/Contact" className="btn btn-outline-dark">
                       Contact Us
                     </NavLink>
                   </div>
                 </div>
                 <div
                   className=" col-md-6 order-lg-2 mt-4 "
          
                 >
                   <div
                     className="d-flex justify-content-center align-align-items-center "
                     style={{
                       margin: "20px",
                     }}
                   >
                     <img
                       className=" container vert-move"
                       src={my}
                       style={{
                         borderRadius: "50px",
                       }}
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
 };

 export default Home;
  // <img src={pic}></img>;
