import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "./store";
import appModel from "./model/app.model";

store.registerModule("app", appModel);
const handleClick = () => {
  store.dispatch("app/test", { title: 'APP' + Math.random() });
}; 
const App = ({ app, children }) => {
  return (
    <div>
      <h1>App</h1>
      <div>Title: {app.title}</div>
      <button onClick={handleClick}>Change Title</button>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    app: state.app
  };
};
export default connect(mapStateToProps)(App);
