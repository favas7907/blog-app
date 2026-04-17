import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPostById, getPosts } from "@/lib/api";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostById(params.id);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.blog_heading ?? "Untitled",
    description: post.blog_description ?? "",
    openGraph: {
      title: post.blog_heading ?? "Untitled",
      description: post.blog_description ?? "",
      type: "article",
      authors: post.name ? [post.name] : [],
      images: post.blog_image ? [{ url: post.blog_image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.blog_heading ?? "Untitled",
      description: post.blog_description ?? "",
      images: post.blog_image ? [post.blog_image] : [],
    },
  };
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200";
const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100";

export default async function BlogPostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  const imageUrl = post.blog_image || FALLBACK_IMAGE;
  const avatarUrl = post.avatar || FALLBACK_AVATAR;

  return (
    <article className="flex-1 flex flex-col">
      <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-200 text-sm font-medium"
        >
          <ArrowLeft className="size-4" />
          Back to Journal
        </Link>
      </div>

      <header className="pt-8 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-[11px] font-semibold tracking-widest uppercase">
            {post.topic ?? "Article"}
          </span>
          <span className="text-sm text-muted">{post.month ?? ""}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12] mb-5">
          {post.blog_heading ?? "Untitled"}
        </h1>

        <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
          {post.blog_description ?? ""}
        </p>
      </header>

      <div className="pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3.5 py-5 border-y border-border/60 max-w-3xl">
          <div className="relative size-11 rounded-full overflow-hidden bg-neutral-100 shrink-0">
            <Image src={avatarUrl} alt={post.name ?? "Author"} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-[15px]">
              {post.name ?? "Unknown Author"}
            </p>
            <p className="text-muted text-sm">{post.job_roles ?? ""}</p>
          </div>
        </div>
      </div>

      <div className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[16/9] max-h-[520px] overflow-hidden rounded-[20px] bg-neutral-100">
          <Image
            src={imageUrl}
            alt={post.blog_heading ?? "Article hero image"}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="pb-20 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-foreground/80 text-[17px] leading-[1.8] font-light space-y-6">
          {post.para && (
            <p className="text-xl md:text-2xl text-foreground font-normal leading-snug">
              {post.para}
            </p>
          )}

          {post.blogtext && <p>{post.blogtext}</p>}

          <p>
            This approach has far-reaching implications for how we design and
            build digital experiences. By prioritizing structure, clarity, and
            user needs from the very beginning, we create products that are not
            only more usable but also more resilient to change over time.
          </p>

          {post.quotes && (
            <blockquote className="bg-neutral-50 border-l-[3px] border-accent p-6 md:p-8 rounded-r-2xl my-10">
              <p className="text-xl md:text-2xl font-serif italic text-foreground tracking-tight leading-snug m-0">
                &ldquo;{post.quotes}&rdquo;
              </p>
            </blockquote>
          )}

          <h2 className="text-2xl font-bold tracking-tight text-foreground !mt-12 !mb-4">
            The Path Forward
          </h2>
          <p>
            As we continue building more complex applications, returning to
            fundamental principles of design and architecture becomes essential.
            It allows us to create scalable, maintainable products without
            sacrificing the end-user experience. The craft lies in the details.
          </p>
          <p>
            By adopting a structurally sound approach — whether through semantic
            HTML, thoughtful component architectures, or refined typography — we
            ensure our applications not only look premium but feel durable,
            performant, and genuinely useful.
          </p>
        </div>
      </div>
    </article>
  );
}
