"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui";
import { faqItems } from "@/data";
import { Plus, Minus } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-gray-50 relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="font-title text-cyan text-sm tracking-widest uppercase mb-4 block">
          Got Questions?
        </span>
        <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-black uppercase leading-none mb-6">
          FAQ
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-cyan mb-8"
        />
        <p className="font-body text-lg text-gray-600 max-w-2xl leading-relaxed">
          Find everything you need to know about Polkadot CodeCamp. Can&apos;t
          find what you&apos;re looking for? Reach out to us!
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-3xl space-y-3">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="font-title text-cyan text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-title text-sm md:text-base text-black uppercase tracking-wide pr-4">
                  {item.question}
                </h3>
              </div>
              <div
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-colors ${
                  openIndex === index ? "bg-cyan" : "bg-gray-100 group-hover:bg-gray-200"
                }`}
              >
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-black" />
                ) : (
                  <Plus className="w-4 h-4 text-black" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-body px-5 pb-5 pl-16 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
