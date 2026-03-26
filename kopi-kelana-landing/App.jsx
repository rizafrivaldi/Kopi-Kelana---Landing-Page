import { useState, useEffect } from "react";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Menu from "./src/components/Menu";
import Footer from "./src/components/Footer";
import WhatsAppButton from "./src/components/WhatsAppButton";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-sans transition bg-blue-500 bgb-gradient-to-b from-white via-blue-50 to-blue-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Menu />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
