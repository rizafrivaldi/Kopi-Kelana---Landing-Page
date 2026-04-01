import { motion } from "framer-motion";
import contactImg from "../assets/menu5.jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black px-4 sm:px-6">
      <div
        className="max-w-6xl mx-auto min-h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-cover bg-center flex items-center justify-center p-6 sm:p-10"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-md"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>

          <p className="mb-2 text-sm sm:text-base">Tanjong Pagar, Singapore</p>

          <p className="mb-2 text-sm sm:text-base">+65 1234 5678</p>

          <p className="mb-6 text-sm sm:text-base break-words">
            kopikelana@email.com
          </p>

          <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white/10 hover:bg-blue-600 backdrop-blur-lg border border-white/30 hover:scale-105 transition">
            Contact Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
