import { siteConfig } from "@/config/site";
import { blogPosts } from "@/config/blog";

export function GET() {
  const staticRoutes = [
    "/",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/hire-perfex-crm-developer",
    "/perfex-crm-development",
    "/perfex-crm-module-development",
    "/perfex-crm-custom-module",
    "/perfex-crm-customization",
    "/perfex-crm-saas-development",
    "/perfex-crm-api-development",
    "/perfex-crm-rest-api",
    "/perfex-crm-whatsapp-integration",
    "/perfex-crm-openai-integration",
    "/perfex-crm-gemini-ai",
    "/perfex-crm-mobile-app",
    "/perfex-crm-maintenance",
    "/perfex-crm-support",
    "/perfex-crm-upgrade",
    "/perfex-crm-cloud-hosting",
    "/perfex-crm-consulting",
  ];

  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);
  const allRoutes = [...staticRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${siteConfig.url}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
