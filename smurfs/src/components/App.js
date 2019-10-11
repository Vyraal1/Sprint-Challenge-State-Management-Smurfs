import React from "react";
import "./App.css";
import Smurf from "./Smurf";

import { connect } from "react-redux";

const App = props => {
  console.log(props);
  return (
    <div className="App">
      <Smurf />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
