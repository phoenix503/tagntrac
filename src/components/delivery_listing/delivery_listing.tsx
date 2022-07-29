import React, { useState } from "react";
import "./delivery_listing.css";

export const DeliveryListing = () => {

  const [value,setValue] = useState("In-Progress");
  let data = [
    {
      id: 1,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 2,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 3,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 4,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 5,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 6,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 7,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 8,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 9,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 10,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 11,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 12,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 13,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 14,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 15,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 16,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 17,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 18,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 19,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 20,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 21,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 22,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 23,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 24,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 25,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 26,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 27,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 28,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 29,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 30,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 31,
      name: "Sharik",
      mobile: 7000655095,
      order_no: "ABC_$4444",
      status: "In-Progress",
    },
    {
      id: 32,
      name: "Shivam",
      mobile: 8871753357,
      order_no: "ABC_$4444",
      status: "Rejected",
    },
    {
      id: 33,
      name: "Priyansh",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
    {
      id: 34,
      name: "Shubham",
      mobile: 999999999,
      order_no: "ABC_$4444",
      status: "Accepted",
    },
  ];

  let getData = (val: {
    id: number;
    name: string;
    mobile: number;
    order_no: string;
    status: string;
  }) => {
    console.log(val);
    alert("You order is " + val.status);
  };

  let handleChange = (id: number,e: any) => {
    console.log(id,e.target.value);
    // setValue(e.target.value);
    alert("Order status has been changed to "+e.target.value);
  }

  return (
    <div>
      <h2 className="title">Delivery Listing</h2>
      <table className="tableTop">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Order Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr  className="table-row" key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.mobile}</td>
                <td>{val.order_no}</td>
                <td>
                <select 
                  value={value} 
                  onChange={(e) => handleChange(val.id,e)} 
                >
                <option value="in-progress">In-Progress</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

