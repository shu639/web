import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group py-5 sm:py-6 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <Link href={`/posts/${post.slug}`} className="block -mx-1 px-1 py-1 rounded-lg sm:rounded-none sm:py-0 sm:px-0 active:bg-gray-50 dark:active:bg-gray-800 sm:active:bg-transparent sm:dark:active:bg-transparent">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 sm:mb-2">
          {post.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-400 dark:text-gray-500">
          <time>{post.date}</time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
