import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Gemini AI Integration | Google AI for CRM",
  description:
    "Integrate Google Gemini AI with Perfex CRM. Multimodal AI features, document analysis, smart automation, and advanced AI capabilities from Google DeepMind.",
};

export default function GeminiAiPage() {
  return (
    <ServicePageTemplate
      badge="Gemini AI"
      title="Perfex CRM"
      titleHighlight="Gemini AI Integration"
      description="Bring Google Gemini's multimodal AI capabilities into Perfex CRM. Analyze documents, generate content, and automate workflows with state-of-the-art AI."
      features={[
        "Gemini Pro Integration",
        "Multimodal Document Analysis",
        "Invoice Data Extraction",
        "Contract Review with AI",
        "Image Analysis for Assets",
        "AI Content Generation",
        "Smart CRM Search",
        "Gemini-powered Chatbot",
        "Data Summarization",
        "Automated Data Entry",
        "Sales Insights",
        "Customer Journey Analysis",
        "Email Campaign Optimization",
        "AI-powered Forecasting",
        "Multi-language Support",
        "Real-time AI Assistance",
      ]}
      benefits={[
        { title: "Multimodal AI", description: "Process text, images, and documents.", icon: "🧠" },
        { title: "Google Powered", description: "State-of-the-art Gemini models.", icon: "🌟" },
        { title: "Cost Effective", description: "Competitive pricing vs GPT-4.", icon: "💡" },
        { title: "Fast Processing", description: "Ultra-low latency responses.", icon: "⚡" },
      ]}
      faqs={[
        {
          question: "What is Google Gemini?",
          answer: "Gemini is Google DeepMind's most capable AI model, supporting text, code, images, audio, and video. It competes directly with GPT-4 and Claude.",
        },
        {
          question: "Can Gemini analyze documents in Perfex CRM?",
          answer: "Yes. Gemini's multimodal capabilities allow it to analyze uploaded PDFs, contracts, invoices, and images directly within Perfex CRM.",
        },
      ]}
    />
  );
}
