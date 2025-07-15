import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(function Button(
  { className, variant = "default", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2",
        variant === "ghost" && "bg-transparent hover:bg-gray-100 px-2 py-2",
        className
      )}
      {...props}
    />
  );
});