import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM API Development | REST API Integration",
  description:
    "Professional Perfex CRM API Development. Build custom REST APIs, webhooks, and third-party integrations for Perfex CRM. Connect your CRM to any platform.",
};

export default function ApiDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="API Development"
      title="Perfex CRM"
      titleHighlight="REST API Development"
      description="Extend Perfex CRM with powerful REST APIs. Connect to Zapier, Make, Salesforce, HubSpot, or any custom application."
      features={[
        "Custom REST API Endpoints",
        "OAuth 2.0 Authentication",
        "API Key Management",
        "Webhook Configuration",
        "Rate Limiting",
        "API Documentation (Swagger)",
        "Postman Collections",
        "Third-party Connectors",
        "Data Sync Services",
        "Real-time Webhooks",
        "GraphQL Support",
        "API Versioning",
        "Error Handling",
        "Logging & Monitoring",
        "SDK Development",
        "Testing Suite",
      ]}
      benefits={[
        { title: "Any Integration", description: "Connect Perfex to any platform.", icon: "🔗" },
        { title: "Secure APIs", description: "OAuth, JWT, API keys.", icon: "🔒" },
        { title: "Well Documented", description: "Swagger + Postman docs.", icon: "📚" },
        { title: "High Performance", description: "Optimized, cached APIs.", icon: "⚡" },
      ]}
      faqs={[
        {
          question: "Does Perfex CRM have built-in APIs?",
          answer: "Perfex CRM has a basic REST API. We extend it with custom endpoints, authentication, webhooks, and full documentation tailored to your integration needs.",
        },
        {
          question: "Can you integrate Perfex CRM with Zapier?",
          answer: "Yes. We build custom Zapier, Make (Integromat), and n8n connectors for Perfex CRM.",
        },
      ]}
    />
  );
}
