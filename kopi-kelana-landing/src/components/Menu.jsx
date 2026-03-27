import { motion } from "framer-motion";
import { useState } from "react";
import menuImg from "../assets/menu5.jpg";

const menuItems = [
  {
    name: "Latte",
    price: "$4.50",
    type: "Coffee",
    img: "./src/assets/menu/americano.png",
    size: "w-28",
  },
  {
    name: "Cappuccino",
    price: "$4.00",
    type: "Coffee",
    img: "./src/assets/menu/caramel_macchiato.png",
    size: "w-28",
  },
  {
    name: "Americano",
    price: "$3.50",
    type: "Coffee",
    img: "./src/assets/menu/chocolate.png",
    size: "w-56",
  },
  {
    name: "Caramel Macchiato",
    price: "$5.50",
    type: "Coffee",
    img: "./src/assets/menu/coffee_pandan.png",
    size: "w-24",
  },
  {
    name: "Chocolate Milk",
    price: "$3.50",
    type: "Non-Coffee",
    img: "./src/assets/menu/macha.png",
    size: "w-32",
  },
  {
    name: "Green Tea Latte",
    price: "$4.00",
    type: "Non-Coffee",
    img: "./src/assets/menu/coffee_latte.png",
    size: "w-32",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === filter);

  return (
    <section id="menu" className="py-24 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-6 text-blue-900 dark:text-yellow-400">
          Our Menu
        </h2>

        {/* FILTER */}
        <div className="mb-10 space-x-4">
          {["all", "coffee", "non-coffee"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl backdrop-blur-lg border transition
              ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white/50 dark:bg-zinc-800 text-black dark:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white dark:bg-zinc-800 rounded-2xl p-6 pt-20 
                         shadow hover:-translate-y-2 hover:shadow-xl transition group"
            >
              {/* FLOATING PNG */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img
                  src={item.img}
                  className={`${item.size || "w-32"} object-contain 
                              drop-shadow-xl group-hover:scale-110 transition`}
                />
              </div>

              {/* CONTENT */}
              <h3 className="mt-12 text-lg font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>

              <p className="text-blue-600 dark:text-yellow-400 font-bold">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
