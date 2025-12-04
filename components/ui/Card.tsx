"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "pixel" | "glass";
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  onClick,
}) => {
  const variants = {
    default:
      "bg-white border-2 border-black shadow-[4px_4px_0_#000000]",
    pixel:
      "bg-white border-2 border-black shadow-[4px_4px_0_#000000]",
    glass:
      "bg-water/80 backdrop-blur-sm border border-platinum",
  };

  const hoverClass = hover
    ? "hover:shadow-[6px_6px_0_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
    : "";
  const cursorClass = onClick ? "cursor-pointer" : "";

  return (
    <motion.div
      className={`p-6 transition-all duration-200 ${variants[variant]} ${hoverClass} ${cursorClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
