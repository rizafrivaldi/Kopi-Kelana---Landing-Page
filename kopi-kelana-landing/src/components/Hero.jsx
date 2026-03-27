import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero5.jpg";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-20 px-8 bg-white dark:bg-black">
      <div
        className="max-w-6-xl mx-auto h-[80vh] rounded-3xl overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 dark:bg-black/30 p-10 rounded-2xl backdrop-blur-sm justify-center items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400 dark:text-yellow-500">
            Coffee That Feels Like Home
          </h2>
          <p className="mb-8 text-gray-200 justify-center text-lg md:text-xl font-italic font-semibold flex items-center text-center">
            Welcome to Kopi Kelana — where every cup tells a story.
          </p>
          <a
            href="#menu"
            className="px-8 py-4 rounded-2xl bg-blue-600 text-white hover:bg-yellow-400 hover:text-white transitionjustify-center font-sans font-semibold"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
