import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (token) {
      // Fetch user data from the protected route
      axios
        .get('http://localhost:3002/api/protected', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.userId);  // Set user data
        })
        .catch(() => {
          setErrorMessage('Session expired or invalid token. Please log in again.');
          localStorage.removeItem('token');
          setToken(null);
        });
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <div className="app-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {token ? (
        <div>
          <h2>Welcome, User {user}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in or sign up</h1>
          <br/>
          <Signup />
          <br />
          <Login setToken={setToken} setErrorMessage={setErrorMessage} />
        </div>
      )}
    </div>
  );
}

export default App;