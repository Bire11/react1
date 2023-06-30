import React from "react";
import './formStyle.css';

import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";



function ApplicationForm(){
//const navigate = useNavigate();
const [formValues, setFormValues] = useState({})

const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setFormValues(values =>({...values, [name]:value}))
}
//http://localhost:4000/applicant/list-applicant

const handleSubmit =(event)=>{
    event.preventDefault();
    axios.post(
        'http://localhost:4000/applicant/application', formValues)
        .then(res => {
          if(res.status ===200){
            alert('You are successfuly registered')
            
   //         navigate('/')
          }else{
            Promise.reject()
          }
        })
        .catch(err => alert('Something went wrong! ' +err.message))
        
     //   navigate('/')
    }
     




    return (
        <div className='form-wraper'>
          <div className="form-container">
          <Link className='button condensed new' to="/">Show Application</Link>
            <div className="title">Application Form</div>
            <form onSubmit={handleSubmit} >
              <div className="user__details">
                <div className="input__box">
                  <span className="details">First Name</span>
                  <input type="text" name='first_name' placeholder="E.g: Asibeh" 
                  defaultValue = "" onChange={handleChange} required />
                </div>
                <div className="input__box">
                  <span className="details">Last Name</span>
                  <input type="text" name='last_name' placeholder="E.g: Tenager" 
                  defaultValue = "" onChange={handleChange} required />
                </div>
    
                <div className="input__box">
                  <span className="details">Email</span>
                  <input type="email" name='email' placeholder="asibeh@gmail.com" 
                  defaultValue= "" onChange={handleChange} required />
                </div>
                <div className="input__box">
                  <span className="details">Phone Number</span>
                  <input type="tel" name='phone_number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                  defaultValue= "" placeholder="092-345-6787" onChange={handleChange} required />
                </div>
              </div>
              <div className="gender__details" onChange={handleChange}>
                <input type="radio" name="gender" id="dot-1" value='Male'/>
                <input type="radio" name="gender" id="dot-2" value='Female'/>
                <span className="gender__title">Gender</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one"></span>
                    <span>Male</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two"></span>
                    <span>Female</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input className="primary save" type="submit" value='Apply' />
              </div>
            </form>
          </div>
        </div>
      );
}
export default ApplicationForm;