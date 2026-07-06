"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const floatingCards = [
  { title: "Module Built", value: "100+", icon: Code2, delay: 0 },
  { title: "Happy Clients", value: "500+", icon: Users, delay: 0.5 },
  { title: "Projects Done", value: "750+", icon: Star, delay: 1 },
  { title: "Years Experience", value: "10+", icon: Zap, delay: 1.5 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#490993]/20 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#A855F7]/15 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="gradient" className="text-sm py-1 px-4">🚀 World&apos;s #1 Perfex CRM Development Company</Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">Perfex CRM</span>{" "}
              Development Company
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We build Custom Perfex CRM Modules, SaaS Platforms, AI Integrations, REST APIs,
              Mobile Applications and Enterprise Automation Solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="gradient" size="xl" asChild>
                <Link href="/contact">Get Free Consultation<ArrowRight className="w-5 h-5 ml-1" /></Link>
              </Button>
              <Button size="xl" className="bg-white/10 border border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/hire-perfex-crm-developer">Hire Perfex CRM Developer</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Free Consultation</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> NDA Protected</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 24/7 Support</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Money-back Guarantee</span>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass rounded-2xl p-6 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white/50 text-xs">Perfex CRM Dashboard</p>
                  <p className="text-white font-semibold">Enterprise Analytics</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#490993] to-[#A855F7] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-end gap-2 h-24 mb-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#490993] to-[#A855F7] opacity-80"
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue", value: "$124K", trend: "+12%" },
                  { label: "Leads", value: "1,248", trend: "+8%" },
                  { label: "Projects", value: "89", trend: "+24%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/40 text-xs">{stat.label}</p>
                    <p className="text-white font-bold text-sm">{stat.value}</p>
                    <p className="text-green-400 text-xs">{stat.trend}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + card.delay, duration: 0.6 }}
                className={cn(
                  "absolute glass rounded-xl p-3 border border-white/10 shadow-lg",
                  i === 0 && "-top-6 -left-10",
                  i === 1 && "-top-2 -right-8",
                  i === 2 && "-bottom-8 -left-6",
                  i === 3 && "bottom-4 -right-10"
                )}
                style={{ animation: `float ${4 + i}s ease-in-out infinite` }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#490993] to-[#A855F7] flex items-center justify-center">
                    <card.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none">{card.value}</p>
                    <p className="text-white/50 text-xs">{card.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          {[
            { value: "100+", label: "Custom Modules" },
            { value: "500+", label: "Happy Clients" },
            { value: "750+", label: "Projects Delivered" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" " );
}
