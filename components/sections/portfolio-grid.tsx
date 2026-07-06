"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "CRM", "HRMS", "ERP", "SaaS", "Construction", "Healthcare", "Retail", "Logistics"];

const projects = [
  { id: 1, title: "Enterprise CRM Platform", category: "CRM", description: "Multi-tenant Perfex CRM SaaS platform for 200+ agencies.", tech: ["Perfex CRM", "PHP", "MySQL", "Redis"], result: "300% faster operations" },
  { id: 2, title: "HR Management Suite", category: "HRMS", description: "Complete HR module with payroll, attendance, and leave management.", tech: ["Perfex CRM", "Flutter", "REST API"], result: "80% HR process automation" },
  { id: 3, title: "Construction CRM", category: "Construction", description: "Custom CRM for a construction company managing 500+ projects.", tech: ["Perfex CRM", "Custom Modules", "AWS"], result: "50% project delivery improvement" },
  { id: 4, title: "Healthcare Patient CRM", category: "Healthcare", description: "HIPAA-compliant patient management CRM built on Perfex.", tech: ["Perfex CRM", "Encryption", "Docker"], result: "10,000+ patients managed" },
  { id: 5, title: "Retail ERP System", category: "ERP", description: "Full ERP with inventory, POS, and e-commerce integration.", tech: ["Perfex CRM", "WooCommerce", "Stripe"], result: "$2M+ revenue tracked" },
  { id: 6, title: "Logistics Tracking CRM", category: "Logistics", description: "Real-time shipment tracking and client communication CRM.", tech: ["Perfex CRM", "Google Maps API", "WebSockets"], result: "95% on-time delivery" },
  { id: 7, title: "SaaS Agency Platform", category: "SaaS", description: "White-label CRM SaaS for digital marketing agencies.", tech: ["Perfex CRM", "Multi-tenant", "Stripe"], result: "1,200+ agency clients" },
  { id: 8, title: "Retail POS Integration", category: "Retail", description: "Seamless POS and inventory sync with Perfex CRM.", tech: ["Perfex CRM", "REST API", "Redis"], result: "Real-time stock updates" },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#490993] to-[#A855F7] text-white shadow-lg shadow-purple-500/20"
                : "border border-border text-foreground hover:border-purple-300 dark:hover:border-purple-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group rounded-xl border border-border bg-white p-6 transition-all hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:bg-black/50 dark:hover:border-purple-700"
            >
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#490993] dark:bg-purple-950/30 dark:text-[#A855F7]">
                {project.category}
              </span>

              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-[#490993]">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-muted-foreground dark:bg-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                <span>✓</span>
                <span>{project.result}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
