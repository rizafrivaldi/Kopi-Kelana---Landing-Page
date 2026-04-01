import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const images = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 detik

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="home"
      className="pt-20 pb-20 px-4 sm:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto aspect-[16/7] md:aspect-[16/6] rounded-3xl overflow-hidden relative">
        {/* SLIDES */}
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-yellow-400">
              Coffee That Feels Like Home
            </h2>

            <p className="mb-8 text-gray-200 text-base md:text-xl font-semibold">
              Welcome to Kopi Kelana — where every cup tells a story.
            </p>

            <a
              href="#menu"
              className="px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-white text-black hover:bg-blue-600 hover:text-white transition font-semibold"
            >
              Explore Menu
            </a>
          </motion.div>
        </div>

        {/* NAV BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur"
        >
          ▶
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-yellow-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
