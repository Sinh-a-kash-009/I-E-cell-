// components/SpotlightCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={`relative rounded-2xl border border-neutral-800 bg-black p-6 shadow-lg transition-colors duration-300 hover:border-neutral-700 border-b-0 border-t-0 ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.15), transparent 80%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

