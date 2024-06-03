import React from "react";

interface CustomFormInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  className?: string;
  onChange: (e: any) => void;
}

const CustomInput = (props: CustomFormInputProps) => {
  const { label, type = "text", name, value, onChange, className = "" } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      {type === "textarea" ? (
        <textarea
          className={`w-full p-4 outline-none border-0 rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={label}
        />
      ) : type === "select" ? (
        <select
          className={`w-full p-4 outline-none border-0 rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
        >
          <option value="" disabled hidden>
            {label}
          </option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
          <option value="other">Autre</option>
        </select>
      ) : type === "date" ? (
        <input
          className={`w-full p-4 outline-none border-0 rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          type={type}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={label}
        />
      ) : (
        <input
          className={`w-full p-4 outline-none border-0 rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          type={type}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={label}
        />
      )}
    </div>
  );
};

export default CustomInput;
