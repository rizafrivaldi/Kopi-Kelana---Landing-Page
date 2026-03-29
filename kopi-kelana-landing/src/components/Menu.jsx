import { motion } from "framer-motion";
import menuImg from "../assets/menu4.jpg"; // ganti dengan gambar lo

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-yellow-400">
          Our Menu
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-stretch"
        >
          {/* LEFT: IMAGE */}
          <div className="md:w-1/2 h-full md:h-[420px]">
            <img
              src={menuImg}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* RIGHT: MENU LIST */}
          <div className="md:w-1/2 h-full bg-gray-100 dark:bg-zinc-800 rounded-3xl p-8 flex flex-col md:h-[420px]">
            {/* WRAPPER SCROLL */}
            <div className="overflow-y-auto pr-2 max-h-[400px] scrollbar-hide">
              {/* COFFEE */}
              <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-yellow-400">
                Coffee
              </h3>

              <div className="space-y-2 mb-8">
                {[
                  { name: "Americano", price: "IDR 20k" },
                  { name: "Coffee Latte", price: "IDR 25k" },
                  { name: "Cappuccino", price: "IDR 24k" },
                  { name: "Espresso", price: "IDR 18k" },
                  { name: "Mocha", price: "IDR 27k" },
                  { name: "Flat White", price: "IDR 26k" },
                  { name: "Affogato", price: "IDR 28k" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-dashed pb-1 text-gray-700 dark:text-gray-300"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* NON COFFEE */}
              <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-yellow-400">
                Non Coffee
              </h3>

              <div className="space-y-2">
                {[
                  { name: "Chocolate", price: "IDR 22k" },
                  { name: "Matcha Latte", price: "IDR 24k" },
                  { name: "Milk Tea", price: "IDR 23k" },
                  { name: "Lemon Tea", price: "IDR 20k" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-dashed pb-1 text-gray-700 dark:text-gray-300"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
