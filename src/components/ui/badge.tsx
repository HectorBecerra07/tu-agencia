import React from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  default: "bg-black text-white border-black",
  secondary: "bg-black/5 text-black border-black/10",
  outline: "bg-transparent text-black border-black/20",
};

export function Badge({ className = "", variant = "default", ...props }: Props) {
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
