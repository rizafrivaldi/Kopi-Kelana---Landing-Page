export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281347065525?text=Hello%20Kopi%20Kelana!"
      target="_blank"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <span className="hidden md:block">WhatsApp</span>
    </a>
  );
}
