import React from "react";

const Radio = ({ name, label, value, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="mr-3">{label}</label>
      {options.map((option) => (
        <div className="form-check form-check-inline" key={option.id}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.value}
            value={option.value}
            checked={value === option.value}
            {...rest}
          />
          <label className="form-check-label" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default Radio;
