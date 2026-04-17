import Link from "next/link";
import { Search } from "lucide-react";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-lg border-b border-border/60">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="size-8 bg-accent rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
            <span className="text-white font-bold text-sm leading-none tracking-tighter">
              B
            </span>
          </div>
          <span className="font-semibold text-[17px] tracking-tight">
            Beyond UI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[13px] font-medium text-muted hover:text-foreground rounded-full hover:bg-accent/5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/blog"
            className="flex items-center justify-center size-9 rounded-full border border-border hover:bg-accent/5 transition-all duration-200 text-muted hover:text-foreground"
            aria-label="Search articles"
          >
            <Search className="size-[15px]" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center px-5 py-2 bg-accent text-white rounded-full text-[13px] font-semibold hover:bg-accent/90 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
          >
            Get Started
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
