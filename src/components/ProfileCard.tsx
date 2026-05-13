"use client";

export default function ProfileCard({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      {/* 移动端：居中弹窗 */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 sm:hidden bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700 shrink-0">
            <img src="/avatar.jpg" alt="头像" className="w-full h-full object-cover"
              onError={(e) => { const el = e.currentTarget; el.style.display = "none"; el.parentElement!.classList.add("bg-gradient-to-br", "from-blue-400", "to-purple-500", "flex", "items-center", "justify-center"); el.parentElement!.innerHTML = '<span class="text-white text-lg font-bold">J</span>'; }} />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">靳舒</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">全栈开发者 / 技术博主</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          热爱技术、写作和开源。这里记录我的学习笔记和生活感悟。
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {["TypeScript", "React", "Node.js", "Python"].map((skill) => (
            <span key={skill} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">{skill}</span>
          ))}
        </div>

        <div className="flex gap-6 pt-3 border-t border-gray-100 dark:border-gray-800">
          <a href="https://github.com/shu639" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5">GitHub</a>
          <a href="mailto:example@email.com" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5">邮箱</a>
        </div>
      </div>
      {/* 桌面端：下拉卡片 */}
      <div className="hidden sm:block absolute right-0 top-full mt-3 w-80 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700 shrink-0">
            <img src="/avatar.jpg" alt="头像" className="w-full h-full object-cover"
              onError={(e) => { const el = e.currentTarget; el.style.display = "none"; el.parentElement!.classList.add("bg-gradient-to-br", "from-blue-400", "to-purple-500", "flex", "items-center", "justify-center"); el.parentElement!.innerHTML = '<span class="text-white text-2xl font-bold">J</span>'; }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">靳舒</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">全栈开发者 / 技术博主</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          热爱技术、写作和开源。这里记录我的学习笔记和生活感悟。
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["TypeScript", "React", "Node.js", "Python"].map((skill) => (
            <span key={skill} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">{skill}</span>
          ))}
        </div>
        <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <a href="https://github.com/shu639" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-1">GitHub</a>
          <a href="mailto:example@email.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-1">邮箱</a>
        </div>
      </div>
    </>
  );
}
