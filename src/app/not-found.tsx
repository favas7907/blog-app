import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold tracking-tighter text-accent/10 mb-6 select-none">
          404
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Page not found
        </h1>

        <p className="text-muted text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-8 py-3.5 bg-accent text-white rounded-full font-medium text-sm hover:bg-accent/90 transition-all duration-300 shadow-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
