"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "glass";
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
    default: "bg-polkadot-gray-900 border border-polkadot-gray-700",
    gradient: "bg-gradient-to-br from-polkadot-gray-900 to-polkadot-gray-800 border border-polkadot-pink/30",
    glass: "bg-polkadot-gray-900/50 backdrop-blur-lg border border-polkadot-gray-700/50",
  };

  const hoverClass = hover ? "hover:border-polkadot-pink/50 hover:shadow-lg hover:shadow-polkadot-pink/20 hover:-translate-y-1" : "";
  const cursorClass = onClick ? "cursor-pointer" : "";

  return (
    <motion.div
      className={`rounded-xl p-6 transition-all duration-300 ${variants[variant]} ${hoverClass} ${cursorClass} ${className}`}
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

