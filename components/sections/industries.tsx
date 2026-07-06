"use client";

import React from "react";
import { motion } from "framer-motion";
import { industries } from "@/config/site";

export function IndustriesSection() {
  return (
    <section className="section-padding bg-white dark:bg-black" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/30 text-[#490993] dark:text-[#A855F7] uppercase tracking-wider mb-4">Industries</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Serving <span className="gradient-text">10+ Industries</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our Perfex CRM solutions power businesses across every major industry.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div key={industry.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="group text-center p-6 rounded-xl border border-border bg-white dark:bg-black/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default">
              <span className="text-4xl mb-3 block">{industry.icon}</span>
              <h3 className="font-medium text-sm text-foreground group-hover:text-[#490993] transition-colors">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
