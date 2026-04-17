import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 mt-auto">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-14">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-5 group">
              <div className="size-7 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs leading-none">B</span>
              </div>
              <span className="font-semibold text-base tracking-tight">Beyond UI</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              A premium editorial experience crafted with care.
              Typography, layout, and motion in perfect harmony.
            </p>
            <div className="flex items-center gap-5 text-xs font-medium text-muted">
              <Link href="#" className="hover:text-accent transition-colors duration-200">Twitter</Link>
              <Link href="#" className="hover:text-accent transition-colors duration-200">GitHub</Link>
              <Link href="#" className="hover:text-accent transition-colors duration-200">LinkedIn</Link>
              <Link href="#" className="hover:text-accent transition-colors duration-200">Dribbble</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-5">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/blog" className="hover:text-accent transition-colors duration-200">Journal</Link></li>
              <li><Link href="/features" className="hover:text-accent transition-colors duration-200">Features</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors duration-200">Pricing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors duration-200">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/about" className="hover:text-accent transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors duration-200">Contact</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors duration-200">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors duration-200">Legal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-muted mb-4">
              Get the latest design insights delivered to your inbox.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address for newsletter"
                className="flex-1 min-w-0 bg-white border border-border rounded-full px-4 py-2.5 text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
              />
              <button
                type="button"
                className="shrink-0 bg-accent text-white rounded-full px-4 py-2.5 text-sm font-medium hover:bg-accent/90 transition-all duration-300"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Beyond UI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors duration-200">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors duration-200">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors duration-200">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
