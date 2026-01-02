import React from "react";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-11 w-full border px-4 text-sm outline-none focus:ring-2 focus:ring-black/10 ${className}`}
      {...props}
    />
  );
}
