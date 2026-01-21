"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, Button } from "@/components/ui";
import { challenges } from "@/data";
import { Code, Github, ExternalLink } from "lucide-react";

export const Challenges: React.FC = () => {
  const difficultyStyles: Record<string, { bg: string; text: string }> = {
    Beginner: {
      bg: "#00D4AA",
      text: "#000000",
    },
    Intermediate: {
      bg: "#000000",
      text: "#FFFFFF",
    },
    Advanced: {
      bg: "#FF195F",
      text: "#FFFFFF",
    },
  };

  return (
    <Section id="challenges" className="bg-white relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="font-title text-sm tracking-widest uppercase mb-4 block text-cyan">
          Hands-On Practice
        </span>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl uppercase leading-none text-black">
            Coding Challenges
          </h2>
          <span className="inline-block w-3 h-10 bg-cyan animate-blink" />
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-cyan mb-8"
        />
        <p className="font-body text-lg max-w-2xl leading-relaxed text-gray-600">
          Put your skills to the test with hands-on coding challenges. Build
          real-world applications and deploy them on Polkadot.
        </p>
      </motion.div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => {
          const difficulty =
            difficultyStyles[challenge.difficulty] || difficultyStyles.Beginner;
          return (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white border border-gray-200 p-8 h-full flex flex-col hover:border-cyan hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gray-100">
                    <Code className="w-6 h-6 text-black" />
                  </div>
                  <span
                    className="font-title text-xs px-3 py-1.5 uppercase tracking-wider"
                    style={{
                      backgroundColor: difficulty.bg,
                      color: difficulty.text,
                    }}
                  >
                    {challenge.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-title text-lg md:text-xl uppercase leading-tight mb-4 text-black">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm mb-6 leading-relaxed flex-grow text-gray-600">
                  {challenge.description}
                </p>

                {/* Meta */}
                <div className="pt-6 border-t border-gray-200">
                  {/* Deliverables */}
                  <p className="font-body text-sm text-gray-500 mb-4">
                    <span className="font-medium text-black">Deliverables:</span>{" "}
                      {challenge.deliverables}
                  </p>

                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    href={challenge.githubUrl}
                    className="w-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
