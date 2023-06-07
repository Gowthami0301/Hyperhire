import React, { useState } from "react";
import "./Order.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Book } from "../../props/BookStore.props";
import { Modal } from "antd";

const Order : React.FC<Book>  = (pops:Book) => {
  let navigate  = useNavigate();

  const [open, setOpen] = useState(true);

  const hideModal = () => {
    setOpen(false);
  };

    const [values, setValues] = useState({
        title:"",
        phoneNumber: "",
        email: "",
        price:Math.floor(Math.random() * 2000)
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
        setValid(true);

        e.preventDefault();
        if (values.title && values.price && values.phoneNumber && values.email) {
          setValid(true);
          axios.post("/api/book/order",values)
              .then((response) => {
                navigate("/")
              });
            }
        setSubmitted(true);
      };
      return (
        
        <div className="form-container" style={{zIndex:"5", position:"absolute"}}>
          <form className="register-form" onSubmit={handleSubmit}>
         < Modal
              title="Order Detials"
              open={open}
              onOk={handleSubmit}
              onCancel={hideModal}
              okText="Ok"
              cancelText="Cancel"
              className="register-form"
              >
            {submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "}
                  Book  : {pops.title}{" "}
                </h3>
                <div>Order Placed Successful</div>
              </div>
            )}
               {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Title"
                name="title"
                value={pops.title}
                onChange={handleInputChange}
                disabled
              />
            )}
    
            {submitted && !pops.title && (
              <span id="title-error">Please enter a title</span>
            )}
        
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
              <span style={{color:"red"}} id="email-error">Please enter an email address</span>
            )}
    
           {!valid && (
              <input
              className="form-field"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.phoneNumber && (
              <span style={{color:"red"}} id="last-name-error">Please enter a phoneNumber</span>
            )}
    
              {!valid && (
              <input
              className="form-field"
                type="text"
                placeholder="Price"
                name="price"
                value={values.price}
                onChange={handleInputChange}
                disabled
              />
            )}
  
            {/* {!valid && (
              <button className="form-field" type="submit">
                Signup
              </button>
            )} */}
            </Modal>
          </form>
        </div>
      );
};

export default Order;