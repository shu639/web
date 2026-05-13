"use client";

export default function ProfileCard({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* 移动端遮罩 */}
      <div
        className="fixed inset-0 bg-black/30 z-40 sm:hidden"
        onClick={onClose}
      />
      {/* 移动端遮罩点击区域 */}
      <div
        className="fixed inset-0 z-40 hidden sm:block"
        onClick={onClose}
      />
      {/* 卡片 */}
      <div className="fixed inset-x-4 bottom-6 z-50 max-h-[70vh] overflow-y-auto sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-3 sm:w-80 sm:max-h-none sm:overflow-visible bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-4 sm:slide-in-from-top-2 duration-200">
        {/* 移动端拖拽条 */}
        <div className="sm:hidden w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />

        <div className="flex items-center gap-3 sm:gap-4 mb-3">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md shrink-0">
            <img
              src="/avatar.jpg"
              alt="头像"
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                el.parentElement!.classList.add("bg-gradient-to-br", "from-blue-400", "to-purple-500", "flex", "items-center", "justify-center");
                el.parentElement!.innerHTML = '<span class="text-white text-lg sm:text-2xl font-bold">J</span>';
              }}
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">靳舒</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">全栈开发者 / 技术博主</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          热爱技术、写作和开源。这里记录我的学习笔记和生活感悟。
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {["TypeScript", "React", "Node.js", "Python"].map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-3 border-t border-gray-100 dark:border-gray-800 pb-1">
          <a
            href="https://github.com/shu639"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-1.5"
          >
            GitHub
          </a>
          <a
            href="mailto:example@email.com"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-1.5"
          >
            邮箱
          </a>
          <button
            onClick={onClose}
            className="sm:hidden ml-auto text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 py-1.5"
          >
            关闭
          </button>
        </div>
      </div>
    </>
  );
}
