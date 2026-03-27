import { motion } from "framer-motion";

const items = [
  {
    name: "Caramel Macchiato",
    price: "$5.50",
    img: "./src/assets/menu/caramel_macchiato.png",
    size: "w-36", // PNG lo
  },
  {
    name: "Macha",
    price: "$4.00",
    img: "./src/assets/menu/macha.png",
    size: "w-36", // PNG lo
  },
  {
    name: "Americano",
    price: "$3.50",
    img: "./src/assets/menu/americano.png",
    size: "w-32", // PNG lo
  },
];

export default function BestSellers() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 dark:text-yellow-400">
          Best Sellers
        </h2>
        <p className="text-gray-500 dark:text-white mt-2">
          Our most loved coffee selections
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative bg-gray-100 dark:bg-zinc-800 rounded-2xl p-6 pt-20 text-center shadow hover:-translate-y-2 hover:shadow-xl transition group"
          >
            {/* PNG IMAGE FLOATING */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <img
                src={item.img}
                className="w-32 object-contain drop-shadow-xl group-hover:scale-110 transition"
              />
            </div>

            {/* CONTENT */}
            <h3 className="mt-12 text-lg font-semibold text-gray-800 dark:text-white">
              {item.name}
            </h3>

            <p className="text-blue-600 dark:text-yellow-400 font-bold">
              {item.price}
            </p>

            {/* BADGE */}
            <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-yellow-400 text-black rounded-full">
              Best 🔥
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
