import React from "react";
import { ChevronDown } from "lucide-react";
const CustomSelect = ({ label, name, options, value, onChange }) => {
  return (
    <div className="w-full flex flex-col items-start justify-between   gap-2 h-full">
      <label className="text-secondary font-medium" htmlFor={name}>
        {label}
      </label>
      <div className="w-full relative">
        <select
          className={`p-2 border border-secondary rounded-lg w-full h-full appearance-none `}
          value={value}
          name={name}
          onChange={onChange}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-grey-800 bg-white hover:bg-gray-100 "
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;