"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Workshops", href: "#workshops" },
    { label: "Challenges", href: "#challenges" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_4px_0_#E2E2E2]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Pixel Logo */}
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blueviolet" />
              <div className="w-4 h-4 bg-crimson" />
              <div className="w-4 h-4 bg-blueviolet" />
            </div>
            <span className="font-title text-xl text-blueviolet tracking-wider group-hover:text-crimson transition-colors">
              POLKADOT HUB CODECAMP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-title text-sm text-black tracking-wider hover:text-crimson transition-colors duration-200 relative group"
              >
                {item.label.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 hover:bg-water transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t-2 border-black pb-4"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block py-3 px-4 font-title text-sm text-black tracking-wider hover:text-crimson hover:bg-water transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label.toUpperCase()}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};
