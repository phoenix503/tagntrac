import React from "react";
import "./customer_home.css";
import {AiFillDelete} from 'react-icons/ai';

// This function is used to represent the Customer Data and the shipments assigned to them with the current status
export const CustomerHome = () => {
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

  // This fucntion can be used to get the item when user clicks on any row in the Tablet
  let getData = (val: {
    id: number;
    name: string;
    mobile: number;
    order_no: string;
    status: string;
  }) => {
    console.log("You order is " + val.status);
    // alert("You order is " + val.status);
  };

  return (
    <div>
      <h2 className="title">Customer Listing</h2>
      <table className="tableTop">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Order Number</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr onClick={() => getData(val)} className="table-row" key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.mobile}</td>
                <td>{val.order_no}</td>
                <td>{val.status}</td>
                <td>
                  <div onClick={() => {  alert("Item with id "+ val.id+" will be deleted")}} className="tdata">
                    <AiFillDelete />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
