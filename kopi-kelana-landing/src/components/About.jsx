import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className=" bg-gray-100 dark:bg-zinc-900 py-24">
      <div className=" py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-black dark:text-yellow-400">
            About Kopi Kelana
          </h2>
          <p className="text-black dark:text-yellow-400 leading-relaxed font-italic">
            Kopi Kelana is more than a coffee shop. It is a cozy place where you
            can relax, work, or enjoy time with friends. We use high quality
            beans and create a warm experience in every cup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
