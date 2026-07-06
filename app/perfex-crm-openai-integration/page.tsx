import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM OpenAI Integration | AI-Powered CRM",
  description:
    "Integrate OpenAI GPT-4 with Perfex CRM. AI email writing, lead scoring, proposal generation, smart search, and automated workflows powered by OpenAI.",
};

export default function OpenAiIntegrationPage() {
  return (
    <ServicePageTemplate
      badge="AI Integration"
      title="Perfex CRM"
      titleHighlight="OpenAI Integration"
      description="Supercharge your Perfex CRM with the power of OpenAI GPT-4. AI-assisted email writing, lead scoring, proposal generation, and intelligent automation."
      features={[
        "GPT-4 Email Writing Assistant",
        "AI Lead Scoring",
        "Proposal Auto-generation",
        "Smart Search with AI",
        "Customer Sentiment Analysis",
        "AI Chatbot for Support",
        "Automated Meeting Summaries",
        "Contract Analysis",
        "Invoice Description Generation",
        "Task Automation with AI",
        "Sales Forecasting",
        "Smart Reply Suggestions",
        "AI-powered Reports",
        "Knowledge Base Q&A",
        "Voice to Text Notes",
        "AI Translation",
      ]}
      benefits={[
        { title: "10x Productivity", description: "AI handles repetitive tasks.", icon: "🚀" },
        { title: "Better Leads", description: "AI-scored, qualified leads.", icon: "🎯" },
        { title: "Smart Automation", description: "Workflows powered by AI.", icon: "🤖" },
        { title: "Cost Reduction", description: "Reduce manual work by 70%.", icon: "💰" },
      ]}
      faqs={[
        {
          question: "Which OpenAI models do you integrate with Perfex CRM?",
          answer: "We integrate GPT-4, GPT-4 Turbo, GPT-3.5-turbo, and support custom fine-tuned models based on your business data.",
        },
        {
          question: "Is my CRM data sent to OpenAI?",
          answer: "Only the data needed for specific features is sent to OpenAI via their API. We implement data anonymization and privacy controls to protect sensitive information.",
        },
        {
          question: "Can the AI learn from our specific business data?",
          answer: "Yes. We can fine-tune models on your historical CRM data for more accurate lead scoring, proposal templates, and domain-specific AI features.",
        },
      ]}
    />
  );
}
