import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gold" | "rose" | "burgundy";
  ornament?: boolean;
}

const SectionDivider = ({ variant = "gold", ornament = true }: SectionDividerProps) => {
  const gradientMap = {
    gold: "from-transparent via-gold/40 to-transparent",
    rose: "from-transparent via-rose/30 to-transparent",
    burgundy: "from-transparent via-burgundy-light/30 to-transparent",
  };

  const glowMap = {
    gold: "bg-gold/20",
    rose: "bg-rose/15",
    burgundy: "bg-burgundy/15",
  };

  return (
    <div className="relative py-8 flex items-center justify-center overflow-hidden">
      {/* Ambient glow behind */}
      <div className={`absolute w-60 h-20 ${glowMap[variant]} rounded-full blur-3xl opacity-60`} />
      
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-md flex items-center gap-4"
      >
        <div className={`flex-1 h-px bg-gradient-to-r ${gradientMap[variant]}`} />
        
        {ornament && (
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" className={`${variant === "gold" ? "text-gold/50" : variant === "rose" ? "text-rose/50" : "text-burgundy-light/50"}`}>
              <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z" fill="currentColor" />
            </svg>
          </motion.div>
        )}
        
        <div className={`flex-1 h-px bg-gradient-to-r ${gradientMap[variant]}`} />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
