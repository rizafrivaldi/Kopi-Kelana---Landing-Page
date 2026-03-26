import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { name: "Espresso", price: "$3.00", type: "Coffee" },
  { name: "Latte", price: "$4.50", type: "Coffee" },
  { name: "Cappuccino", price: "$4.00", type: "Coffee" },
  { name: "Americano", price: "$3.50", type: "Coffee" },
  { name: "Mocha", price: "$5.00", type: "Coffee" },
  { name: "Caramel Macchiato", price: "$5.50", type: "Coffee" },
  { name: "Chocolate Milk", price: "$3.50", type: "Non-Coffee" },
  { name: "Green Tea Latte", price: "$4.00", type: "Non-Coffee" },
];

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === filter);

  return (
    <section id="menu" className="py-24 bg-blue-900 dark:bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 dark:text-yellow-400">
          Our Menu
        </h2>

        <div className="mb-8 space-x-4">
          {["All", "Coffee", "Non-Coffee"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl glass-btn ${filter === f ? "bg-blue-600/50" : "bg-white/20"}`}
            >
              {f.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-box p-6 shadow hover:scale-105 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500"
                className="rounded-xl mb-4"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
