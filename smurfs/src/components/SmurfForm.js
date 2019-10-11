import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [ID, setID] = useState("");

  const nameChangeHandler = e => {
    setName(e.target.value);
  };

  const ageChangeHandler = e => {
    setAge(e.target.value);
  };

  const heightChangeHandler = e => {
    setHeight(e.target.value);
  };

  const IDChangeHandler = e => {
    setID(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const recruitedSmurf = {
      name: name,
      age: age,
      height: height,
      id: ID
    };
    props.addSmurf(recruitedSmurf);
  };

  return (
    <div className="form-container">
      <form className="smurf-application-form" onSubmit={submitHandler}>
        <label>
          Name
          <input onChange={nameChangeHandler} name="name"></input>
        </label>
        <label>
          Age
          <input onChange={ageChangeHandler} name="age"></input>
        </label>
        <label>
          Height
          <input onChange={heightChangeHandler} name="height"></input>
        </label>
        <label>
          ID
          <input onChange={IDChangeHandler} name="id"></input>
        </label>
        <button>Shanghai this Smurf?</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
