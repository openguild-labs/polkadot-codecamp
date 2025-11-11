"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, Section, Button } from "@/components/ui";
import { challenges } from "@/data";
import { Code, User, CheckCircle, ExternalLink, Github } from "lucide-react";

export const Challenges: React.FC = () => {
  const difficultyColors = {
    Beginner: "text-green-400 bg-green-400/10",
    Intermediate: "text-yellow-400 bg-yellow-400/10",
    Advanced: "text-red-400 bg-red-400/10",
  };

  return (
    <Section id="challenges" className="bg-polkadot-darker">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-polkadot-pink">Coding Challenges</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Put your skills to the test with hands-on coding challenges.
          Build real-world applications and deploy them on Polkadot.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <Card
            key={challenge.id}
            variant="glass"
            className="h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-polkadot-purple/10 rounded-lg">
                <Code className="w-6 h-6 text-polkadot-purple" />
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  difficultyColors[challenge.difficulty]
                }`}
              >
                {challenge.difficulty}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {challenge.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {challenge.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-polkadot-gray-700 pt-4 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{challenge.pic}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-400 mb-6">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-polkadot-purple" />
              <span>{challenge.deliverables}</span>
            </div>

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
          </Card>
        ))}
      </div>
    </Section>
  );
};

