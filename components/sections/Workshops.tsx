"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, Section } from "@/components/ui";
import { workshops } from "@/data";
import { BookOpen, User, CheckCircle } from "lucide-react";

export const Workshops: React.FC = () => {
  return (
    <Section id="workshops" className="bg-polkadot-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-polkadot-pink">Workshop Topics</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Learn from industry experts through comprehensive workshops covering everything
          from basics to advanced topics in Polkadot development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <Link key={workshop.id} href={`/workshops/${workshop.slug}`}>
            <Card
              variant="gradient"
              className="h-full cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-polkadot-pink/10 rounded-lg group-hover:bg-polkadot-pink/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-polkadot-pink" />
                </div>
                <span className="text-sm text-gray-400">#{index + 1}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-polkadot-pink transition-colors">
                {workshop.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {workshop.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-polkadot-gray-700 pt-4 mt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{workshop.pic}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-500 mt-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-polkadot-pink" />
                <span className="line-clamp-2">{workshop.deliverables}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
};

