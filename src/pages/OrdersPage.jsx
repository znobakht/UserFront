// OrdersPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [issuccess, setIssuccess] = useState(false);

  useEffect(() => {
    // Fetch orders from your backend when component mounts
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:2000/orders");
        console.log(response);
        setOrders(response.data.orders);
        setIssuccess(true);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);
  const handleDelete = async (orderId, productName) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete the order for "${productName}"?`
    );
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:2000/orders/${orderId}`);
        // Remove the deleted order from the orders state
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
        alert(`Order for "${productName}" deleted successfully`);
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
  };
  return (
    <div>
      <Navbar />
      {issuccess && (
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price Per Unit</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{order.address}</td>
                  <td className="border px-4 py-2">{order.productName}</td>
                  <td className="border px-4 py-2">{order.quantity}</td>
                  <td className="border px-4 py-2">{order.pricePerUnit}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 mx-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(order._id, order.productName)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/orders/edit/${order._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2"
                    >
                      Edit
                    </Link>

                    <Link
                      to={`/orders/${order._id}`}
                      className="bg-blue-500 text-white px-4 py-2 mx-2 rounded hover:bg-blue-600"
                    >
                      PDF
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
