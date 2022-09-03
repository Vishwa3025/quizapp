import "./App.css";
import LandingPage from "./Components/landingpage";
import { Route, Switch } from "react-router-dom";
import Question from "./Components/question";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Switch>
            <Route path="/question" component={Question} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>

      </>
    );
  }
}

export default App;
