import React, { useState, useEffect } from 'react';

const TextLooper = () => {
  const texts = ['Pondicherry', 'Pondicherry'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedLetters, setTypedLetters] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex].split('');

    if (charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedLetters((prev) => [...prev, currentText[charIndex]]);
        setCharIndex((prev) => prev + 1);
      }, 100); // smooth typing speed
      return () => clearTimeout(typingTimeout);
    } else {
      const pauseBeforeNext = setTimeout(() => {
        setTypedLetters([]);
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // stay visible before next word
      return () => clearTimeout(pauseBeforeNext);
    }
  }, [charIndex, currentTextIndex]);

  return (
    <div className="text-container">
      {typedLetters.map((char, index) => (
        <span
          key={index}
          className="type-letter"
          style={{ animationDelay: `${index * 0.05}s`, }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextLooper;
