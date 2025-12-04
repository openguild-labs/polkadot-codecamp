"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "font-title uppercase tracking-wider inline-flex items-center justify-center transition-all duration-200 font-semibold";

  const variants = {
    primary:
      "text-white hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px]",
    secondary:
      "text-white hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px]",
    outline:
      "border-2 bg-white hover:text-white",
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#5816CF',
      boxShadow: '4px 4px 0 #000000',
    },
    secondary: {
      backgroundColor: '#FF195F',
      boxShadow: '4px 4px 0 #000000',
    },
    outline: {
      borderColor: '#5816CF',
      color: '#5816CF',
    },
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        style={variantStyles[variant]}
        whileHover={{ 
          scale: 1.02,
          boxShadow: variant !== 'outline' ? '6px 6px 0 #000000' : undefined,
          backgroundColor: variant === 'outline' ? '#5816CF' : undefined,
        }}
        whileTap={{ 
          scale: 0.98,
          boxShadow: variant !== 'outline' ? '2px 2px 0 #000000' : undefined,
        }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      style={variantStyles[variant]}
      whileHover={{ 
        scale: 1.02,
        boxShadow: variant !== 'outline' ? '6px 6px 0 #000000' : undefined,
        backgroundColor: variant === 'outline' ? '#5816CF' : undefined,
      }}
      whileTap={{ 
        scale: 0.98,
        boxShadow: variant !== 'outline' ? '2px 2px 0 #000000' : undefined,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
