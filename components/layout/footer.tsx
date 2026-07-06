import React from "react";
import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Globe, Briefcase, GitBranch, Play } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
  Services: [
    { label: "Perfex CRM Development", href: "/perfex-crm-development" },
    { label: "Module Development", href: "/perfex-crm-module-development" },
    { label: "SaaS Development", href: "/perfex-crm-saas-development" },
    { label: "API Development", href: "/perfex-crm-api-development" },
    { label: "AI Integration", href: "/perfex-crm-openai-integration" },
    { label: "Mobile Apps", href: "/perfex-crm-mobile-app" },
  ],
  Solutions: [
    { label: "WhatsApp Integration", href: "/perfex-crm-whatsapp-integration" },
    { label: "CRM Customization", href: "/perfex-crm-customization" },
    { label: "Cloud Hosting", href: "/perfex-crm-cloud-hosting" },
    { label: "CRM Support", href: "/perfex-crm-support" },
    { label: "CRM Upgrade", href: "/perfex-crm-upgrade" },
    { label: "CRM Consulting", href: "/perfex-crm-consulting" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Hire Developer", href: "/hire-perfex-crm-developer" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5">
      <div className="bg-gradient-to-r from-[#490993] via-[#7B2CBF] to-[#A855F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to Build Your Dream Perfex CRM?
              </h3>
              <p className="text-white/80">
                Talk to our experts and get a free project consultation.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-white text-[#490993] font-semibold hover:bg-white/90 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/hire-perfex-crm-developer"
                className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Hire a Developer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#490993] to-[#A855F7] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">RakeBig Services</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              World&apos;s leading Perfex CRM Development Company. Building enterprise CRM solutions, custom modules, and AI-powered automation since 2015.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Global Remote Team
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Globe, href: siteConfig.socials.twitter, label: "Twitter" },
                { icon: Briefcase, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { icon: GitBranch, href: siteConfig.socials.github, label: "GitHub" },
                { icon: Play, href: siteConfig.socials.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} RakeBig Services. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            World&apos;s #1 Perfex CRM Development Company
          </p>
        </div>
      </div>
    </footer>
  );
}
