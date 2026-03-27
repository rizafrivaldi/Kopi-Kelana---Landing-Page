import { motion } from "framer-motion";
import contactImg from "../assets/menu5.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-20 pb-20 py-24 bg-white dark:bg-black text-white text-center px-6"
    >
      <div
        className="max-w-6-xl mx-auto h-[30vh] rounded-3xl overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-2">Tanjong Pagar, Singapore</p>
          <p className="mb-2">+65 1234 5678</p>
          <p className="mb-6">kopikelana@email.com</p>
          <button className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-blue-600 backdrop-blur-lg border border-white/30 hover:scale-105 transition">
            Contact Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
