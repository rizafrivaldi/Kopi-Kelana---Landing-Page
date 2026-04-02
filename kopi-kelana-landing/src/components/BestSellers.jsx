import { motion } from "framer-motion";

// ⚠️ IMPORT IMAGE (WAJIB BIAR SIZE WORK)
import caramel from "../assets/menu/caramel_macchiato.png";
import matcha from "../assets/menu/macha.png";
import americano from "../assets/menu/americano.png";

const items = [
  {
    name: "Caramel Macchiato",
    price: "$5.50",
    img: caramel,
    size: "w-32", // bebas ubah
  },
  {
    name: "Matcha",
    price: "$4.00",
    img: matcha,
    size: "w-44",
  },
  {
    name: "Americano",
    price: "$3.50",
    img: americano,
    size: "w-32",
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

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative flex flex-col items-center group"
          >
            {/* CIRCLE BACKGROUND */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gray-100 dark:bg-zinc-800 shadow-xl flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute w-40 h-40 bg-blue-500/20 dark:bg-yellow-400/20 blur-3xl rounded-full"></div>
            </div>

            {/* FLOATING IMAGE */}
            <div className="absolute -top-12">
              <img
                src={item.img}
                alt={item.name}
                className={`${item.size} object-contain drop-shadow-2xl transition duration-300 group-hover:scale-110`}
              />
            </div>

            {/* TEXT */}
            <div className="mt-20 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <p className="text-blue-600 dark:text-yellow-400 font-bold">
                {item.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
