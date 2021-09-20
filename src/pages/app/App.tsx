import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Home from "../home/Home";
import CML from "../cml/CML";
import Map from "../map/Map";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <Switch>
          <Route path="/cml">
            <CML />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
