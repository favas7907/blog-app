import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400";

export function FeaturedPostsSidebar({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-[11px] font-semibold text-foreground uppercase tracking-[0.15em] mb-6">
        Featured Stories
      </h3>

      <div className="flex flex-col divide-y divide-border/70">
        {posts.slice(0, 5).map((post, index) => (
          <Link
            key={post.id ?? index}
            href={`/blog/${post.id}`}
            className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div className="relative size-[72px] shrink-0 rounded-xl overflow-hidden bg-neutral-100">
              <Image
                src={post.blog_image || FALLBACK_IMAGE}
                alt={post.blog_heading ?? "Featured article"}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="72px"
              />
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <p className="text-[10px] font-semibold text-accent/60 uppercase tracking-[0.15em] mb-1.5">
                {post.topic ?? "Article"}
              </p>
              <h4 className="text-[14px] font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-200">
                {post.blog_heading ?? "Untitled"}
              </h4>
              <p className="text-[11px] text-muted mt-1.5 font-medium">
                {post.name ?? "Author"}
                {post.month ? <span className="opacity-50"> · {post.month}</span> : null}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
