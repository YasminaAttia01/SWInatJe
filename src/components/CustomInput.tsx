import React, { useRef } from "react";

interface CustomFormInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  className?: string;
  options?: { value: string; label: string }[];
  onChange: (e: any) => void;
}

const CustomInput = (props: CustomFormInputProps) => {
  const { label, type = "text", name, value, onChange, className = "" } = props;
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-1 w-full">
      {type === "textarea" ? (
        <textarea
          className={`w-full p-4 outline-none rounded-xl border-black/30 border focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={label}
        />
      ) : type === "select" ? (
        <select
          className={`w-full p-4 outline-none border-black/30 border rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
        >
          <option value="" disabled hidden>
            {label}
          </option>
          {props.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "date" ? (
        <input
          className={`w-full p-4 outline-none border-black/30 border rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={label}
          type="text"
          ref={ref}
          onFocus={() => {
            if (ref.current) ref.current.type = "date";
          }}
          onBlur={() => {
            if (ref.current) ref.current.type = "text";
          }}
        />
      ) : (
        <input
          className={`w-full p-4 outline-none border-black/30 border rounded-xl focus:ring-primary focus:ring-2 transition-all duration-150 ${className} placeholder:text-sm`}
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
