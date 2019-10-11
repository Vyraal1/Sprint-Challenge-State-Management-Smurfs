import React from "react";

const Smurf = props => {
  const { name, age, height, id } = props;
  return (
    <div className="smurf-card">
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
      <p>{id}</p>
    </div>
  );
};

export default Smurf;
