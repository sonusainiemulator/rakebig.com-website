import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Customization Service | Tailor Your CRM",
  description:
    "Professional Perfex CRM Customization. Modify themes, workflows, modules, and functionality. Make Perfex CRM work exactly the way your business needs.",
};

export default function CrmCustomizationPage() {
  return (
    <ServicePageTemplate
      badge="CRM Customization"
      title="Perfex CRM"
      titleHighlight="Customization Service"
      description="Transform your Perfex CRM to match your exact business workflow. We customize every aspect — from UI themes to core business logic."
      features={[
        "Theme & UI Customization",
        "Workflow Modification",
        "Custom Fields & Forms",
        "Module Configuration",
        "Email Template Design",
        "PDF Invoice Design",
        "Dashboard Widgets",
        "Custom Reports",
        "Branding & White Label",
        "Language Customization",
        "Automation Rules",
        "Permission Management",
        "API Customization",
        "Performance Tuning",
        "Mobile Responsive",
        "Accessibility Improvements",
      ]}
      benefits={[
        { title: "Brand Aligned", description: "CRM that matches your brand identity.", icon: "🎨" },
        { title: "Workflow Optimized", description: "Built around your processes.", icon: "⚙️" },
        { title: "User Friendly", description: "Intuitive UI for your team.", icon: "😊" },
        { title: "Quick Turnaround", description: "Most customizations in 3-7 days.", icon: "⚡" },
      ]}
      faqs={[
        {
          question: "Can you customize an existing Perfex CRM installation?",
          answer: "Yes. We customize both fresh installations and existing ones, including custom modules, themes, and workflows.",
        },
        {
          question: "Will customizations affect future Perfex updates?",
          answer: "We use best practices to ensure our customizations are update-safe where possible and document any update considerations.",
        },
      ]}
    />
  );
}
