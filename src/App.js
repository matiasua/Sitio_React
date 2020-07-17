import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Deliveries from './pages/Deliveries';
import Logout  from './pages/Logout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/">
         <Login />
       </Route>
       <Route path="/Login">
        <Login />
       </Route>
       <Route path="/Register">
        <Register />
       </Route>
       <Route path="/contact">
       <Contact />
       </Route>
       <Route path="/deliveries">
       <Deliveries />
       </Route>
       <Route path="/logout">
       <Logout />
       </Route>
       <Route path="*">
        <NotFound />
       </Route>
      </Switch>
     </Router>
  );
}

export default App;
