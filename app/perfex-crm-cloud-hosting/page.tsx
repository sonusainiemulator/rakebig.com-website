import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Cloud Hosting | Managed AWS Hosting",
  description:
    "Managed Perfex CRM Cloud Hosting on AWS, DigitalOcean, and Cloudflare. High performance, secure, fully managed hosting with auto-scaling and backups.",
};

export default function CloudHostingPage() {
  return (
    <ServicePageTemplate
      badge="Cloud Hosting"
      title="Perfex CRM"
      titleHighlight="Cloud Hosting"
      description="Blazing-fast, secure, fully managed cloud hosting for Perfex CRM. We handle the infrastructure so you can focus on your business."
      features={[
        "AWS / DigitalOcean / Vultr",
        "Cloudflare CDN Setup",
        "SSL Certificate Management",
        "Auto-scaling Configuration",
        "Docker Containerization",
        "Load Balancer Setup",
        "Redis Cache Layer",
        "MySQL Optimization",
        "Daily Automated Backups",
        "99.99% Uptime SLA",
        "DDoS Protection",
        "Firewall Configuration",
        "SSH Security Hardening",
        "Monitoring & Alerts",
        "CI/CD Pipeline",
        "24/7 Server Monitoring",
      ]}
      benefits={[
        { title: "Blazing Fast", description: "Sub-100ms response times.", icon: "⚡" },
        { title: "99.99% Uptime", description: "Enterprise-grade reliability.", icon: "🔋" },
        { title: "Fully Managed", description: "We handle all DevOps.", icon: "🤝" },
        { title: "DDoS Protected", description: "Cloudflare enterprise protection.", icon: "🛡️" },
      ]}
      faqs={[
        {
          question: "Which cloud providers do you support?",
          answer: "We support AWS, DigitalOcean, Vultr, Hetzner, and Google Cloud. We recommend AWS for enterprise clients and DigitalOcean for cost-efficient setups.",
        },
        {
          question: "Do you handle server migration?",
          answer: "Yes. We migrate your existing Perfex CRM to the cloud with zero downtime and no data loss.",
        },
      ]}
    />
  );
}
