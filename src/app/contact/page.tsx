import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Beyond UI team.",
};

const CONTACT_ITEMS = [
  {
    icon: <Mail className="size-5" />,
    title: "Email Us",
    subtitle: "Our friendly team is here to help.",
    value: "hello@beyondui.com",
    href: "mailto:hello@beyondui.com",
  },
  {
    icon: <MapPin className="size-5" />,
    title: "Visit Us",
    subtitle: "Come say hello at our studio.",
    value: "100 Design Avenue, Suite 400\nSan Francisco, CA 94107",
    href: undefined,
  },
  {
    icon: <Phone className="size-5" />,
    title: "Call Us",
    subtitle: "Mon–Fri from 8am to 5pm.",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
];

export default function ContactPage() {
  return (
    <div className="flex-1 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-14 md:mb-20 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
          Let&apos;s start a{" "}
          <span className="font-serif italic font-normal">conversation.</span>
        </h1>
        <p className="text-lg text-muted font-light leading-relaxed">
          Whether you have a question, need design advice, or just want to say
          hello — we&apos;re here to listen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-lg font-semibold text-foreground mb-8">
            Contact Information
          </h2>
          <div className="space-y-8">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-accent/5 flex items-center justify-center text-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm mb-1.5">{item.subtitle}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-accent text-sm font-medium hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <address className="not-italic text-accent text-sm font-medium whitespace-pre-line">
                      {item.value}
                    </address>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-neutral-50 p-7 md:p-10 rounded-[20px] border border-border/50">
            <h2 className="text-lg font-semibold text-foreground mb-7">
              Send a message
            </h2>
            <form
              className="space-y-5"
              aria-label="Contact form"
              action="#"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/15 focus:border-accent/40 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/15 focus:border-accent/40 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/15 focus:border-accent/40 transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/15 focus:border-accent/40 transition-all duration-200 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white rounded-xl px-4 py-3.5 font-semibold text-sm hover:bg-accent/90 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
