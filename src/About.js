import React from "react";
import { connect } from "react-redux";
import { store } from "./store";
import aboutModel from "./model/about.model";
import { Link } from "react-router-dom";

store.registerModule("about", aboutModel);
const handleClick = () => {
  store.dispatch("about/test", { title: "About" + Math.random() });
};
const About = ({ about, children }) => {
  return (
    <div>
      <h1>About</h1>
      <div>Title: {about.title}</div>
      <button onClick={handleClick}>Change Title</button>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    about: state.about
  };
};
export default connect(mapStateToProps)(About);
