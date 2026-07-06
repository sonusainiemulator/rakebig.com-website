import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/config/blog";

export const metadata: Metadata = {
  title: "Perfex CRM Blog | Development Guides & Tutorials",
  description:
    "Expert guides on Perfex CRM development, custom modules, SaaS development, API integration, AI, and deployment. Written by certified Perfex developers.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="animated-gradient relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Perfex CRM{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7B2CBF] bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-white/70">
            Expert guides, tutorials, and insights for Perfex CRM developers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border bg-white p-6 transition-all hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:bg-black/50 dark:hover:border-purple-700"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#490993] dark:bg-purple-950/30 dark:text-[#A855F7]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="mb-3 text-xl leading-snug font-bold text-foreground transition-colors group-hover:text-[#490993]">
                {post.title}
              </h2>
              <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
              <span className="flex items-center gap-1 text-xs font-medium text-[#490993] transition-all group-hover:gap-2">
                Read more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
