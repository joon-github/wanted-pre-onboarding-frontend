import React from "react";

const Input = ({ value, type, name, placeholder, onChange }) => {
  return (
    <div className="inputForm">
      <p>{`${name} : `}</p>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value, name, e);
        }}
        type={type}
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
