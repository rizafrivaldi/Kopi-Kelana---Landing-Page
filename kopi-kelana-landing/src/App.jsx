import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CommentForm from "./components/CommentForm.jsx"; // ✅ TAMBAH
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import InstagramButton from "./components/InstagramButton.jsx";
import BestSellers from "./components/BestSellers.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ TESTIMONIAL STATE
  const [testimonials, setTestimonials] = useState([]);

  // ✅ LOAD DATA DARI LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("testimonials");

    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch {
        console.log("Error parsing data");
      }
    } else {
      // default data
      setTestimonials([
        {
          text: "Best coffee in town! The ambiance is cozy and the staff is friendly.",
          author: "Alice",
        },
        {
          text: "I love their signature blend. It's the perfect balance of flavor and aroma.",
          author: "Bob",
        },
        {
          text: "The best place to work or relax. Highly recommend their pastries too!",
          author: "Charlie",
        },
      ]);
    }
  }, []);

  // ✅ SAVE KE LOCAL STORAGE
  useEffect(() => {
    if (testimonials.length > 0) {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }, [testimonials]);

  // ✅ DARK MODE
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ✅ ADD COMMENT
  const addComment = (newComment) => {
    setTestimonials((prev) => [newComment, ...prev.slice(0, 9)]);
  };

  const resetComments = () => {
    setTestimonials([]);
    localStorage.removeItem("testimonials");
  };

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

      {/* ✅ FIX DI SINI */}
      <Testimonials testimonials={testimonials} resetComments={resetComments} />
      <CommentForm addComment={addComment} />

      <Contact />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
}
