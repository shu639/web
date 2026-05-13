"use client";

export default function ProfileCard({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* 移动端遮罩 */}
      <div
        className="fixed inset-0 bg-black/20 z-40 sm:hidden"
        onClick={onClose}
      />
      {/* 卡片 */}
      <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-3 sm:w-80 sm:max-h-none sm:overflow-visible bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-5 sm:p-6 pb-8 sm:pb-6 animate-in fade-in slide-in-from-bottom sm:slide-in-from-top-2 duration-200">
        {/* 移动端拖拽条 */}
        <div className="sm:hidden w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-5" />

        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md shrink-0">
            <img
              src="/avatar.jpg"
              alt="头像"
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                el.parentElement!.classList.add("bg-gradient-to-br", "from-blue-400", "to-purple-500", "flex", "items-center", "justify-center");
                el.parentElement!.innerHTML = '<span class="text-white text-xl sm:text-2xl font-bold">J</span>';
              }}
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">靳舒</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">全栈开发者 / 技术博主</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          热爱技术、写作和开源。这里记录我的学习笔记和生活感悟。
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["TypeScript", "React", "Node.js", "Python"].map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <a
            href="https://github.com/shu639"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
          >
            GitHub
          </a>
          <a
            href="mailto:example@email.com"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
          >
            邮箱
          </a>
        </div>
      </div>
    </>
  );
}
