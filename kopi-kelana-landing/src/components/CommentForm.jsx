import { useState } from "react";

export default function CommentForm({ addComment }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !name) return;

    addComment({
      text,
      author: name,
      date: new Date().toLocaleDateString(),
    });

    setText("");
    setName("");
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-2xl font-bold mb-6">Leave a Comment</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border 
             bg-white text-black 
             dark:bg-zinc-800 dark:text-white 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Comment"
          className="w-full p-3 rounded-lg border 
             bg-white text-black 
             dark:bg-zinc-800 dark:text-white 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
