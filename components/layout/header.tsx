"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const megaMenuItems = {
  Services: {
    columns: [
      {
        title: "Perfex CRM",
        items: [
          { label: "CRM Development", href: "/perfex-crm-development" },
          { label: "Module Development", href: "/perfex-crm-module-development" },
          { label: "SaaS Development", href: "/perfex-crm-saas-development" },
          { label: "Customization", href: "/perfex-crm-customization" },
          { label: "Migration", href: "/perfex-crm-development" },
        ],
      },
      {
        title: "API & Integration",
        items: [
          { label: "API Development", href: "/perfex-crm-api-development" },
          { label: "REST API", href: "/perfex-crm-rest-api" },
          { label: "WhatsApp Integration", href: "/perfex-crm-whatsapp-integration" },
          { label: "Cloud Hosting", href: "/perfex-crm-cloud-hosting" },
        ],
      },
      {
        title: "AI & Mobile",
        items: [
          { label: "OpenAI Integration", href: "/perfex-crm-openai-integration" },
          { label: "Gemini AI", href: "/perfex-crm-gemini-ai" },
          { label: "Mobile Apps", href: "/perfex-crm-mobile-app" },
          { label: "Dedicated Developers", href: "/hire-perfex-crm-developer" },
        ],
      },
      {
        title: "Support",
        items: [
          { label: "Maintenance", href: "/perfex-crm-maintenance" },
          { label: "CRM Support", href: "/perfex-crm-support" },
          { label: "Upgrade", href: "/perfex-crm-upgrade" },
          { label: "Consulting", href: "/perfex-crm-consulting" },
        ],
      },
    ],
  },
};

const navItems = [
  { label: "Services", href: "/services", hasMega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/#industries" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  const closeMenus = () => {
    setMobileOpen(false);
    setMegaOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMenus}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#490993] to-[#A855F7] flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-foreground">RakeBig</span>
              <span className="font-bold text-lg text-[#490993]"> Services</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasMega ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      "text-foreground/80 hover:text-[#490993] hover:bg-purple-50 dark:hover:bg-purple-950/20"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl border border-border bg-white dark:bg-black/95 shadow-2xl shadow-purple-500/10 backdrop-blur-xl overflow-hidden"
                      >
                        <div className="p-6 grid grid-cols-4 gap-6">
                          {megaMenuItems.Services.columns.map((col) => (
                            <div key={col.title}>
                              <p className="text-xs font-semibold text-[#490993] uppercase tracking-wider mb-3">
                                {col.title}
                              </p>
                              <ul className="space-y-2">
                                {col.items.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      onClick={closeMenus}
                                      className="text-sm text-foreground/70 hover:text-[#490993] transition-colors block py-0.5"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-border bg-purple-50/50 dark:bg-purple-950/10 px-6 py-4">
                          <p className="text-sm text-muted-foreground">
                            🚀 <strong className="text-foreground">Free Consultation</strong> — Get expert advice on your Perfex CRM project
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-[#490993] bg-purple-50 dark:bg-purple-950/20"
                      : "text-foreground/80 hover:text-[#490993] hover:bg-purple-50 dark:hover:bg-purple-950/20"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact" onClick={closeMenus}>Get Free Consultation</Link>
              </Button>
              <Button variant="gradient" size="sm" asChild>
                <Link href="/hire-perfex-crm-developer" onClick={closeMenus}>Hire Developer</Link>
              </Button>
            </div>
            <ThemeToggle />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-white dark:bg-black overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-[#490993] hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact" onClick={closeMenus}>Get Free Consultation</Link>
                </Button>
                <Button variant="gradient" asChild className="w-full">
                  <Link href="/hire-perfex-crm-developer" onClick={closeMenus}>Hire Developer</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
