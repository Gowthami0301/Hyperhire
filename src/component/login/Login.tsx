import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC  = () => {
  let navigate  = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password:"",
      });
    
      const handleInputChange = (event: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
    
      const [submitted, setSubmitted] = useState(false);
      const [valid, setValid] = useState(false);
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post("/api/user/login",values)
          .then((response) => {
            navigate("/")
          });
            navigate("/")
      };
    
      return (
        
        <div className="form-container">
              <header style={{color:"white"}}>Login as a Admin</header>

          <form className="register-form" onSubmit={handleSubmit}> 
            {!valid && (
              <input
                className="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
              {!valid && (
              <input
                className="form-field"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.password && (
              <span id="password-error">Please enter an Password</span>
            )}
            {!valid && (
              <button className="form-field" type="submit">
                Login
              </button>
            )}
          </form>
        </div>
      );
};

export default Login;