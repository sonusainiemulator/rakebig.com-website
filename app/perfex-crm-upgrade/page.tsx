import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Upgrade Service | Safe Version Upgrades",
  description:
    "Professional Perfex CRM Upgrade service. Safe, tested upgrades to the latest Perfex CRM version without losing custom modules, data, or configurations.",
};

export default function UpgradePage() {
  return (
    <ServicePageTemplate
      badge="CRM Upgrade"
      title="Perfex CRM"
      titleHighlight="Safe Upgrade Service"
      description="Upgrade your Perfex CRM to the latest version safely. We handle module compatibility, data migration, and zero-downtime upgrades."
      features={[
        "Version Audit & Planning",
        "Staging Environment Setup",
        "Custom Module Compatibility",
        "Database Schema Migration",
        "Zero-downtime Deployment",
        "Pre-upgrade Backup",
        "Post-upgrade Testing",
        "Module Conflict Resolution",
        "Performance Comparison",
        "Rollback Plan",
        "Documentation Update",
        "Team Training",
        "30-day Post-upgrade Support",
        "Issue Tracking",
        "Security Review",
        "PHP 8.x Compatibility",
      ]}
      benefits={[
        { title: "Zero Data Loss", description: "Comprehensive pre-upgrade backup.", icon: "💾" },
        { title: "Zero Downtime", description: "Staged, tested upgrades.", icon: "⏱️" },
        { title: "Module Safe", description: "All custom modules preserved.", icon: "🧩" },
        { title: "Post-support", description: "30 days post-upgrade support.", icon: "🛡️" },
      ]}
      faqs={[
        {
          question: "Will my custom modules work after the upgrade?",
          answer: "We test all custom modules on the new version in a staging environment before going live. Any compatibility issues are fixed before the upgrade.",
        },
        {
          question: "How long does an upgrade take?",
          answer: "Most upgrades are completed in 4-8 hours. We schedule upgrades during off-peak hours to minimize business disruption.",
        },
      ]}
    />
  );
}
