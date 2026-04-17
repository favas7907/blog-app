import type { BlogPost } from "@/lib/types";
import { PostCard } from "@/components/blog/PostCard";

export function RecentPostsGrid({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section>
      <div className="mb-10 border-b border-border/70 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          <span className="font-serif italic font-normal">Latest</span>
        </h2>
        <p className="text-muted text-base max-w-xl">
          Recent thoughts on design, engineering, and building the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
