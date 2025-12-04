"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui";
import { workshops } from "@/data";
import { BookOpen, User, CheckCircle, ArrowRight } from "lucide-react";

export const Workshops: React.FC = () => {
  return (
    <Section id="workshops" className="bg-white relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span className="font-title text-sm tracking-widest uppercase mb-4 block text-crimson">
          Learn & Build
        </span>
        <h2 className="font-title text-4xl md:text-5xl lg:text-6xl uppercase leading-none mb-6 text-blueviolet">
          Workshop Topics
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "160px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1.5 mx-auto mb-8 bg-blueviolet"
        />
        <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed text-black/60">
          Learn from industry experts through comprehensive workshops covering
          everything from basics to advanced topics in Polkadot development.
        </p>
      </motion.div>

      {/* Workshop List - Vertical Stack */}
      <div className="max-w-4xl mx-auto space-y-6">
        {workshops.map((workshop, index) => (
          <Link key={workshop.id} href={`/workshops/${workshop.slug}`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-black p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 cursor-pointer relative shadow-[4px_4px_0_#000000] hover:shadow-[6px_6px_0_#000000]">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:w-20 flex-shrink-0">
                    <span className="font-title text-3xl md:text-4xl text-crimson">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="p-3 transition-all duration-300 group-hover:scale-110 bg-blueviolet/10">
                      <BookOpen className="w-6 h-6 text-blueviolet" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="font-title text-xl md:text-2xl uppercase leading-tight mb-3 text-black group-hover:text-blueviolet transition-colors">
                      {workshop.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-base mb-4 leading-relaxed text-black/60">
                      {workshop.description}
                    </p>

                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-6 pt-4 border-t-2 border-dashed border-platinum">
                      {/* PIC */}
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blueviolet" />
                        <span className="font-title text-xs tracking-wide uppercase text-black/50">
                          PIC: {workshop.pic}
                        </span>
                      </div>

                      {/* Deliverables */}
                      <div className="flex items-center gap-2 flex-1">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-crimson" />
                        <span className="font-body text-sm line-clamp-1 text-black/60">
                          {workshop.deliverables}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-blueviolet">
                        <span className="font-title text-xs uppercase tracking-wider hidden sm:inline">
                          View
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
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
