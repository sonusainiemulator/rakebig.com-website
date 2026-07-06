import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export const metadata: Metadata = {
  title: "Perfex CRM Portfolio | Case Studies & Projects",
  description:
    "Explore our Perfex CRM project portfolio. 750+ projects across CRM, HRMS, ERP, SaaS, and more. Real-world case studies with business results.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="animated-gradient relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-lg text-white/70">
            750+ Perfex CRM projects delivered across 10+ industries worldwide.
          </p>
        </div>
      </div>
      <PortfolioGrid />
    </div>
  );
}
