import React from "react";

const Select = ({ name, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="custom-select">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default Select;
