import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  href?: string;
  label: string;
  type: "button" | "link";
  onclick?: () => void;
}

export default function CustomButton({
  href,
  label,
  type,
  onclick,
}: CustomButtonProps) {
  if (type === "link") {
    return (
      <Link
        href={href ?? "#"}
        className="w-fit flex items-center justify-center px-8 py-4 text-white bg-primary rounded-xl  hover:bg-yellow-500 font-bold sm:text-lg text-center truncate"
      >
        <span className="font-semibold"> {label}</span>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onclick}
        type="submit"
        className="w-fit flex items-center justify-center px-8 py-4 text-white bg-primary rounded-xl hover:bg-yellow-500 font-bold sm:text-lg text-center truncate"
      >
        <span> {label}</span>
      </button>
    );
  }
}
