import React from "react";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Preview from "./components/Preview";
import Chats from "./components/Chats";
import ChatView from "./components/ChatView";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route path="/chats/view">
                <ChatView />
              </Route>
              <Route path="/chats">
                <Chats />
              </Route>
              <Route exact path="/preview">
                <Preview />
              </Route>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
