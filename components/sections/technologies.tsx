"use client";

import React from "react";
import { motion } from "framer-motion";
import { technologies } from "@/config/site";

export function TechnologiesSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black/30" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/30 text-[#490993] dark:text-[#A855F7] uppercase tracking-wider mb-4">Technology Stack</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Powered by <span className="gradient-text">Modern</span> Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We leverage cutting-edge technologies to build scalable and performant Perfex CRM solutions.</p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.03 }} className="group px-5 py-3 rounded-full border border-border bg-white dark:bg-black/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default">
              <span className="text-sm font-medium text-foreground group-hover:text-[#490993] transition-colors">{tech.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">({tech.category})</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
