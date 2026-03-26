import { motion } from "framer-motion";

const testimonials = [
  { text: "Best coffee ever!", author: "Alice" },
  { text: "Super cozy place!", author: "Bob" },
  { text: "Amazing vibe and taste!", author: "Charlie" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-zinc-900 py-24">
      <div className="py-24, px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-blue-800 dark:text-blue-400">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-2xl shadow"
              >
                <p className="text-gray-600 dark:text-gray-300">"{t.text}"</p>
                <h4 className="mt-4 font-semibold text-blue-600">{t.author}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
