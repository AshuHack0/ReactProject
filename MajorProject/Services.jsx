import React from "react";
import Card from "./Card";
import Sdata from "./ApiData";
import "./Main.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
const Services = () => {
   return (
     <>
       <div className="my-5">
         <div>
           <h1 className="text-center text-secondary">Services</h1>
         </div>
       </div>
       <div className="container-fluid mb-5">
         <div className="row">
           <div className="col-10 mx-auto">
             <div className="row gy-5  vaert-move " > 
               {/* api data fetching */}
               {Sdata.map((val, ind) => {
                 return <Card imgsrc={val.imgsrc} title={val.title} about={val.About} />;
               })}
             </div>
           </div>
         </div>
       </div>
     </>
   );
};

export default Services;
