import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import InstagramButton from "./components/InstagramButton.jsx";
import BestSellers from "./components/BestSellers.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div
      className="font-sans transition duration-300 
                bg-lightWhite text-lightText 
                dark:bg-darkBlack dark:text-darkGold"
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <BestSellers />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
}
