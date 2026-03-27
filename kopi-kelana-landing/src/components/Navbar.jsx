import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/30 dark:bg-black/70 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Kopi Kelana Indonesia
        </h1>

        <nav className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-100 font-bold">
          {["home", "about", "menu", "testimonials", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-yellow-500 transition capitalize"
              >
                {section}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-xl bg-white/20 dark:bg-darkBlue/20 
             border border-white/30 hover:scale-105 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white dark:bg-black">
          {["home", "about", "menu", "testimonials", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block capitalize"
              >
                {section}
              </a>
            ),
          )}
        </div>
      )}
    </header>
  );
}
