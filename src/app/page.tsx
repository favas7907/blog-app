import { getPosts } from "@/lib/api";
import { HeroFeaturedPost } from "@/components/home/HeroFeaturedPost";
import { FeaturedPostsSidebar } from "@/components/home/FeaturedPostsSidebar";
import { RecentPostsGrid } from "@/components/home/RecentPostsGrid";

export const revalidate = 60;

export default async function HomePage() {
  const allPosts = await getPosts();

  if (!allPosts || allPosts.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh] px-6">
        <div className="text-center">
          <p className="text-muted text-lg mb-4">No posts available at the moment.</p>
          <p className="text-muted/60 text-sm">Check back soon for new content.</p>
        </div>
      </div>
    );
  }

  const heroPost = allPosts[0];
  const sidebarPosts = allPosts.slice(1, 6);
  const recentPosts = allPosts.slice(3, 9);

  return (
    <div className="flex flex-col">
      <section className="pt-8 pb-6 md:pt-12 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8 min-h-[520px]">
            <HeroFeaturedPost post={heroPost} />
          </div>
          <div className="lg:col-span-4">
            <FeaturedPostsSidebar posts={sidebarPosts} />
          </div>
        </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecentPostsGrid posts={recentPosts} />
        </div>
      </section>
    </div>
  );
}
