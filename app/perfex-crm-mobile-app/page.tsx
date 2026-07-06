import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Perfex CRM Mobile App Development | Flutter iOS & Android",
  description:
    "Build a cross-platform Perfex CRM mobile app for iOS and Android using Flutter. Full CRM functionality on mobile with offline support and push notifications.",
};

export default function MobileAppPage() {
  return (
    <ServicePageTemplate
      badge="Mobile App"
      title="Perfex CRM"
      titleHighlight="Flutter Mobile App"
      description="Take Perfex CRM on the go. We build beautiful, high-performance Flutter mobile apps for iOS and Android that connect to your Perfex CRM API."
      features={[
        "Flutter (iOS + Android)",
        "Full CRM Feature Access",
        "Offline Mode",
        "Push Notifications",
        "Biometric Authentication",
        "Invoice Management",
        "Project Tracking",
        "Lead Management",
        "Customer Portal App",
        "Real-time Dashboard",
        "Document Upload",
        "Chat & Support",
        "GPS & Location Features",
        "Dark/Light Theme",
        "Multi-language",
        "App Store Publishing",
      ]}
      benefits={[
        { title: "Cross-platform", description: "One codebase for iOS & Android.", icon: "📱" },
        { title: "Native Performance", description: "Smooth 60fps Flutter UI.", icon: "⚡" },
        { title: "Offline Ready", description: "Works without internet.", icon: "📶" },
        { title: "Beautiful UI", description: "Premium mobile design.", icon: "🎨" },
      ]}
      faqs={[
        {
          question: "Why Flutter for Perfex CRM mobile app?",
          answer: "Flutter provides native performance, beautiful UI, and a single codebase for both iOS and Android, reducing development time and cost by ~50%.",
        },
        {
          question: "Will the app connect to our existing Perfex CRM?",
          answer: "Yes. We build the mobile app to connect to your existing Perfex CRM via REST API. No changes to your CRM are required.",
        },
        {
          question: "Do you publish to App Store and Google Play?",
          answer: "Yes. We handle the complete submission process for both Apple App Store and Google Play Store.",
        },
      ]}
    />
  );
}
