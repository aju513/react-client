import React from "react";
const Fields = ({
  inputType,
  fieldName,
  defaultValue,
  options,
  handleOnChange,
  min,
  max,
  setError,
  error,
}) => {
  const change = (e) => {
    e.preventDefault();
    setError({ err: "", name: "" });
    handleOnChange(e.target.value, fieldName);
  };
  switch (inputType) {
    case "text":
    case "email":
    case "password":
    case "number":
      return (
        <>
          <p style={{ color: "red", fontSize: "11px" }}>{error && error.err}</p>
          <label>{fieldName}</label>
          <input
            onChange={(e) => change(e)}
            type={inputType}
            defaultValue={defaultValue}
          />
        </>
      );
    case "range":
      return (
        <>
          <label>{fieldName}</label>
          <input
            onChange={(e) => change(e)}
            type={inputType}
            defaultValue={defaultValue}
            min={min}
            max={max}
          />
        </>
      );
    case "select":
      return (
        <>
          <label>{fieldName}</label>
          <select
            onChange={(e) => change(e)}
            type={inputType}
            defaultValue={options.defaultValue}
          >
            {options.map((e) => (
              <option value={e.value}>{e.label}</option>
            ))}
          </select>
        </>
      );
    default:
      return <input type="text" />;
  }
};

export default Fields;
