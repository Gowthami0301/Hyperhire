import React, { useState } from 'react';
import {FaCommentAlt,FaLaptopCode}from "react-icons/fa";
import { useNavigate} from "react-router-dom";

const Header : React.FC = () => {
    let navigate  = useNavigate();
    return (
        <header className="header">
 		    <h1> <a href="#">Hyperhire<span>Bookstore</span></a></h1>
             <div style={{marginLeft:"70%"}}>
             <button onClick={()=>{ navigate("/")}}  style={{padding:"10px",fontSize:"14px",borderRadius:"50%"}}>Home</button>
              <button onClick={()=>{ navigate("/login")}}  style={{padding:"10px",fontSize:"14px",borderRadius:"50%"}}> SignIn</button>
              <button onClick={()=>{ navigate("/signup")}}  style={{padding:"10px",fontSize:"14px",borderRadius:"50%"}}>SignUp</button>
              <span style={{color:"white",marginLeft:"20px"}}>Points : 2000 {" "}</span>

             </div>
        </header>
  
    );
};

export default Header;