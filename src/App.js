import React from "react";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
            <Route exact path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
