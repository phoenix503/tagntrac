import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { FaAddressCard } from "react-icons/fa";

export const Login = () => {
  const [{ mobile, password }, setCredentials] = useState({
    mobile: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
     navigate("/home")
    console.log(mobile, password);
  };

  const redirect = (path: any) => {
   navigate(path);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setCredentials({ mobile: mobile, password: value });
        break;
      case "mobile":
        setCredentials({ mobile: value, password: password });
        break;

      default:
        break;
    }
    console.log(name, value);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mobile">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                maxLength={10}
                placeholder="Enter Mobile Number"
                onChange={handleChange}
                name="mobile"
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
                name="password"
              />
            </div>

            <div className="submit">
              <button>Login</button>
            </div>
          </form>

          <div className="footer" onClick={() => redirect('/addCustomer')}>
            <FaAddressCard color="black" size={16} />{" "}
            <span className="subTitle">Add Customer</span>
          </div>

          
          <div className="footer" onClick={() => redirect('/addDeliveryPartner')}> 
            <FaAddressCard color="black" size={16} />{" "}
            <span className="subTitle">Add Delivery Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};
