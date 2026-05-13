export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-xs sm:text-sm text-gray-400 dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} 我的博客. All rights reserved.</p>
      </div>
    </footer>
  );
}
