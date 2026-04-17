import type { BlogPost, MockApiPost } from "./types";
import { FALLBACK_POSTS } from "./mock-data";

export type { BlogPost } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Helper to validate if a string looks like a URL or path
function getValidUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("/")) return url;
  return ""; // Returns empty string which triggers the UI fallback
}

// Helper to normalize MockAPI data or fallback to our schema
function normalizePost(raw: MockApiPost): BlogPost {
  return {
    id: raw.id,
    blog_heading: raw.blog_heading || raw.title || "Untitled",
    blog_image: raw.blog_image || getValidUrl(raw.image),
    blog_description: raw.blog_description || raw.content || "",
    blogtext: raw.blogtext || raw.content || "",
    topic: raw.topic || raw.category || "Article",
    name: raw.name || raw.author || "Unknown Author",
    avatar: raw.avatar || getValidUrl(raw.avatar),
    month: raw.month || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    job_roles: raw.job_roles || "Contributor",
    quotes: raw.quotes || "",
    para: raw.para || "",
  };
}

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

    return (data as MockApiPost[]).map(normalizePost);
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
        const data: MockApiPost = await res.json();
        if (data?.id) return normalizePost(data);
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
      post.blog_heading.toLowerCase().includes(lowerQuery) ||
      post.blog_description.toLowerCase().includes(lowerQuery) ||
      post.topic.toLowerCase().includes(lowerQuery) ||
      post.name.toLowerCase().includes(lowerQuery)
  );
}
