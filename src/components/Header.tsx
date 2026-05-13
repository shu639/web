"use client";

import { useState, useRef, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="/" className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          我的博客
        </a>

        <nav className="flex items-center gap-2 sm:gap-3">
          <a href="/" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            首页
          </a>

          {/* 主题切换 */}
          <button
            onClick={toggle}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all cursor-pointer"
            aria-label="切换深色模式"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
              aria-label="查看个人信息"
            >
              <img
                src="/avatar.jpg"
                alt="头像"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  el.parentElement!.classList.add("bg-gradient-to-br", "from-blue-400", "to-purple-500", "flex", "items-center", "justify-center");
                  el.parentElement!.innerHTML = '<span class="text-white text-xs sm:text-sm font-medium">J</span>';
                }}
              />
            </button>

            {showProfile && (
              <div ref={profileRef}>
                <ProfileCard onClose={() => setShowProfile(false)} />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
