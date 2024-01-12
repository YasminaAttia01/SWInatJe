import React from "react";

const TimelineStepper = () => {
  const steps = [
    "Nous préparons une proposition",
    "Nous discutons ensemble",
    "Nous commençons",
  ];
  return (
    <ol className="relative text-black border-s-2 border-[#757677] ml-4">
      {steps.map((step, index) => (
        <li key={index} className="mb-24 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white-100 rounded-full -start-3 ring-2 dark:ring-primary">
            <span className={`w-5 h-5 bg-primary rounded-full`} />
          </span>
          <h3 className={`font-medium text-lg leading-tight m-6`}>
            {index + 1}. {step}
          </h3>
        </li>
      ))}
    </ol>
  );
};

export default TimelineStepper;
