"use client";

import { motion } from "framer-motion";

export function AnimatedHero({ lines }: { lines: string[] }) {
  const words = lines.map((line) => line.split(" "));

  return (
    <div aria-label={lines.join(" ")}>
      {words.map((line, lineIndex) => (
        <div key={line.join("-")} className="overflow-hidden">
          <div className="flex flex-wrap gap-x-4">
            {line.map((word, wordIndex) => (
              <motion.span
                key={`${word}-${wordIndex}`}
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: lineIndex * 0.22 + wordIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
