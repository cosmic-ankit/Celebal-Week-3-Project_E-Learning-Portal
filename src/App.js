// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext'; // Import the AuthContext
import Home from './components/Home';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext); // Get the isAuthenticated state from the AuthContext

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Login />
      }
    />
  );
};

const App = () => {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/:id" component={CourseDetails} />
          {/* Private Route for Dashboard */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
