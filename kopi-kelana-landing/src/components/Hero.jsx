import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero4.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="bg-white/20 dark:bg-black/30 p-10 rounded-2xl backdrop-blur-lg"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
          Coffee That Feels Like Home
        </h2>
        <p className="mb-8 text-gray-200">
          Welcome to Kopi Kelana — where every cup tells a story.
        </p>
        <a
          href="#menu"
          className="px-8 py-4 rounded-2xl bg-blue-600 text-white hover:bg-yellow-400 hover:text-white transition"
        >
          Explore Menu
        </a>
      </motion.div>
    </section>
  );
}
