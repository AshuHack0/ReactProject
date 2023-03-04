import React from "react";
const date = new Date();
const year = date.getFullYear();
const Footer = () =>{
   return (
     <>
       <footer className="w-100 bg-light text-center">
         <p>
            
           © {year} AshuTechnical All rights Reserved | Terms and Conditons
         </p>
         <p>
            
            Managed And Developed By AshuTechnical
         </p>
       </footer>
     </>
   );
}

export default Footer;