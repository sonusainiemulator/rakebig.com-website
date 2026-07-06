import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServicePageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: string[];
  benefits: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle?: string;
  ctaDescription?: string;
}

export function ServicePageTemplate({
  badge,
  title,
  titleHighlight,
  description,
  features,
  benefits,
  faqs,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Get a free consultation and project estimate from our Perfex CRM experts.",
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      <section className="animated-gradient relative overflow-hidden pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#490993]/20 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge variant="gradient" className="mb-6 px-4 py-1 text-sm">{badge}</Badge>
          <h1 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="xl" asChild>
              <Link href="/contact">
                Get Free Consultation <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/hire-perfex-crm-developer">Hire a Developer</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What&apos;s <span className="gradient-text">Included</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:border-purple-300 dark:bg-black/50 dark:hover:border-purple-700"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#490993]" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-black/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Key <span className="gradient-text">Benefits</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-white p-6 text-center transition-all hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 dark:bg-black/50 dark:hover:border-purple-700"
              >
                <span className="mb-3 block text-4xl">{benefit.icon}</span>
                <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-white p-6 transition-all hover:border-purple-300 dark:bg-black/50 dark:hover:border-purple-700"
              >
                <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{ctaTitle}</h2>
          <p className="mb-8 text-lg text-white/70">{ctaDescription}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#490993] shadow-lg transition-colors hover:bg-white/90"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/hire-perfex-crm-developer"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hire a Developer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
