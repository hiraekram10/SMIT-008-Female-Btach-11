import React from "react";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "../pages/About";
import Services from "../pages/Services";
import Home from "../pages/Home";
import {NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
   
    <div style={{display:'flex'}}>
  <div>navsection</div>
  <div >
    <ul style={{display:'flex'}} >
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li> <NavLink to='/about'>about</NavLink></li>
    <li> <NavLink to='/services'>services</NavLink></li>
    </ul></div>
    </div>

   
    </>
  );
};

export default Navbar1;
