import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200";
const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100";

export function HeroFeaturedPost({ post }: { post: BlogPost }) {
  if (!post) return null;

  const imageUrl = post.blog_image || FALLBACK_IMAGE;
  const avatarUrl = post.avatar || FALLBACK_AVATAR;

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group relative block w-full h-full min-h-[520px] overflow-hidden rounded-[24px] bg-neutral-100"
    >
      <Image
        src={imageUrl}
        alt={post.blog_heading ?? "Featured article"}
        fill
        className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
        priority
        sizes="(max-width: 768px) 100vw, 60vw"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-white">
        <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-white/20">
          {post.topic ?? "Article"}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-4 max-w-xl">
          {post.blog_heading ?? "Untitled"}
        </h2>

        <p className="text-white/75 text-sm md:text-base leading-relaxed line-clamp-2 mb-6 max-w-lg font-light">
          {post.blog_description ?? ""}
        </p>

        <div className="flex items-center gap-3">
          <div className="relative size-10 rounded-full overflow-hidden border-2 border-white/25 shrink-0">
            <Image
              src={avatarUrl}
              alt={post.name ?? "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="font-medium">{post.name ?? "Unknown Author"}</p>
            <p className="text-white/55 text-xs">
              {post.month ?? ""}{post.job_roles ? ` · ${post.job_roles}` : ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
