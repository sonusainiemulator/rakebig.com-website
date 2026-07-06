"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/config/site";

export function ProcessSection() {
  return (
    <section className="section-padding bg-white dark:bg-black" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/30 text-[#490993] dark:text-[#A855F7] uppercase tracking-wider mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">How We <span className="gradient-text">Deliver</span> Excellence</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A proven 7-step process that ensures on-time delivery and exceptional quality.</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#490993] to-[#A855F7] hidden lg:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#490993] to-[#A855F7] flex items-center justify-center text-2xl shadow-lg shadow-purple-500/20 mb-4 relative z-10">{step.icon}</div>
                <div className="w-5 h-5 rounded-full border-2 border-[#490993] bg-white dark:bg-black mx-auto -mt-2 mb-3 relative z-10 hidden lg:block" />
                <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
