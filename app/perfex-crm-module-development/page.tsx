import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Module Development | Custom Module Builders",
  description:
    "Expert Perfex CRM Module Development. Build powerful custom modules for Perfex CRM — HR, Inventory, Finance, AI, and more. 100+ modules delivered.",
  keywords: ["Perfex CRM Module Development", "Custom Perfex Module", "Perfex CRM Plugin"],
};

export default function ModuleDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Module Development"
      title="Custom Perfex CRM"
      titleHighlight="Module Development"
      description="Build powerful, production-ready custom modules for Perfex CRM. From simple feature additions to complex enterprise modules with AI capabilities."
      features={[
        "Custom Module Architecture",
        "CodeIgniter MVC Modules",
        "Database Schema Design",
        "REST API Endpoints",
        "Frontend UI (Bootstrap)",
        "Admin Panel Integration",
        "Role-based Access Control",
        "Multi-language Support",
        "PDF/Excel Export",
        "Email Notifications",
        "Webhook Support",
        "Automated Testing",
        "Documentation",
        "Module Updates",
        "Performance Optimization",
        "Security Audit",
      ]}
      benefits={[
        { title: "100+ Modules Built", description: "Battle-tested modules for every use case.", icon: "🧩" },
        { title: "Clean Architecture", description: "SOLID principles, maintainable code.", icon: "🏗️" },
        { title: "Fast Delivery", description: "Most modules delivered in 1-2 weeks.", icon: "⚡" },
        { title: "Full Support", description: "Lifetime support for our modules.", icon: "🛠️" },
      ]}
      faqs={[
        {
          question: "What types of modules can you build?",
          answer: "We build any type of Perfex CRM module: HR, Inventory, Finance, AI chat, WhatsApp, payment gateways, e-commerce, project management, and more.",
        },
        {
          question: "Are your modules compatible with Perfex CRM updates?",
          answer: "Yes. We follow Perfex CRM best practices and coding standards to ensure compatibility with future updates.",
        },
        {
          question: "Can I get the source code?",
          answer: "Absolutely. All custom modules come with full, unencrypted source code and detailed documentation.",
        },
      ]}
    />
  );
}
