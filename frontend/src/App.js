import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
