"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, Section } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-polkadot-darker via-polkadot-dark to-polkadot-darker relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-polkadot-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-polkadot-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-polkadot-pink/10 border border-polkadot-pink/30 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-polkadot-pink" />
          <span className="text-sm text-polkadot-pink font-medium">
            Join the Polkadot Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-polkadot-pink">Polkadot Hub</span>
          <br />
          <span className="text-white">CodeCamp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Master Polkadot Hub development through hands-on workshops and coding
          challenges. Build the future of decentralized applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg" href="#workshops">
            Explore Workshops
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" href="#challenges">
            View Challenges
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-polkadot-pink mb-2">5</div>
            <div className="text-gray-400">Expert Workshops</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-polkadot-pink mb-2">4</div>
            <div className="text-gray-400">Coding Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-polkadot-pink mb-2">∞</div>
            <div className="text-gray-400">Possibilities</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
