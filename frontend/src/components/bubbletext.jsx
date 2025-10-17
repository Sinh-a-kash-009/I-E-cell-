import { useState, useEffect } from "react";

// The list of words to cycle through
const WORDS = [
 "Innovate.", "Initiate.", "Inspire."
];

const WordSwapAnimation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change the word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === WORDS.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex whitespace-pre text-2xl md:text-4xl font-bold text-slate-800">
      <span className="text-cyan-900">Our MOTTO is </span>
      <span className="relative ml-3 inline-flex h-11 overflow-hidden rounded-lg bg-violet-600 px-3 text-white">
        {/* The animated span with the key prop */}
        <span
          key={currentWordIndex}
          className="animate-slide-in-from-bottom"
        >
          {WORDS[currentWordIndex]}
        </span>
      </span>
    </p>
  );
};

export default WordSwapAnimation;