import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Maintenance & Support | Monthly Plans",
  description:
    "Professional Perfex CRM Maintenance plans. Monthly updates, security patches, performance monitoring, and dedicated support for your Perfex CRM.",
};

export default function MaintenancePage() {
  return (
    <ServicePageTemplate
      badge="Maintenance"
      title="Perfex CRM"
      titleHighlight="Maintenance & Support"
      description="Keep your Perfex CRM running at peak performance. Dedicated maintenance plans with monthly updates, security patches, and 24/7 monitoring."
      features={[
        "Monthly Perfex CRM Updates",
        "Security Patch Management",
        "Performance Monitoring",
        "Daily Backups",
        "Uptime Monitoring (99.9%)",
        "Bug Fixing",
        "Minor Feature Additions",
        "Server Health Monitoring",
        "Database Optimization",
        "SSL Certificate Management",
        "Error Log Analysis",
        "Weekly Reports",
        "Priority Support",
        "Emergency Response",
        "Code Reviews",
        "Dependency Updates",
      ]}
      benefits={[
        { title: "Always Up-to-date", description: "Latest security patches applied.", icon: "🔄" },
        { title: "Zero Downtime", description: "99.9% uptime guarantee.", icon: "⚡" },
        { title: "Proactive Monitoring", description: "We fix issues before you notice.", icon: "🔍" },
        { title: "Peace of Mind", description: "Focus on business, not tech.", icon: "😌" },
      ]}
      faqs={[
        {
          question: "What is included in your maintenance plans?",
          answer: "Monthly plans include Perfex CRM version updates, security patches, daily backups, uptime monitoring, bug fixes, and priority support.",
        },
        {
          question: "Do you maintain custom modules?",
          answer: "Yes. We maintain both default Perfex CRM modules and any custom modules we have built or that you provide to us.",
        },
      ]}
    />
  );
}
