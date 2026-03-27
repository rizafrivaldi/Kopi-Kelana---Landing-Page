import { motion } from "framer-motion";
import AboutImg from "../assets/coffee.jpg";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section id="about" className=" bg-white dark:bg-black py-24 backdrop-blur">
      <div className=" py-18 px-6 max-w-6xl mx-auto text-center bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-yellow-400 dark:bg-yellow-400 shadow-lg">
            <img
              src={logo}
              alt="Kopi Kelana Logo"
              className="mx-auto mb-6 w-24 md:w-28 object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold mb-6 text-blue-900 dark:text-yellow-400">
            About Kopi Kelana
          </h2>
          <p className="text-gray-500 dark:text-yellow-400 leading-relaxed">
            Kopi Kelana is more than a coffee shop. It is a cozy place where you
            can relax, work, or enjoy time with friends. We use high quality
            beans and create a warm experience in every cup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
