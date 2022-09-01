import React, { useState } from "react";
import Data from "./Data";
import datajson from "./datajson.json";
import Fields from "./Fields";

const Form = () => {
  const [state, setState] = useState(datajson);
  const [error, setError] = useState({ err: "", name: "" });
  const validate = (e) => {
    e.preventDefault();
    console.log(error);
    state.forEach((element) => {
      if (element.defaultValue.length === 0) {
        const vari = ` ${element.fieldName} is empty`;
        setError({ err: vari, name: element.fieldName });
      } else if (
        element.defaultValue.length < 4 &&
        element.inputType !== "number"
      ) {
        const vari = `${element.fieldName} length is less than 4`;
        console.log(element.fieldName);
        setError({
          err: vari,
          name: element.fieldName,
        });
      }
    });
  };

  const handleOnChange = (data, fieldName) => {
    var obj = state;
    obj.forEach((element, index) => {
      if (element.fieldName === fieldName) {
        element.defaultValue = data;
      }
    });
    setState(obj);
  };
  const submit = (e) => {
    e.preventDefault();
    validate(e);
    setState((el) => [...el]);
  };

  return (
    <div>
      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "2em",
          width: "40%",
        }}
      >
        {state.map((element) => (
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
      <Data state={state} />
    </div>
  );
};

export default Form;
