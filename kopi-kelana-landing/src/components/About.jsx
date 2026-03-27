import { motion } from "framer-motion";
import AboutImg from "../assets/coffee.jpg";

export default function About() {
  return (
    <section id="about" className=" bg-white dark:bg-black py-24 backdrop-blur">
      <div className=" py-18 px-6 max-w-6xl mx-auto text-center bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-black dark:text-yellow-400">
            About Kopi Kelana
          </h2>
          <p className="text-black dark:text-yellow-400 leading-relaxed font-italic font-semibold">
            Kopi Kelana is more than a coffee shop. It is a cozy place where you
            can relax, work, or enjoy time with friends. We use high quality
            beans and create a warm experience in every cup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
