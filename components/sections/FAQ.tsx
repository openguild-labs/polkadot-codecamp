"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui";
import { faqItems } from "@/data";
import { Plus } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white relative">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-blueviolet/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-crimson/20" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="font-title text-crimson text-sm tracking-widest uppercase mb-3 block">
          Got Questions?
        </span>
        <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-blueviolet uppercase leading-none mb-4">
          FAQ
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-2 bg-blueviolet mx-auto mb-6"
        />
        <p className="font-body text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
          Find everything you need to know about Polkadot CodeCamp. Can&apos;t
          find what you&apos;re looking for? Reach out to us!
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white border-2 border-black shadow-[4px_4px_0_#000000] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-water/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="font-title text-crimson text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-title text-base md:text-lg text-black uppercase tracking-wide pr-4">
                  {item.question}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-8 h-8 bg-blueviolet flex items-center justify-center group-hover:bg-crimson transition-colors"
              >
                <Plus className="w-5 h-5 text-white" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-body px-6 pb-6 pl-20 text-black/70 leading-relaxed border-t-2 border-dashed border-platinum pt-4">
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
