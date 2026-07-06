import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Development Company | Custom Perfex CRM Solutions",
  description:
    "Leading Perfex CRM Development Company. We build custom Perfex CRM solutions, modules, SaaS platforms, and enterprise automation. 500+ projects delivered.",
  keywords: ["Perfex CRM Development", "Perfex CRM Development Company", "Custom Perfex CRM"],
};

export default function PerfexCrmDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Perfex CRM Development"
      title="Enterprise"
      titleHighlight="Perfex CRM Development"
      description="We are the world's leading Perfex CRM Development Company. From custom modules to full SaaS platforms — we build enterprise Perfex CRM solutions that scale."
      features={[
        "Custom Perfex CRM Development",
        "Module Development",
        "SaaS Platform Build",
        "API Integration",
        "White Label CRM",
        "Performance Optimization",
        "Security Hardening",
        "Multi-tenant Architecture",
        "Mobile App (Flutter)",
        "AI Integration",
        "Third-party Integrations",
        "CRM Migration",
        "Cloud Deployment",
        "DevOps Setup",
        "Ongoing Maintenance",
        "24/7 Support",
      ]}
      benefits={[
        { title: "10+ Years Experience", description: "Decade of Perfex CRM expertise.", icon: "🏆" },
        { title: "500+ Projects", description: "Delivered globally across industries.", icon: "🚀" },
        { title: "Enterprise Grade", description: "Scalable, secure architecture.", icon: "🏗️" },
        { title: "24/7 Support", description: "Dedicated support team.", icon: "🛠️" },
      ]}
      faqs={[
        {
          question: "What is Perfex CRM?",
          answer: "Perfex CRM is a self-hosted, open-source customer relationship management system built on CodeIgniter. It is highly customizable and widely used by agencies and enterprises.",
        },
        {
          question: "How long does a custom Perfex CRM project take?",
          answer: "A basic custom module takes 1-2 weeks. Full SaaS platforms typically take 2-4 months. We provide a detailed timeline during our free consultation.",
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Yes, we offer ongoing maintenance, updates, and 24/7 dedicated support for all our Perfex CRM development clients.",
        },
        {
          question: "Can you migrate from another CRM to Perfex?",
          answer: "Absolutely. We handle full CRM migrations with zero data loss, including from Salesforce, HubSpot, Zoho, and custom CRMs.",
        },
      ]}
    />
  );
}
