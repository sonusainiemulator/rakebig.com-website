"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, MessageCircle, Send, User, X, Zap } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What Perfex CRM services do you offer?",
  "How much does a custom module cost?",
  "Can you build a SaaS CRM platform?",
  "How do I hire a Perfex CRM developer?",
];

const knowledgeBase: Record<string, string> = {
  default:
    "Hi! I'm **Rake AI**, your Perfex CRM expert assistant. I can help you with:\n\n• Information about our Perfex CRM development services\n• Project estimates and timelines\n• Technical questions about Perfex CRM\n• Connecting you with our team\n\nWhat can I help you with today?",
  services:
    "We offer **16+ Perfex CRM development services**:\n\n• ✅ Custom Module Development\n• ✅ Perfex CRM SaaS Platforms\n• ✅ REST API Development\n• ✅ AI Integration (OpenAI, Claude, Gemini)\n• ✅ WhatsApp Integration\n• ✅ Flutter Mobile Apps\n• ✅ Cloud Hosting & DevOps\n• ✅ 24/7 Maintenance & Support\n\nWould you like details on any specific service?",
  pricing:
    "Our pricing depends on the project scope:\n\n• **Custom Module**: $500 – $3,000\n• **SaaS Platform**: $5,000 – $25,000+\n• **Dedicated Developer**: $1,500/month\n• **Maintenance Plans**: $200/month+\n\n📞 For an accurate quote, [contact us](/contact) for a free consultation.",
  timeline:
    "Typical project timelines:\n\n• **Simple Module**: 1-2 weeks\n• **Complex Module**: 2-4 weeks\n• **SaaS Platform**: 2-4 months\n• **Mobile App**: 6-10 weeks\n\nWe use agile development with weekly updates.",
  hire:
    "You can **hire a dedicated Perfex CRM developer** on:\n\n• Part-time (80 hrs/month)\n• Full-time (160 hrs/month)\n• Project-based\n\nOur developers have 5+ years of Perfex CRM experience. [Hire now](/hire-perfex-crm-developer)",
};

function getResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you build")) {
    return knowledgeBase.services;
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("rate")) {
    return knowledgeBase.pricing;
  }
  if (lower.includes("timeline") || lower.includes("how long") || lower.includes("time")) {
    return knowledgeBase.timeline;
  }
  if (lower.includes("hire") || lower.includes("developer") || lower.includes("dedicated")) {
    return knowledgeBase.hire;
  }
  if (lower.includes("saas") || lower.includes("multi-tenant")) {
    return "We specialize in **Perfex CRM SaaS Development**. We build complete multi-tenant platforms with:\n\n• Tenant isolation & management\n• Subscription billing (Stripe/PayPal)\n• White-label branding\n• Auto-scaling infrastructure\n\nTypical timeline: 2-4 months. [Learn more](/perfex-crm-saas-development)";
  }
  if (lower.includes("api") || lower.includes("integration")) {
    return "We build **custom REST APIs** for Perfex CRM including:\n\n• Custom CRUD endpoints\n• OAuth & JWT authentication\n• Webhook support\n• Third-party connectors (Zapier, Make, etc.)\n• Full Swagger documentation\n\n[Learn about our API services](/perfex-crm-api-development)";
  }
  if (lower.includes("whatsapp")) {
    return "We integrate **WhatsApp Business API** with Perfex CRM:\n\n• Send invoices via WhatsApp\n• Two-way messaging\n• Automated notifications\n• Bulk campaigns\n• Official Meta API\n\n[Learn more](/perfex-crm-whatsapp-integration)";
  }
  if (lower.includes("ai") || lower.includes("openai") || lower.includes("gpt") || lower.includes("gemini")) {
    return "We integrate **AI into Perfex CRM** using:\n\n• OpenAI GPT-4\n• Google Gemini\n• Anthropic Claude\n\nFeatures include AI email writing, lead scoring, proposal generation, and smart automation.\n\n[Explore AI integration](/perfex-crm-openai-integration)";
  }
  if (lower.includes("mobile") || lower.includes("flutter") || lower.includes("app")) {
    return "We build **Flutter mobile apps** for Perfex CRM:\n\n• iOS & Android from one codebase\n• Full CRM feature access\n• Offline support\n• Push notifications\n• Beautiful native UI\n\n[Learn about mobile apps](/perfex-crm-mobile-app)";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hello! 👋 I'm **Rake AI**, your Perfex CRM expert assistant from RakeBig Services.\n\nI can help you with information about Perfex CRM development services, pricing, timelines, and more. What would you like to know?";
  }

  return "Great question! Our Perfex CRM experts would be best placed to answer this in detail.\n\n**Quick options:**\n• [Get a free consultation](/contact)\n• [Hire a Perfex developer](/hire-perfex-crm-developer)\n• [View all services](/services)\n\nOr feel free to ask me anything else about Perfex CRM development!";
}

