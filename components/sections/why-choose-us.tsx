"use client";

import React from "react";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/config/site";

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black/30" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/30 text-[#490993] dark:text-[#A855F7] uppercase tracking-wider mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">The <span className="gradient-text">#1 Choice</span> for Perfex CRM</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Trusted by 500+ businesses worldwide for enterprise Perfex CRM development.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group p-6 rounded-xl bg-white dark:bg-black/50 border border-border hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#490993] transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
