import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process";
import { TechnologiesSection } from "@/components/sections/technologies";
import { IndustriesSection } from "@/components/sections/industries";
import { ModulesSection } from "@/components/sections/modules";
import { CTASection } from "@/components/sections/cta";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Enterprise Perfex CRM Development Company`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ModulesSection />
      <IndustriesSection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
    </>
  );
}
