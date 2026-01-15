"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { ArrowRight, Calendar } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-24 pb-16 bg-white">
      {/* Dotted Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-6 top-28 md:left-12 lg:left-20 md:top-32 w-28 h-36 md:w-40 md:h-48"
      >
        <Image
          src="/logo.png"
          alt="Polkadot Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block font-title text-xs md:text-sm tracking-widest px-4 py-2 bg-black text-white uppercase">
              Polkadot Solidity
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-4 tracking-tight text-black"
          >
            CODECAMP
            <br />
            2026
          </motion.h1>

          {/* Accent Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-cyan max-w-md mb-6"
          />

          {/* Tagline with blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-title text-sm md:text-base text-black tracking-widest uppercase">
              BUILD ONCE. SCALE EVERYWHERE
            </span>
            <span className="inline-block w-2 h-5 bg-cyan animate-blink" />
          </motion.div>

          {/* Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6"
          >
            <span className="font-body text-xl md:text-2xl text-black font-medium">
              Feb 15, 2026 - Mar 24, 2026
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-body text-base md:text-lg mb-10 max-w-lg leading-relaxed text-gray-600"
          >
            A 4-week online hackathon designed to discover and accelerate the
            most promising Web3 builders on Polkadot
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="primary" size="lg" href="#workshops">
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" href="#challenges">
              <Calendar className="mr-2 w-5 h-5" />
              Explore Challenges
            </Button>
          </motion.div>

          {/* Made possible by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <span className="font-body text-sm text-gray-500">
              Made possible by
            </span>
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="https://openguild.wtf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/graphics/organizer-openguild.png"
                  alt="OpenGuild"
                  width={100}
                  height={32}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </a>
              <span className="text-gray-400 font-body">×</span>
              <a
                href="https://web3.foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/graphics/organizer-web3foundation.png"
                  alt="Web3 Foundation"
                  width={120}
                  height={32}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </a>
              <span className="text-gray-400 font-body">×</span>
              <a
                href="https://polkadot.network"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/graphics/organizer-polkadot.png"
                  alt="Polkadot"
                  width={120}
                  height={32}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
