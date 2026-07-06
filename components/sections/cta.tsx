"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#490993]/30 blur-[120px] -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">Perfex CRM</span>?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Join 500+ enterprises that trust RakeBig Services for their Perfex CRM development. Get a free consultation and project estimate today.</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#490993] font-semibold hover:bg-white/90 transition-colors shadow-lg"><MessageCircle className="w-5 h-5" />Get Free Consultation</Link>
            <Link href="/hire-perfex-crm-developer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Hire a Developer<ArrowRight className="w-5 h-5" /></Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 justify-center text-white/60 text-sm">
            <span>✓ Free 30-min Consultation</span>
            <span>✓ No Obligation Quote</span>
            <span>✓ NDA Available</span>
            <span>✓ Response in 2 Hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
