"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/site";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section className="section-padding bg-white dark:bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/30 text-[#490993] dark:text-[#A855F7] uppercase tracking-wider mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Complete <span className="gradient-text">Perfex CRM</span> Development Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From custom module development to AI integration, we cover every aspect of the Perfex CRM ecosystem.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.05 }}>
              <Link href={service.href} className="group block h-full">
                <div className={cn("h-full p-6 rounded-xl border border-border", "bg-white dark:bg-black/50", "hover:border-purple-300 dark:hover:border-purple-700", "hover:shadow-lg hover:shadow-purple-500/10", "transition-all duration-300", "relative overflow-hidden")}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#490993]/5 to-[#A855F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <span className="text-3xl mb-4 block">{service.icon}</span>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#490993] transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <span className="text-xs font-medium text-[#490993] flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#490993] to-[#A855F7] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">Get Free Consultation<ArrowRight className="w-5 h-5" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
