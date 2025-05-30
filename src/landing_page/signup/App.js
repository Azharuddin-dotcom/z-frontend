import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup

  useEffect(() => {
    if (token) {
      axios
        .get('https://z-backend-d97a.onrender.com/api/protected', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.userId);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        {errorMessage && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-300">
            {errorMessage}
          </div>
        )}

        {token ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome, User {user}!</h2>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
              {isLogin ? 'Log In to Your Account' : 'Create a New Account'}
            </h1>

            {isLogin ? (
              <Login setToken={setToken} setErrorMessage={setErrorMessage} />
            ) : (
              <Signup />
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
