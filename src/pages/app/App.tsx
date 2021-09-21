import "./App.scss";
import React from "react";
import Layout from "../layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CML from "../cml/CML";
import Map from "../map/Map";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/cml">
              <CML />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
