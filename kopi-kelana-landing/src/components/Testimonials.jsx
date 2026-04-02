import { motion } from "framer-motion";
import { useState } from "react";

export default function Testimonials({ testimonials, setTestimonials }) {
  const resetComments = () => {
    const adminPassword = "admincakep"; // ganti sesuai password admin lo
    const userPass = prompt("Enter admin password to reset comments:");
    if (userPass !== adminPassword) {
      alert("Incorrect password! ❌");
      return;
    }

    const confirmReset = confirm(
      "Are you sure you want to reset all comments? This cannot be undone.",
    );
    if (confirmReset) {
      setTestimonials([]); // reset jadi kosong
      alert("Comments have been reset ✅");
    }
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-black text-white text-center px-6"
    >
      <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-zinc-900 rounded-3xl py-24 px-6 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-blue-800 dark:text-blue-400">
            Testimonials
          </h2>

          {/* Tombol Reset tetap di atas grid */}
          <button
            onClick={resetComments}
            className="mb-12 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Reset Comments
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-800 hover:dark:bg-yellow-400p p-6 rounded-2xl shadow-lg"
              >
                <p className="pt-10 px-6 text-center text-gray-600 dark:text-gray-300">
                  "{t.text}"
                </p>

                <h4 className="mt-4 font-semibold text-blue-600 dark:text-yellow-400">
                  {t.author}
                </h4>

                <p className="text-xs text-gray-400 mt-1">{t.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
