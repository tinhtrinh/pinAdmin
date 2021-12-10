import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (<Router>
    <div className="App">
      <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
      </div>
    </div></Router>
  );
}

export default App;
