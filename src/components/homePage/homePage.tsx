import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { CustomerHome } from "../customerListing/customer_home";
import { DeliveryListing } from "../delivery_listing/delivery_listing";
import { AiOutlineLogout } from "react-icons/ai";
import "./homePage.css";

export const HomePage = () => {

let navigate = useNavigate();

// It will redirect the user to Login screen after logout is successfully completed
let logout = (path: string) => {
    navigate(path);
}


    return (
      <div>
        <div className="headerHome">
          <nav className="navStyle">
            <div>
              <Link style={{ textDecoration: "none" }} to="/deliveryHome">
                Delivery Listing
              </Link>

              <Link
                className="titleMenu"
                style={{ textDecoration: "none" }}
                to="/customerHome"
              >
                Customer Listing
              </Link>
            </div>
           
            <div onClick={ () => {logout("/")}} className="logout_main">
                <AiOutlineLogout />
                <span className="logout">Logout</span>
                
            </div>
            
          </nav>
        </div>

        <Routes>
          <Route index element={<DeliveryListing />} />
          <Route path="/deliveryHome" element={<DeliveryListing />} />
          <Route path="/customerHome" element={<CustomerHome />} />
        </Routes>
      </div>
    );
  
}
