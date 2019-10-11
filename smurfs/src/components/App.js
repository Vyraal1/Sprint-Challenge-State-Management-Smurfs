import React, { useEffect } from "react";
import "./App.css";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";

const App = props => {
  const { fetchSmurfs } = props;
  useEffect(() => {
    fetchSmurfs();
  }, []);

  const { smurfs } = props;
  return (
    <div className="App">
      <SmurfForm />
      <div className="smurf-list">
        {smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            id={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
      </div>
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
  { fetchSmurfs }
)(App);
