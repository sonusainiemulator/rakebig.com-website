import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Consulting | Expert CRM Strategy",
  description:
    "Expert Perfex CRM Consulting. Get strategic guidance on CRM implementation, customization roadmap, team training, and ROI optimization from certified Perfex experts.",
};

export default function ConsultingPage() {
  return (
    <ServicePageTemplate
      badge="CRM Consulting"
      title="Perfex CRM"
      titleHighlight="Expert Consulting"
      description="Make the right Perfex CRM decisions from day one. Our certified consultants help you plan, implement, and maximize your CRM investment."
      features={[
        "CRM Requirements Analysis",
        "Implementation Roadmap",
        "Architecture Review",
        "Module Selection Guide",
        "Team Training Sessions",
        "Workflow Optimization",
        "Integration Planning",
        "Data Migration Strategy",
        "ROI Assessment",
        "Vendor Comparison",
        "Security Assessment",
        "Scalability Planning",
        "Performance Audit",
        "Code Review",
        "Best Practices Guide",
        "Ongoing Advisory",
      ]}
      benefits={[
        { title: "Expert Guidance", description: "10+ years Perfex experience.", icon: "🧠" },
        { title: "Cost Savings", description: "Avoid costly mistakes.", icon: "💰" },
        { title: "Faster ROI", description: "Optimized CRM strategy.", icon: "📈" },
        { title: "Risk Reduction", description: "Proven implementation approach.", icon: "🛡️" },
      ]}
      faqs={[
        {
          question: "What does a Perfex CRM consulting session include?",
          answer: "A consulting session includes requirements analysis, architecture planning, module recommendations, integration strategy, and a detailed action plan.",
        },
        {
          question: "Do you offer remote consulting?",
          answer: "Yes. All consulting sessions are conducted remotely via video call, screen sharing, and detailed written reports.",
        },
      ]}
    />
  );
}
