import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Our story, our mission, and the people behind Beyond UI.",
};

const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Projects Shipped" },
  { value: "3M", label: "Global Users" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="px-6 lg:px-10 pt-16 md:pt-24 pb-12 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 bg-accent/5 text-accent rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6">
          About Us
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
          We believe in design{" "}
          <span className="font-serif italic font-normal">without compromise.</span>
        </h1>
        <p className="text-lg text-muted font-light leading-relaxed">
          We are a collective of designers and engineers crafting digital
          experiences that prioritize clarity, accessibility, and visual
          excellence above all else.
        </p>
      </header>

      <div className="px-6 lg:px-10 pb-16 md:pb-24">
        <div className="relative w-full aspect-[21/9] min-h-[280px] overflow-hidden rounded-[20px] bg-neutral-100">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Team collaborating at a modern workspace"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </div>

      <section className="px-6 lg:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Our Story
            </h2>
            <div className="text-foreground/75 text-base font-light leading-relaxed space-y-5">
              <p>
                Beyond UI started with a simple observation: the modern web was
                becoming increasingly cluttered. Between intrusive popups, heavy
                animations, and overwhelming information density, the core
                message was getting lost.
              </p>
              <p>
                We decided to build a platform that strips away the unnecessary,
                focusing entirely on typography, spacing, and structural
                integrity. The result is a design philosophy that proves premium
                experiences don&apos;t require excess — they require discipline.
              </p>
              <p>
                Today, our approach influences how products are built across the
                industry, demonstrating that restraint — not noise — is the
                hallmark of truly great digital craft.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-[20px] p-8 md:p-10 flex items-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-bold font-serif italic text-foreground mb-1.5">
                    {stat.value}
                  </p>
                  <p className="text-muted text-xs font-semibold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
