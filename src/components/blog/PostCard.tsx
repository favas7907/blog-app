import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";
const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100";

export function PostCard({ post }: { post: BlogPost }) {
  if (!post) return null;

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex flex-col bg-white rounded-[20px] border border-border/50 overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out h-full"
    >
      <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
        <Image
          src={post.blog_image || FALLBACK_IMAGE}
          alt={post.blog_heading ?? "Blog post"}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm text-accent text-[10px] font-semibold tracking-widest uppercase rounded-full shadow-sm">
            {post.topic ?? "Article"}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-[17px] font-bold tracking-tight text-foreground leading-snug line-clamp-2 mb-2.5 group-hover:text-accent transition-colors duration-200">
          {post.blog_heading ?? "Untitled"}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-5 flex-1">
          {post.blog_description ?? ""}
        </p>

        <div className="flex items-center gap-2.5 pt-4 border-t border-border/50 mt-auto">
          <div className="relative size-8 rounded-full overflow-hidden bg-neutral-100 shrink-0">
            <Image
              src={post.avatar || FALLBACK_AVATAR}
              alt={post.name ?? "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-foreground truncate">
              {post.name ?? "Unknown"}
            </p>
            <p className="text-[11px] text-muted truncate">
              {post.month ?? ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
