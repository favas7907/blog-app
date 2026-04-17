import type { Metadata } from "next";
import { PenTool, Layout, Zap, Eye, Search, Shield } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the core features of the Beyond UI platform.",
};

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <PenTool className="size-5" />,
    title: "Editorial Typography",
    description:
      "Carefully calibrated font scales and line heights that make every article feel like a premium printed magazine.",
  },
  {
    icon: <Layout className="size-5" />,
    title: "Structured Layout",
    description:
      "A disciplined grid system that ensures flawless alignment across all devices, from mobile phones to ultra-wide displays.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Server-Side Rendering",
    description:
      "Blazing fast content delivery through Next.js App Router, ensuring immediate first-paint times and excellent SEO.",
  },
  {
    icon: <Eye className="size-5" />,
    title: "Accessibility First",
    description:
      "Built-in support for screen readers, keyboard navigation, and high-contrast modes. Design that works for everyone.",
  },
  {
    icon: <Search className="size-5" />,
    title: "Dynamic Search",
    description:
      "Instant, URL-driven search that lets users filter articles natively and share specific results via shareable links.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Robust Architecture",
    description:
      "Strongly typed with TypeScript, beautifully styled with Tailwind CSS, and structured for long-term scalability.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex-1 px-6 lg:px-10 py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          The architecture of{" "}
          <span className="font-serif italic font-normal">elegance</span>
        </h1>
        <p className="text-muted text-base md:text-lg font-light leading-relaxed">
          Every component, every detail, and every interaction is designed to
          provide a cohesive and premium experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="group flex flex-col p-7 rounded-[20px] border border-border/50 bg-neutral-50/50 hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:border-border transition-all duration-300 ease-out"
          >
            <div className="size-11 rounded-xl bg-white border border-border/80 flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 ease-out">
              {feature.icon}
            </div>
            <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
