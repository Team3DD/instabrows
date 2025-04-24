"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-full px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-colors duration-300",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
            "border border-foreground text-primary hover:bg-foreground hover:text-background": variant === "secondary",
            "bg-[#9B8977] text-white hover:bg-[#9B8977]/90": variant === "tertiary",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }