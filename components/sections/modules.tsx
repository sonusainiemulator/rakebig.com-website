"use client";

import React from "react";
import { motion } from "framer-motion";
import { crmModules } from "@/config/site";

export function ModulesSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black/30" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/30 text-[#490993] dark:text-[#A855F7] uppercase tracking-wider mb-4">CRM Modules</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Complete <span className="gradient-text">CRM Module</span> Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Build, customize, and extend any Perfex CRM module to fit your exact business needs.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {crmModules.map((module, index) => (
            <motion.div key={module.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.04 }} className="group text-center p-4 rounded-xl border border-border bg-white dark:bg-black/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default">
              <span className="text-3xl mb-2 block">{module.icon}</span>
              <h3 className="font-medium text-xs text-foreground group-hover:text-[#490993] transition-colors">{module.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