function renderLink(key: number, label: string, href: string) {
  const className = "font-medium text-[#A855F7] hover:underline";

  switch (href) {
    case "/contact":
      return <a key={key} href="/contact" className={className}>{label}</a>;
    case "/hire-perfex-crm-developer":
      return <a key={key} href="/hire-perfex-crm-developer" className={className}>{label}</a>;
    case "/services":
      return <a key={key} href="/services" className={className}>{label}</a>;
    case "/perfex-crm-saas-development":
      return <a key={key} href="/perfex-crm-saas-development" className={className}>{label}</a>;
    case "/perfex-crm-api-development":
      return <a key={key} href="/perfex-crm-api-development" className={className}>{label}</a>;
    case "/perfex-crm-whatsapp-integration":
      return <a key={key} href="/perfex-crm-whatsapp-integration" className={className}>{label}</a>;
    case "/perfex-crm-openai-integration":
      return <a key={key} href="/perfex-crm-openai-integration" className={className}>{label}</a>;
    case "/perfex-crm-mobile-app":
      return <a key={key} href="/perfex-crm-mobile-app" className={className}>{label}</a>;
    default:
      return <span key={key}>{label}</span>;
  }
}

function renderMarkdown(text: string): React.ReactElement {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g);

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (part.startsWith("[")) {
          const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (match) {
            return renderLink(i, match[1], match[2]);
          }
        }

        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-white/10 px-1 text-xs">
              {part.slice(1, -1)}
            </code>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function MessageContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        if (line.startsWith("• ")) {
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-0.5 text-[#A855F7]">•</span>
              <span>{renderMarkdown(line.slice(2))}</span>
            </div>
          );
        }

        if (line === "") {
          return <div key={i} className="h-2" />;
        }

        return <div key={i}>{renderMarkdown(line)}</div>;
      })}
    </div>
  );
}

export function RakeAIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", role: "assistant", content: knowledgeBase.default },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageIdRef = useRef(1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const timeoutId = window.setTimeout(() => inputRef.current?.focus(), 300);
    return () => window.clearTimeout(timeoutId);
  }, [open]);

  const getNextMessageId = () => `msg-${messageIdRef.current++}`;

  const handleSend = async (messageText?: string) => {
    const text = messageText ?? input.trim();
    if (!text || isTyping) {
      return;
    }

    const userMsg: Message = {
      id: getNextMessageId(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));

    const aiMsg: Message = {
      id: getNextMessageId(),
      role: "assistant",
      content: getResponse(text),
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#490993] to-[#A855F7] text-white shadow-xl shadow-purple-500/30 transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-6 bottom-24 z-50 flex max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-purple-500/20 dark:bg-black/95"
            style={{ width: "380px", maxHeight: "calc(100vh - 8rem)" }}
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#490993] to-[#7B2CBF] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Rake AI</p>
                <p className="text-xs text-white/70">Perfex CRM Expert Assistant</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs text-white/70">Online</span>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4" style={{ minHeight: "200px", maxHeight: "400px" }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                      msg.role === "assistant"
                        ? "bg-gradient-to-br from-[#490993] to-[#A855F7]"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="h-4 w-4 text-white" />
                    ) : (
                      <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    )}
                  </div>
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "assistant"
                        ? "rounded-tl-none bg-gray-100 text-foreground dark:bg-white/5"
                        : "rounded-tr-none bg-gradient-to-br from-[#490993] to-[#7B2CBF] text-white"
                    }`}
                  >
                    {msg.role === "assistant" ? <MessageContent content={msg.content} /> : <span>{msg.content}</span>}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#490993] to-[#A855F7]">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3 dark:bg-white/5">
                    {[0, 0.15, 0.3].map((delay) => (
                      <div
                        key={delay}
                        className="h-2 w-2 animate-bounce rounded-full bg-[#490993]"
                        style={{ animationDelay: `${delay}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => void handleSend(q)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-purple-300 hover:text-[#490993] dark:hover:border-purple-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2 border-t border-border p-4">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void handleSend();
                  }
                }}
                placeholder="Ask about Perfex CRM..."
                className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-[#490993] focus:outline-none focus:ring-2 focus:ring-[#490993]/30"
              />
              <button
                onClick={() => void handleSend()}
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#490993] to-[#A855F7] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                aria-label="Send message"
              >
                {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
