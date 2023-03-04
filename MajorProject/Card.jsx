import React from "react";
import { NavLink } from "react-router-dom";

const card = (props) =>{
    return (
       
        <div className="col-md-4 col-10 mx-auto  ">
          {/* inseriting card */}
          <div className="card d-flex hie"  >
            <img
              src={props.imgsrc}
              className="card-img-top  h-50"
            //   style={{ height: "2rem", overflow: "hidden" }}
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text h-50">
                {props.about}
              </p>
              <NavLink to="/About" className="btn btn-info">
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* inseriting card till now */}
        </div>
      
    );
}

export default card;