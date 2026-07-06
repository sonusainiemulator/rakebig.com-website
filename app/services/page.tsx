import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/site";

export const metadata: Metadata = {
  title: "Perfex CRM Development Services | Complete Service Portfolio",
  description:
    "Complete Perfex CRM development services: Custom modules, SaaS development, API integration, AI, mobile apps, and more. 16+ specialized services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="animated-gradient relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            All{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">
              Perfex CRM
            </span>{" "}
            Services
          </h1>
          <p className="text-lg text-white/70">
            End-to-end Perfex CRM development services for enterprises and agencies worldwide.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group rounded-xl border border-border bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 dark:bg-black/50 dark:hover:border-purple-700"
            >
              <span className="mb-4 block text-3xl">{service.icon}</span>
              <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-[#490993]">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="flex items-center gap-1 text-xs font-medium text-[#490993] transition-all group-hover:gap-2">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
