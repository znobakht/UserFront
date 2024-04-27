// SignupPage.js

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:2000";
function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_Password] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    const signupUrl = baseUrl + "/users";
    try {
      const response = await axios.post(signupUrl, {
        name,
        email,
        username,
        password,
        repeat_password,
      });
    //   console.log("response in signup page for signup");
    //   console.log(response.data);
      alert(response.data.message);
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
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <label className="block mb-1" htmlFor="email">
            username
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            repeat_password
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="password"
            id="repeat_password"
            value={repeat_password}
            onChange={(e) => setRepeat_Password(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
