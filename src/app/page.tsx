import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <section className="mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">欢迎来访</h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          这里记录了我的技术思考和生活感悟。
          点击右上角头像查看我的个人信息。
        </p>
      </section>

      <section>
        <h2 className="text-xs sm:text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-5 sm:mb-6">
          文章列表
        </h2>
        <PostList posts={posts} />
      </section>
    </div>
  );
}
