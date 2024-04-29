// LoginPage.js

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:2000";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUrl = baseUrl + "/users/login";
    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["authorization"] = response.data.token;
      console.log(response.data)
      navigate("/orders/create");
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
    <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
