import React from "react";
import "./App.css";
import Smurf from "./Smurf";

import { connect } from "react-redux";

const App = props => {
  const { smurfs } = props;
  return (
    <div className="App">
      {smurfs.map(smurf => (
        <Smurf
          id={smurf.id}
          name={smurf.name}
          age={smurf.age}
          height={smurf.height}
        />
      ))}
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
