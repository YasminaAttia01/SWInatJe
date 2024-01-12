import React from "react";
const DevisInput = ({ label, name, type, value, onChange }) => {
  return (
    <div className="w-full flex flex-col items-start justify-between   gap-2 h-full">
      <label className="text-secondary font-medium" htmlFor={name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          className="p-2 border border-secondary rounded-lg w-full h-full"
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={name}
          className="p-2 border border-secondary rounded-lg w-full "
          value={value}
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default DevisInput;