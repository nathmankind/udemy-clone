import React from "react";
import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp";
import WebDevClass from "./Components/WebDevClass";
import Learn from "./Components/Learn";
import TopNavbar from "./Components/TopNavbar";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/web-development" component={WebDevClass} />
          <Route path="/learn" component={Learn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
