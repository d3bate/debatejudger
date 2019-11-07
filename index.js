import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Editor } from "./views/editor";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/edit/:id"
              render={({ match }) => <Editor match={match}/>}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
