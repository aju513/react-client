import React, { useState } from "react";
import Data from "./Data";

import Fields from "./Fields";

const Form = ({ datajson }) => {
  const [state, setState] = useState({});
  const [error, setError] = useState({ err: "", name: "" });
  const validate = (e) => {
    e.preventDefault();
    console.log(error);
    for (const [key, value] of Object.entries(state)) {
      console.log(key, value);
      if (key !== "number" && value.length === 0) {
        const vari = ` ${key} is empty`;
        setError({ err: vari, name: key });
      } else if (key !== "number" && value.length < 4) {
        const vari = `${key} length is less than 4`;
        setError({
          err: vari,
          name: key,
        });
      }
    }
  };

  const handleOnChange = (data, fieldName) => {
    datajson.forEach((element, index) => {
      if (element.fieldName === fieldName) {
        setState((obj) => {
          return { ...obj, [element.fieldName]: data };
        });
      }
    });
  };
  console.log(state);

  return (
    <div>
      <form
        onSubmit={validate}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "2em",
          width: "40%",
        }}
      >
        {datajson.map((element) => (
          <Fields
            setError={setError}
            inputType={element.inputType}
            fieldName={element.fieldName}
            defaultValue={element.defaultValue}
            options={element.options}
            handleOnChange={handleOnChange}
            min={element.min}
            error={error.name === element.fieldName && error}
            max={element.max}
          />
        ))}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
