import { Suspense } from "react";
import type { Metadata } from "next";
import { getPosts } from "@/lib/api";
import { PostCard } from "@/components/blog/PostCard";
import { SearchInput } from "@/components/blog/SearchInput";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Explore articles on design, engineering, and building the future of digital products.",
};

export default async function BlogPage(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const allPosts = await getPosts();

  const filteredPosts = query.trim()
    ? allPosts.filter((post) => {
        const q = query.toLowerCase().trim();
        return (
          (post.blog_heading ?? "").toLowerCase().includes(q) ||
          (post.blog_description ?? "").toLowerCase().includes(q) ||
          (post.topic ?? "").toLowerCase().includes(q) ||
          (post.name ?? "").toLowerCase().includes(q)
        );
      })
    : allPosts;

  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          <span className="font-serif italic font-normal">Journal</span>
        </h1>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          Thoughts, perspectives, and insights on design, technology, and
          building the future of digital products.
        </p>
      </div>

      {/* Suspense required: SearchInput uses useSearchParams() */}
      <Suspense
        fallback={
          <div className="w-full max-w-2xl mx-auto mb-12">
            <div className="h-14 bg-neutral-100 rounded-2xl animate-pulse" />
          </div>
        }
      >
        <SearchInput />
      </Suspense>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="size-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-5">
            <span className="text-2xl select-none">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No results found
          </h3>
          <p className="text-muted text-base max-w-sm">
            We couldn&apos;t find anything matching &quot;{query}&quot;. Try a
            different search term.
          </p>
        </div>
      )}
      </div>
    </div>
  );
}
