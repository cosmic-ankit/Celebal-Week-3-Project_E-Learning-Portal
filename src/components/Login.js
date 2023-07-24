// Login.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Implement your login logic here, e.g., handle login with JWT or other methods
    login();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
