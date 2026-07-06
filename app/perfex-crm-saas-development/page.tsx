import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM SaaS Development | Multi-Tenant CRM Platform",
  description:
    "Build a multi-tenant SaaS platform on Perfex CRM. Launch your own CRM-as-a-Service business with subscription billing, tenant isolation, and enterprise features.",
};

export default function SaasDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="SaaS Development"
      title="Perfex CRM"
      titleHighlight="SaaS Platform Development"
      description="Launch your own Perfex CRM SaaS business. We build complete multi-tenant platforms with subscription management, tenant isolation, and white-label capabilities."
      features={[
        "Multi-tenant Architecture",
        "Tenant Isolation (DB per tenant)",
        "Subscription Management",
        "Stripe/PayPal Billing",
        "Custom Domain Mapping",
        "White Label Branding",
        "Admin Super Panel",
        "Tenant Onboarding Flow",
        "Usage Limits & Quotas",
        "SaaS Analytics Dashboard",
        "Email Campaigns",
        "Affiliate System",
        "API Access Management",
        "Scalable Infrastructure",
        "Auto-backup System",
        "99.9% Uptime SLA",
      ]}
      benefits={[
        { title: "Revenue Ready", description: "Built-in subscription billing.", icon: "💰" },
        { title: "Scalable", description: "Handle 1000s of tenants.", icon: "📈" },
        { title: "White Label", description: "Your brand, your SaaS.", icon: "🏷️" },
        { title: "Enterprise Security", description: "Bank-grade data isolation.", icon: "🔒" },
      ]}
      faqs={[
        {
          question: "What is a Perfex CRM SaaS platform?",
          answer: "It is a multi-tenant version of Perfex CRM where multiple businesses (tenants) each have their own isolated CRM environment, managed from a central admin panel and billed via subscriptions.",
        },
        {
          question: "How long does a SaaS platform take to build?",
          answer: "A complete Perfex CRM SaaS platform typically takes 2-4 months depending on feature requirements.",
        },
        {
          question: "Do you handle the hosting and deployment?",
          answer: "Yes. We deploy on AWS, DigitalOcean, or your preferred cloud with full DevOps setup including CI/CD, monitoring, and auto-scaling.",
        },
      ]}
    />
  );
}
