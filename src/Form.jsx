import axios from "axios";
import React, { useState } from "react";
import InputField from "./InputField";
axios.withCredentials = true;
const Form = ({ currentUser }) => {
  const [state, setState] = useState(currentUser);
  const [error, setError] = useState({ err: "", name: "" });
  const validate = (e) => {
    e.preventDefault();
    state.forEach((element) => {
      if (element.value.length === 0) {
        const vari = ` ${element.name} is empty`;
        setError({ err: vari, name: element.name });
      } else if (element.value.length < 4 && element.type !== "checkbox") {
        const vari = `${element.name} length is less than 4`;
        console.log(element.name);
        setError({
          err: vari,
          name: element.name,
        });
      }
    });
  };
  const handleChange = (data, type) => {
    var obj = state;
    //This will update the new value to the state locally
    obj.forEach((element) => {
      if (element.name === type) {
        element.value = data;
        console.log(obj[type]);
      }
    });
    setState(obj);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          validate(e);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "1.2em",
          border: "solid black ",
          borderRadius: "4px",
        }}
      >
        {state.map((e) => (
          <InputField
            type={e.type}
            value={e.value}
            name={e.name}
            setError={setError}
            handleChange={handleChange}
            label={e.name}
            setState={setState}
            error={error.name === e.name && error}
          />
        ))}
        <InputField type="submit" value="submit" />
      </form>
    </>
  );
};

export default Form;
