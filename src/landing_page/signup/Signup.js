import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://z-backend-8m5o.onrender.com/api/signup', {
        username,
        email,
        password,
      });
      alert("User created successfully");
      window.location.href = "https://67d7f5330e7e04d05624407a--zdbrd.netlify.app/";
    } catch (error) {
      console.error("Signup failed:", error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
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
        <br />
        <button type="submit">Signup</button>
      </div>
    </form>
  );
}

export default Signup;
