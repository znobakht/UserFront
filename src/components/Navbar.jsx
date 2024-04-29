// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link to="/" className="text-white text-xl font-bold">
          Home
        </Link> */}
        <div>
          <Link to="/orders/create" className="text-white mr-7">
            Add an Order
          </Link>
          {/* <Link to="/unique-order" className="text-white mr-7">
            See one Order
          </Link> */}
          <Link to="/orders/all" className="text-white">
            My Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
