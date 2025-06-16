import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border-2 border-gray-500 bg-gray-700 px-3 py-2 text-sm font-['Inter'] text-wei placeholder:text-gray-400 focus:border-app-accent focus:outline-none focus:ring-2 focus:ring-app-accent/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300 hover:border-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };