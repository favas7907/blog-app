"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition, useState, useEffect, useCallback } from "react";

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("query") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setQuery(searchParams?.get("query") ?? "");
  }, [searchParams]);

  const updateURL = useCallback(
    (value: string) => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams?.toString() ?? "");
        if (value.trim()) {
          params.set("query", value.trim());
        } else {
          params.delete("query");
        }
        const paramString = params.toString();
        router.replace(`${pathname}${paramString ? `?${paramString}` : ""}`, {
          scroll: false,
        });
      });
    },
    [router, pathname, searchParams, startTransition]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    updateURL(value);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="relative flex items-center">
        <Search className="absolute left-5 size-[18px] text-muted/70 pointer-events-none" />
        <input
          type="search"
          name="search"
          placeholder="Search articles, topics, or authors..."
          className="w-full h-14 pl-13 pr-12 bg-white border border-border rounded-2xl text-foreground text-[15px] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/15 focus:border-accent/40 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all duration-200"
          value={query}
          onChange={handleChange}
          aria-label="Search blog posts"
        />
        {isPending && (
          <div className="absolute right-5 size-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        )}
      </div>
    </div>
  );
}
