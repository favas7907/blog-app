export interface BlogPost {
  id: string;
  blog_heading: string;
  blog_image: string;
  blog_description: string;
  blogtext: string;
  topic: string;
  name: string;
  avatar: string;
  month: string;
  job_roles: string;
  quotes: string;
  para: string;
}

/**
 * Raw shape returned by MockAPI.
 * MockAPI auto-generates fields like title, content, image, author, category.
 * We normalise these into our BlogPost shape in api.ts.
 */
export interface MockApiPost {
  id: string;
  createdAt?: number | string;
  title?: string;
  content?: string;
  image?: string;
  author?: string;
  category?: string;
  // Custom fields (if you configure MockAPI with the exact BlogPost field names)
  blog_heading?: string;
  blog_image?: string;
  blog_description?: string;
  blogtext?: string;
  topic?: string;
  name?: string;
  avatar?: string;
  month?: string;
  job_roles?: string;
  quotes?: string;
  para?: string;
}
