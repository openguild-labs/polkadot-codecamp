"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, Button } from "@/components/ui";
import { challenges } from "@/data";
import { Code, User, CheckCircle, ExternalLink, Github } from "lucide-react";

export const Challenges: React.FC = () => {
  const difficultyStyles: Record<string, { bg: string; text: string }> = {
    Beginner: {
      bg: "#22c55e",
      text: "#ffffff",
    },
    Intermediate: {
      bg: "#eab308",
      text: "#000000",
    },
    Advanced: {
      bg: "#FF195F",
      text: "#ffffff",
    },
  };

  return (
    <Section id="challenges" className="relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span
          className="font-title text-sm tracking-widest uppercase mb-4 block"
          style={{ color: "#FF195F" }}
        >
          Hands-On Practice
        </span>
        <div className="flex items-center justify-center gap-4 mb-6">
          <h2
            className="font-title text-4xl md:text-5xl lg:text-6xl uppercase leading-none"
            style={{ color: "#5816CF" }}
          >
            Coding Challenges
          </h2>
          <span
            className="inline-block w-3 h-10 animate-blink"
            style={{ backgroundColor: "#FF195F" }}
          />
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1.5 mx-auto mb-8"
          style={{ backgroundColor: "#FF195F" }}
        />
        <p
          className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(0,0,0,0.6)" }}
        >
          Put your skills to the test with hands-on coding challenges. Build
          real-world applications and deploy them on Polkadot.
        </p>
      </motion.div>

      {/* Challenges Grid - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <div
                className="bg-white border-2 border-black p-8 h-full flex flex-col"
                style={{ boxShadow: "4px 4px 0 #000000" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="p-4"
                    style={{ backgroundColor: "rgba(255, 25, 95, 0.1)" }}
                  >
                    <Code className="w-8 h-8" style={{ color: "#FF195F" }} />
                  </div>
                  <span
                    className="font-title text-xs px-4 py-2 uppercase tracking-wider"
                    style={{
                      backgroundColor: difficulty.bg,
                      color: difficulty.text,
                    }}
                  >
                    {challenge.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-title text-xl md:text-2xl uppercase leading-tight mb-4"
                  style={{ color: "#000000" }}
                >
                  {challenge.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body text-base mb-6 leading-relaxed flex-grow"
                  style={{ color: "rgba(0,0,0,0.6)" }}
                >
                  {challenge.description}
                </p>

                {/* Meta */}
                <div
                  className="pt-6"
                  style={{ borderTop: "2px dashed #E2E2E2" }}
                >
                  {/* PIC */}
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4" style={{ color: "#5816CF" }} />
                    <span
                      className="font-title text-xs tracking-wide uppercase"
                      style={{ color: "rgba(0,0,0,0.5)" }}
                    >
                      PIC: {challenge.pic}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <div className="flex items-start gap-2 mb-6">
                    <CheckCircle
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      style={{ color: "#5816CF" }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: "rgba(0,0,0,0.6)" }}
                    >
                      {challenge.deliverables}
                    </span>
                  </div>

                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="md"
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
