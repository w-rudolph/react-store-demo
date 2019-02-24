import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import About from "./About";
store.addMutationHook((type, payload, state) => {
  console.log(type, payload, state);
});
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
