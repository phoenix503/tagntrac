import React from 'react';
import { AddCustomer } from './components/add_customer/add_customer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/login';
import { AddDeliveryPartner } from './components/add_delivery_partner/add_delivery_partner';
import { HomePage } from './components/homePage/homePage';
import { CustomerHome } from './components/customerListing/customer_home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/addCustomer' element={<AddCustomer/>} />
            <Route path='/addDeliveryPartner' element={<AddDeliveryPartner/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='*' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
