import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM WhatsApp Integration | WhatsApp CRM Module",
  description:
    "Integrate WhatsApp Business API with Perfex CRM. Send invoices, notifications, and chat with customers directly from Perfex CRM. Official WhatsApp Business API.",
};

export default function WhatsappIntegrationPage() {
  return (
    <ServicePageTemplate
      badge="WhatsApp Integration"
      title="Perfex CRM"
      titleHighlight="WhatsApp Integration"
      description="Connect WhatsApp Business API directly to Perfex CRM. Send invoices, project updates, payment reminders, and support messages via WhatsApp."
      features={[
        "WhatsApp Business API Integration",
        "Send Invoices via WhatsApp",
        "Payment Reminders",
        "Project Status Updates",
        "Customer Support Chat",
        "Bulk WhatsApp Campaigns",
        "WhatsApp Templates",
        "Two-way Messaging",
        "Chat History in CRM",
        "Lead Generation via WhatsApp",
        "Auto-reply Bots",
        "Media Sharing (PDF, Images)",
        "Contact Sync",
        "Notification Triggers",
        "Analytics Dashboard",
        "Multi-number Support",
      ]}
      benefits={[
        { title: "Higher Open Rates", description: "98% WhatsApp message open rate.", icon: "📬" },
        { title: "Direct Communication", description: "Chat from inside Perfex CRM.", icon: "💬" },
        { title: "Automated", description: "Trigger messages automatically.", icon: "🤖" },
        { title: "Official API", description: "Uses official WhatsApp Business API.", icon: "✅" },
      ]}
      faqs={[
        {
          question: "Which WhatsApp API do you use?",
          answer: "We use the official WhatsApp Business API via Meta (formerly Facebook). We also support Twilio, 360dialog, and other BSPs.",
        },
        {
          question: "Can I send invoices via WhatsApp from Perfex CRM?",
          answer: "Yes. Our integration allows you to send invoices, estimates, and payment links directly via WhatsApp with one click from any Perfex CRM record.",
        },
        {
          question: "Does it support two-way messaging?",
          answer: "Yes. Customers can reply via WhatsApp and messages appear directly in the Perfex CRM customer portal and contact timeline.",
        },
      ]}
    />
  );
}
