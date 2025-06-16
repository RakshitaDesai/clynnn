import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-['Inter'] hover:scale-105 hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-pink-500 to-blue-700 text-white shadow-lg hover:from-pink-600 hover:to-blue-800 hover:shadow-xl",
        accent:
          "bg-app-accent text-bg shadow-lg hover:bg-yellow-300 hover:shadow-xl font-semibold",
        destructive:
          "bg-red-600 text-white shadow-lg hover:bg-red-700 hover:shadow-xl",
        outline:
          "border-2 border-app-accent bg-transparent text-app-accent shadow-lg hover:bg-app-accent hover:text-bg hover:shadow-xl",
        outlineWhite:
          "border-2 border-white bg-transparent text-white shadow-lg hover:bg-white hover:text-bg hover:shadow-xl",
        secondary:
          "bg-gray-600 text-white shadow-lg hover:bg-gray-500 hover:shadow-xl",
        ghost: "bg-transparent text-wei hover:bg-white/10 hover:text-app-accent shadow-none",
        link: "text-app-accent underline-offset-4 hover:underline hover:text-yellow-300 shadow-none hover:scale-100",
      },
      size: {
        default: "h-10 px-6 py-2 text-base",
        sm: "h-8 px-4 py-1 text-sm",
        lg: "h-12 px-8 py-3 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
