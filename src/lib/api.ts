import type { BlogPost } from "./types";
import { FALLBACK_POSTS } from "./mock-data";

export type { BlogPost } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getPosts(): Promise<BlogPost[]> {
  if (!API_URL) {
    console.warn("[Beyond UI] NEXT_PUBLIC_API_URL not configured. Using fallback data.");
    return FALLBACK_POSTS;
  }

  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[Beyond UI] API responded with ${res.status}. Using fallback.`);
      return FALLBACK_POSTS;
    }

    const data: unknown = await res.json();

    if (!Array.isArray(data)) {
      console.warn("[Beyond UI] API returned non-array data. Using fallback.");
      return FALLBACK_POSTS;
    }

    return data as BlogPost[];
  } catch (error) {
    console.error("[Beyond UI] Fetch failed:", error);
    return FALLBACK_POSTS;
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  if (!id) return null;

  if (API_URL) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        next: { revalidate: 60 },
      });

      if (res.ok) {
        const data: BlogPost = await res.json();
        if (data?.id) return data;
      }
    } catch {
      // Fall through to local fallback lookup
    }
  }

  return FALLBACK_POSTS.find((p) => p.id === id) ?? null;
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getPosts();

  if (!query.trim()) return posts;

  const lowerQuery = query.toLowerCase().trim();

  return posts.filter(
    (post) =>
      (post.blog_heading ?? "").toLowerCase().includes(lowerQuery) ||
      (post.blog_description ?? "").toLowerCase().includes(lowerQuery) ||
      (post.topic ?? "").toLowerCase().includes(lowerQuery) ||
      (post.name ?? "").toLowerCase().includes(lowerQuery)
  );
}
