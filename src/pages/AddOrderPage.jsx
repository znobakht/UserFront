// AddOrderPage.js

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:2000";

function AddOrderPage() {
  const [address, setAddress] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Add your order submission logic here
    const orderData = {
      address,
      productName,
      quantity,
      pricePerUnit,
    };
    const createOrderUrl = baseUrl + "/orders";
    try {
      const response = await axios.post(createOrderUrl, orderData);
    
      alert(response.data.message);
      navigate("/orders/all");
    } catch (error) {
       if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         console.log(error.response.data);
         // Assuming the error response from the server is in the format { error: [messages] }
         alert(error.response.data.error.join("\n"));
       } else if (error.request) {
         // The request was made but no response was received
         console.log(error.request);
       } else {
         // Something happened in setting up the request that triggered an Error
         console.log("Error", error.message);
       }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="address">
              Address
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="pricePerUnit">
              Price Per Unit
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="number"
              id="pricePerUnit"
              value={pricePerUnit}
              onChange={(e) => setPricePerUnit(parseFloat(e.target.value))}
              required
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddOrderPage;
