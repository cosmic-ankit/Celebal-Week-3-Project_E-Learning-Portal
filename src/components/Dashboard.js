// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      {/* Display enrolled courses and other user-specific information here */}
    </div>
  );
};

export default Dashboard;
