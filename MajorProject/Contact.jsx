import React, { useState } from "react";
 
const Contact = () => {
   const [data , setdata] =useState({
    fullName:"",
    phone:"" ,
    email:"" ,
    message:"",
   });
   const inputEvent = (inputdata) =>{
        const  {name, value} = inputdata.target;
        setdata((preval)=>{
          return{
            ...preval ,
            [name]:value,   // validata hokar shi jgah j raha
          };
        });
   };
    
  const formSubmit = (e) =>{
          // e.preventDefault();
          alert(`My name is ${data.fullName} , my Phone No is ${data.phone}  ,  my email Is ${data.email} and my message is ${data.message}` )
  }
  return (
    <>
      <div className="my-5">
        <div>
          <h1 className="text-center text-secondary">Contact Us</h1>
          <div ClassName="container contact_div">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullName"
                    value={data.fullName}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>

                <div cla ssName="mb-3">
                  <label
                    for="exampleFormControlText
                   area1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={data.message}
                    name="message"
                    onChange={inputEvent}
                    
                  ></textarea>
                </div>
                <div class="col-12 mt-4">
                  <button class="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
