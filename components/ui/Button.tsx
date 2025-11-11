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
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-polkadot-pink text-white hover:shadow-lg hover:shadow-polkadot-pink/50 hover:scale-105",
    secondary: "bg-polkadot-purple text-white hover:bg-polkadot-pink hover:shadow-lg hover:shadow-polkadot-purple/50",
    outline: "border-2 border-polkadot-pink text-polkadot-pink hover:bg-polkadot-pink hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

