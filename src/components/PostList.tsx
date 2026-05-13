import type { PostMeta } from "@/lib/posts";
import PostCard from "./PostCard";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-lg">还没有文章</p>
        <p className="text-sm mt-2">在 content/posts 目录下创建 .md 文件来添加文章</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
