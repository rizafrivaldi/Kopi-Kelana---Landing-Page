export default function InstagramButton() {
  return (
    <a
      href="https://instagram.com/kopikelana" // ganti username lo
      target="_blank"
      className="fixed bottom-20 right-6 flex items-center gap-2 
                 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                 text-white px-5 py-3 rounded-full shadow-lg 
                 hover:scale-110 transition z-50"
    >
      <span className="hidden md:block">Instagram</span>
    </a>
  );
}
