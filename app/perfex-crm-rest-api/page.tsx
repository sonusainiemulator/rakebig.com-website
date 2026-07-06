import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM REST API | Custom API Solutions",
  description: "Build and extend the Perfex CRM REST API. Custom endpoints, authentication, webhooks, and API documentation for seamless integrations.",
};

export default function RestApiPage() {
  return (
    <ServicePageTemplate
      badge="REST API"
      title="Perfex CRM"
      titleHighlight="REST API Solutions"
      description="Build powerful, secure REST APIs for Perfex CRM. Enable seamless data exchange between Perfex and your entire tech stack."
      features={[
        "RESTful API Design",
        "CRUD Endpoints for All Entities",
        "Custom Business Logic APIs",
        "JWT Authentication",
        "API Gateway Setup",
        "Rate Limiting & Throttling",
        "API Analytics",
        "SDK Generation",
        "OpenAPI Spec",
        "Mock Server",
        "Sandbox Environment",
        "Error Codes & Handling",
        "Pagination & Filtering",
        "Bulk Operations",
        "File Upload APIs",
        "Real-time Events",
      ]}
      benefits={[
        { title: "Industry Standard", description: "RESTful API best practices.", icon: "📐" },
        { title: "Fully Documented", description: "OpenAPI/Swagger specs.", icon: "📖" },
        { title: "Secure", description: "Multiple auth strategies.", icon: "🔐" },
        { title: "Scalable", description: "Handles millions of requests.", icon: "🚀" },
      ]}
      faqs={[
        {
          question: "What can I do with the Perfex CRM REST API?",
          answer: "Create, read, update, and delete any CRM data (contacts, invoices, projects, etc.), trigger automations, sync data with external systems, and build mobile apps.",
        },
        {
          question: "Do you provide API documentation?",
          answer: "Yes. All APIs come with Swagger/OpenAPI documentation, Postman collections, and code samples in PHP, JavaScript, and Python.",
        },
      ]}
    />
  );
}
