import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Star, Clock, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Perfex CRM Developer | Dedicated CRM Experts",
  description:
    "Hire dedicated Perfex CRM developers on an hourly or monthly basis. Expert CodeIgniter, PHP, and Perfex CRM developers available immediately. NDA protected.",
};

const hiringModels = [
  {
    title: "Part-time",
    hours: "80 hrs/month",
    description: "Perfect for ongoing maintenance and minor features.",
    icon: Clock,
  },
  {
    title: "Full-time",
    hours: "160 hrs/month",
    description: "Dedicated developer for your project.",
    icon: Users,
  },
  {
    title: "Project-based",
    hours: "Fixed scope",
    description: "Define scope, we deliver on time and budget.",
    icon: Star,
  },
];

const skills = [
  "Perfex CRM Expert",
  "CodeIgniter 4",
  "PHP 8.3",
  "MySQL / MariaDB",
  "REST API Development",
  "JavaScript / jQuery",
  "Bootstrap 5",
  "Flutter (Mobile)",
  "React / Next.js",
  "Docker / AWS",
  "OpenAI Integration",
  "WhatsApp API",
];

export default function HireDeveloperPage() {
  return (
    <div className="min-h-screen">
      <section className="animated-gradient relative overflow-hidden pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase">
            Hire Developers
          </span>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Hire Expert{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">
              Perfex CRM Developers
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Get dedicated Perfex CRM developers with 5+ years of experience. Available immediately, NDA protected, and backed by our quality guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-[#490993] to-[#A855F7] px-8 py-4 font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Profiles
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Flexible <span className="gradient-text">Hiring Models</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {hiringModels.map((model) => (
              <div
                key={model.title}
                className="rounded-2xl border border-border p-8 text-center transition-all hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:border-purple-700"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#490993] to-[#A855F7]">
                  <model.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-foreground">{model.title}</h3>
                <p className="mb-3 font-semibold text-[#490993]">{model.hours}</p>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-black/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 transition-all hover:border-purple-300 dark:bg-black/50 dark:hover:border-purple-700"
              >
                <CheckCircle className="h-4 w-4 text-[#490993]" />
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "NDA Protected", description: "Full confidentiality guaranteed." },
              { icon: Star, title: "5-star Rated", description: "Consistently top-rated service." },
              { icon: Clock, title: "Quick Start", description: "Developer onboarding in 24 hours." },
              { icon: Users, title: "10+ Devs Available", description: "Scale up instantly." },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border p-6 text-center transition-all hover:border-purple-300 dark:hover:border-purple-700"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#490993] to-[#A855F7]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#490993] via-[#7B2CBF] to-[#A855F7] p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Hire a Perfex CRM Developer?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/80">
              Share your requirements and get matched with the best Perfex CRM developer for your project in 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#490993] shadow-lg transition-colors hover:bg-white/90"
            >
              Start Hiring Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
