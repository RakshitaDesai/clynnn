import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg border-2 border-gray-500 bg-gray-700 px-3 py-2 text-sm font-['Inter'] text-wei placeholder:text-gray-400 focus:border-app-accent focus:outline-none focus:ring-2 focus:ring-app-accent/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };