import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Support Services | 24/7 Expert Support",
  description:
    "24/7 Perfex CRM Support. Expert developers on standby for troubleshooting, bug fixes, performance issues, and emergency support for your Perfex CRM.",
};

export default function SupportPage() {
  return (
    <ServicePageTemplate
      badge="CRM Support"
      title="Perfex CRM"
      titleHighlight="Expert Support Services"
      description="Get expert Perfex CRM support when you need it most. From quick bug fixes to emergency response, our dedicated team is available 24/7."
      features={[
        "24/7 Emergency Support",
        "Bug Fixing",
        "Performance Troubleshooting",
        "Configuration Assistance",
        "Module Support",
        "Database Issues",
        "Server Configuration",
        "Email Configuration",
        "Payment Gateway Issues",
        "Integration Support",
        "User Training",
        "Documentation",
        "Screen Share Sessions",
        "Priority Response (< 2hr)",
        "Ticket System",
        "Dedicated Account Manager",
      ]}
      benefits={[
        { title: "Expert Team", description: "10+ years Perfex experience.", icon: "👨‍💻" },
        { title: "Fast Response", description: "Under 2-hour response time.", icon: "⚡" },
        { title: "24/7 Available", description: "Round-the-clock support.", icon: "🕐" },
        { title: "Proven Track Record", description: "500+ clients supported.", icon: "⭐" },
      ]}
      faqs={[
        {
          question: "How quickly do you respond to support tickets?",
          answer: "Our standard response time is under 2 hours for priority clients, and under 4 hours for standard plans. Emergency issues are addressed within 30 minutes.",
        },
        {
          question: "Do you offer one-time support or only monthly plans?",
          answer: "We offer both one-time support sessions and monthly retainer plans. For ongoing support, monthly plans provide better value.",
        },
      ]}
    />
  );
}
