import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogPosts } from "@/config/blog";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const postContent: Record<string, string> = {
  "custom-perfex-crm-module-development": `
## Introduction

Building a custom module for Perfex CRM is one of the most powerful ways to extend its functionality. This guide covers everything you need to know to build production-ready modules.

## Prerequisites

- PHP 8.0+
- Perfex CRM installed
- Basic understanding of CodeIgniter 3
- MySQL knowledge

## Module Structure

Every Perfex CRM module follows a standardized directory structure:

\`\`\`
modules/
  your_module/
    controllers/
      Your_module.php
    models/
      Your_module_model.php
    views/
      index.php
    language/
      english/
        your_module_lang.php
    your_module.php  (init file)
\`\`\`

## Creating the Module Init File

The module init file (\`your_module.php\`) is the entry point. It registers hooks, menu items, and dependencies:

\`\`\`php
<?php
defined('BASEPATH') or exit('No direct script access allowed');

register_language_files(APP_MODULES_PATH . 'your_module/language/');

hooks()->add_action('app_menu', 'your_module_sidebar_menu');

function your_module_sidebar_menu() {
    $CI = &get_instance();
    if (has_permission('your_module', '', 'view')) {
        echo '<li>
            <a href="' . admin_url('your_module') . '">
                <i class="fa fa-cube menu-icon"></i>
                <span>Your Module</span>
            </a>
        </li>';
    }
}
\`\`\`

## Database Schema

Use Perfex CRM's built-in migration system for database changes:

\`\`\`php
if (!$CI->db->table_exists(db_prefix() . 'your_module_items')) {
    $CI->db->query('CREATE TABLE ' . db_prefix() . 'your_module_items (
        id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        status TINYINT(1) DEFAULT 1,
        datecreated DATETIME,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
}
\`\`\`

## Best Practices

1. **Always use db_prefix()** for table names
2. **Use hooks** for extending core functionality
3. **Follow PSR coding standards**
4. **Add proper permissions** for role-based access
5. **Internationalize** all strings

## Conclusion

With this foundation, you can build powerful custom modules for Perfex CRM. Contact RakeBig Services for professional module development.
  `,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const content = postContent[slug] || `
## ${post.title}

${post.description}

This is a comprehensive guide covering all aspects of ${post.title}.

## Key Points

- Expert insights from our certified Perfex CRM developers
- Real-world examples from 750+ projects
- Step-by-step implementation guides
- Best practices and optimization tips

## Get Expert Help

Need professional assistance? Our team of Perfex CRM experts is ready to help you implement this and much more.

[Contact us](/contact) for a free consultation.
  `;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#490993]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>

        <div className="mb-8">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#490993] dark:bg-purple-950/30 dark:text-[#A855F7]">
            {post.category}
          </span>
          <h1 className="mb-6 text-3xl leading-snug font-bold text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-a:text-[#490993] prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 dark:prose-code:bg-white/10 prose-pre:rounded-xl prose-pre:bg-gray-900">
          <div
            className="space-y-4 leading-relaxed text-foreground/80"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
          />
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#490993] via-[#7B2CBF] to-[#A855F7] p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">Need Help with Perfex CRM?</h2>
          <p className="mb-6 text-white/80">
            Get expert Perfex CRM development, modules, and integrations from our certified team.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#490993] transition-colors hover:bg-white/90"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-2xl font-bold">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 text-xl font-bold">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```(\w+)?\n([\s\S]+?)```/gm, '<pre class="my-4 overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm text-gray-100"><code>$2</code></pre>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#490993] hover:underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="mb-1 flex items-start gap-2"><span class="mt-1 text-[#490993]">•</span><span>$1</span></li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="mb-1">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(?!<[hl]|<li|<pre)(.+)$/gm, '$1');
}
