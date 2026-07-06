"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="animated-gradient py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Your{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">
              Dream CRM
            </span>
          </h1>
          <p className="text-white/70 text-lg">
            Tell us about your project and get a free consultation within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "hello@rakebig.com", href: "mailto:hello@rakebig.com" },
                { icon: Phone, title: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                { icon: MessageSquare, title: "WhatsApp", value: "Chat with us", href: "#" },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-purple-300 dark:hover:border-purple-700 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#490993] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium text-foreground group-hover:text-[#490993] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Our team will get back to you within 2 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-border bg-white dark:bg-black/50 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#490993]/30 focus:border-[#490993] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#490993]/30 focus:border-[#490993] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#490993]/30 focus:border-[#490993] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#490993]/30 focus:border-[#490993] transition-colors">
                      <option>Perfex CRM Development</option>
                      <option>Custom Module Development</option>
                      <option>SaaS Development</option>
                      <option>API Development</option>
                      <option>AI Integration</option>
                      <option>Mobile App</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Project Details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project requirements, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#490993]/30 focus:border-[#490993] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Your information is secure and never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
