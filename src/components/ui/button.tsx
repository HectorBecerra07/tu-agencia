import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition border select-none " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  default: "bg-black text-white border-black hover:opacity-90",
  ghost: "bg-transparent border-transparent hover:bg-black/5",
  outline: "bg-transparent border-black/15 hover:bg-black/5",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  default: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: Props) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
