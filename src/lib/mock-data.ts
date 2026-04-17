import type { BlogPost } from "./types";

export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "1",
    blog_heading: "The Art of Minimal Interface Design",
    blog_image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Why clean, whitespace-driven design is overtaking the digital product landscape and reshaping how users interact with technology.",
    blogtext:
      "The web is entering an era of absolute clarity. Instead of heavy drop shadows and overwhelming gradient systems, designers now channel their energy into pure form — deliberate spacing, disciplined typography, and purposeful restraint. This shift isn't merely aesthetic; it's functional. Research consistently shows that minimalist interfaces reduce cognitive load, increase task-completion rates, and build user trust faster than cluttered alternatives. The most respected digital products of the decade share a common trait: they say more with less. Every pixel earns its place.",
    topic: "Design",
    name: "Alex Rivera",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    month: "October 12, 2026",
    job_roles: "UX Architect",
    quotes: "A true masterpiece is perfectly balanced — nothing to add, nothing to remove.",
    para: "Minimalism isn't about having less. It's about making room for more of what matters — focus, clarity, and intention.",
  },
  {
    id: "2",
    blog_heading: "Server Components Changed Everything",
    blog_image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "A deep dive into how React Server Components fundamentally changed the way we architect modern web applications.",
    blogtext:
      "Server Components represent a genuine paradigm shift in React development. Unlike traditional components that render entirely on the client, Server Components execute on the server and ship only their HTML output — zero JavaScript bundle cost. This means your users download less code, see content faster, and interact with a page that feels instantly alive. For data-heavy applications like blogs, dashboards, and e-commerce platforms, the performance gains are transformative. The server does the heavy lifting so the browser doesn't have to.",
    topic: "Engineering",
    name: "Sara Chen",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    month: "October 10, 2026",
    job_roles: "Senior Software Engineer",
    quotes: "Speed is the single most important feature of the web.",
    para: "Embrace the server to keep your client bundle small. The fastest code is the code you never ship.",
  },
  {
    id: "3",
    blog_heading: "Building for Accessibility First",
    blog_image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Building inclusive experiences shouldn't be an afterthought — it's the defining characteristic of modern, ethical design.",
    blogtext:
      "Accessibility is more than regulatory compliance; it is usability for everyone. When you design accessible products, you don't just help users with disabilities — you improve the experience for all users across all contexts. Proper heading hierarchies help screen readers and SEO alike. Generous touch targets benefit both motor-impaired users and someone using their phone with one hand on a crowded train. Color contrast requirements ensure readability whether you're in a dark room or bright sunlight. Accessibility is not a feature; it's a foundation.",
    topic: "Product",
    name: "Marcus Johnson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    month: "October 5, 2026",
    job_roles: "Product Lead",
    quotes: "Inclusivity is the true mark of good design.",
    para: "We must consider all edge cases and all users — not as an afterthought, but as the starting point of every design decision.",
  },
  {
    id: "4",
    blog_heading: "Typography That Speaks Volumes",
    blog_image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "How deliberate font choices, scale systems, and line-height ratios define the entire personality of a digital product.",
    blogtext:
      "Typography is the voice of your text. A sleek sans-serif communicates modernity and efficiency, while a refined serif suggests tradition and authority. But choosing a typeface is only the beginning. The real craft lies in building a consistent type scale, establishing vertical rhythm through line-height ratios, and creating a clear hierarchy that guides the reader's eye from headline to body to caption without friction. When typography is done well, users don't notice it — they simply understand the content effortlessly.",
    topic: "Design",
    name: "Emma Davis",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    month: "September 28, 2026",
    job_roles: "Visual Designer",
    quotes: "Letters form words, but typography conveys feeling.",
    para: "Readability is king when it comes to content platforms. If your users struggle to read, nothing else matters.",
  },
  {
    id: "5",
    blog_heading: "Scalable Design Systems in Practice",
    blog_image:
      "https://images.unsplash.com/photo-1507238692062-710e5eddc1db?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "A framework for creating component libraries and design tokens that grow gracefully alongside your company.",
    blogtext:
      "Design systems are living organisms. They need structure to survive, but flexibility to adapt. The best design systems are built on a foundation of design tokens — atomic values like colors, spacing, and type sizes that can be themed, versioned, and shared across platforms. On top of tokens sit components: reusable, composable building blocks that encode both visual consistency and interaction patterns. The system succeeds when it empowers teams to move faster without sacrificing cohesion.",
    topic: "Engineering",
    name: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    month: "September 15, 2026",
    job_roles: "Frontend Architect",
    quotes: "Consistency breeds trust. Trust breeds adoption.",
    para: "Create tokens, build components, scale indefinitely. A great design system is an investment that compounds over time.",
  },
  {
    id: "6",
    blog_heading: "The AI-Powered Developer Workflow",
    blog_image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Artificial intelligence isn't here to replace developers — it's here to remove the friction between imagination and execution.",
    blogtext:
      "The integration of AI into developer workflows has accelerated at a breathtaking pace. From intelligent code completion to automated testing and design-to-code translation, developers are increasingly becoming orchestrators of logic rather than authors of boilerplate. The key insight is that AI excels at the repetitive, pattern-driven parts of software development — freeing human engineers to focus on architecture, creativity, and the nuanced judgment calls that machines cannot replicate.",
    topic: "Technology",
    name: "Lena Rostova",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
    month: "August 30, 2026",
    job_roles: "Machine Learning Engineer",
    quotes: "We are entering the golden age of creation — where ideas become products at the speed of thought.",
    para: "AI bridges the gap between imagination and execution. The developer of tomorrow orchestrates; they don't just type.",
  },
  {
    id: "7",
    blog_heading: "Color Theory for Digital Interfaces",
    blog_image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "How to build harmonious, accessible color palettes that communicate brand identity while respecting WCAG standards.",
    blogtext:
      "Color is the most visceral element of any interface. Before users read a single word, color has already communicated mood, trustworthiness, and hierarchy. Building effective digital palettes starts with understanding color relationships — complementary pairs create energy, analogous sets evoke harmony, and triadic combinations deliver vibrancy without chaos. But beauty alone isn't enough: every color combination must meet WCAG 2.1 AA contrast ratios at minimum. The best palettes are simultaneously beautiful and universally readable.",
    topic: "Design",
    name: "Priya Patel",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    month: "August 18, 2026",
    job_roles: "Brand Designer",
    quotes: "Color doesn't decorate — it communicates.",
    para: "A palette is not a set of pretty swatches. It's a language that shapes perception before a single word is read.",
  },
  {
    id: "8",
    blog_heading: "Edge Computing and the Modern Web",
    blog_image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "How moving compute closer to the user is reshaping performance expectations for web applications worldwide.",
    blogtext:
      "Edge computing is fundamentally changing web architecture. By deploying server-side logic to hundreds of points-of-presence around the globe, we can serve personalized, dynamic content with sub-50ms latency regardless of where the user sits. This isn't just about speed — it's about reliability. Edge deployments are inherently fault-tolerant: if one region goes down, nearby edge nodes absorb the traffic seamlessly. For modern web applications, the edge is no longer optional — it's the expected deployment target.",
    topic: "Technology",
    name: "James O'Brien",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
    month: "August 5, 2026",
    job_roles: "Platform Engineer",
    quotes: "Latency is the silent killer of user experience.",
    para: "The future of the web isn't centralized servers — it's compute that lives everywhere your users do.",
  },
  {
    id: "9",
    blog_heading: "Crafting Micro-Interactions That Delight",
    blog_image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "The subtle animations and feedback patterns that transform functional interfaces into memorable, delightful experiences.",
    blogtext:
      "Micro-interactions are the secret ingredient that separates competent interfaces from truly delightful ones. A subtle bounce on a button press, a smooth progress indicator, or a gentle fade when content loads — these tiny moments of motion communicate system state, reward user actions, and create an emotional connection with your product. The best micro-interactions are invisible until they're absent. They respect the user's time, enhance comprehension, and never distract from the primary task.",
    topic: "Design",
    name: "Nina Kowalski",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100",
    month: "July 22, 2026",
    job_roles: "Interaction Designer",
    quotes: "The best interactions are felt, not seen.",
    para: "Motion is a design material. Used sparingly and purposefully, it transforms static screens into living, breathing products.",
  },
];
