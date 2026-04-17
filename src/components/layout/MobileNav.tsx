"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center size-10 rounded-full border border-border text-foreground hover:bg-accent/5 transition-colors duration-200"
        aria-label="Open navigation menu"
      >
        <Menu className="size-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="size-8 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">B</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">Beyond UI</span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center size-10 rounded-full border border-border text-foreground hover:bg-accent/5 transition-colors duration-200"
              aria-label="Close navigation menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-semibold tracking-tight py-3 transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-accent text-white rounded-2xl font-semibold text-base hover:bg-accent/90 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
