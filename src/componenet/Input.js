import React from "react";

const Input = ({ value, type, name, placeholder, onChange }) => {
  return (
    <div className="inputForm">
      <input
        value={value}
        onChange={(e) => {
          onChange(e, name);
        }}
        type={type}
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
