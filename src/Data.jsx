import React from "react";

const Data = ({ state }) => {
  return (
    <div>
      <h1>New State</h1>
      {state.map((e) => (
        <p>{e.defaultValue}</p>
      ))}
    </div>
  );
};

export default Data;
