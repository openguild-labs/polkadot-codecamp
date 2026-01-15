"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui";
import { workshops } from "@/data";
import { BookOpen, ArrowRight, Play } from "lucide-react";

export const Workshops: React.FC = () => {
  return (
    <Section id="workshops" className="bg-gray-50 relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="font-title text-sm tracking-widest uppercase mb-4 block text-cyan">
          Learn & Build
        </span>
        <h2 className="font-title text-4xl md:text-5xl lg:text-6xl uppercase leading-none mb-6 text-black">
          Workshop Topics
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-cyan mb-8"
        />
        <p className="font-body text-lg max-w-2xl leading-relaxed text-gray-600">
          Learn from industry experts through comprehensive workshops covering
          everything from basics to advanced topics in Polkadot development.
        </p>
      </motion.div>

      {/* Workshop List */}
      <div className="space-y-4">
        {workshops.map((workshop, index) => (
          <Link key={workshop.id} href={`/workshops/${workshop.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 p-6 md:p-8 transition-all duration-300 hover:border-cyan hover:shadow-lg cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 md:w-24 flex-shrink-0">
                    <span className="font-title text-2xl md:text-3xl text-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-title text-lg md:text-xl uppercase leading-tight mb-2 text-black group-hover:text-cyan transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 line-clamp-2">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Meta & Arrow */}
                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    {workshop.videoUrl && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Play className="w-4 h-4" />
                        <span className="font-body text-xs uppercase tracking-wide">Video</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-400">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-body text-xs uppercase tracking-wide">Slides</span>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 group-hover:bg-cyan transition-colors">
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
