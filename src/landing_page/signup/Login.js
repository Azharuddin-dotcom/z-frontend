import React, { useState } from "react";
import axios from "axios";

function Login({ setToken, setErrorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://z-backend-d97a.onrender.com/api/login", {
        email,
        password,
      });

      // Store the JWT token in localStorage
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      window.location.href = "https://zdbrd.netlify.app/";
    } catch (error) {
      setErrorMessage("Invalid credentials, please try again.");
      console.error("Login failed:", error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
