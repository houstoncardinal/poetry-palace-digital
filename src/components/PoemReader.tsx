import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PoemReaderProps {
  poem: {
    title: string;
    fullText: string;
    theme: string;
    dedication?: string;
  } | null;
  onClose: () => void;
}

const PoemReader = ({ poem, onClose }: PoemReaderProps) => {
  if (!poem) return null;

  const lines = poem.fullText.split("\n");

  return (
    <AnimatePresence>
      {poem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl overflow-y-auto"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="fixed top-8 right-8 z-[101] p-3 text-muted-foreground hover:text-gold transition-colors"
          >
            <X size={24} />
          </motion.button>

          <div
            className="min-h-screen flex items-center justify-center py-20 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-2xl w-full">
              {/* Theme */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="block font-body text-xs tracking-[0.4em] uppercase text-gold-muted mb-6"
              >
                {poem.theme}
              </motion.span>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-5xl md:text-7xl text-gradient-gold mb-12"
              >
                {poem.title}
              </motion.h2>

              {/* Dedication */}
              {poem.dedication && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="font-display text-base italic text-muted-foreground mb-12"
                >
                  {poem.dedication}
                </motion.p>
              )}

              {/* Poem Lines */}
              <div className="space-y-1">
                {lines.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.12,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`font-body text-lg md:text-xl leading-relaxed ${
                      line.trim() === ""
                        ? "h-6"
                        : "text-foreground/85"
                    }`}
                  >
                    {line || "\u00A0"}
                  </motion.p>
                ))}
              </div>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + lines.length * 0.12 + 0.3, duration: 0.8 }}
                className="mt-16 pt-8 border-t border-border/30"
              >
                <p className="font-display text-lg italic text-gold/60">
                  — Fathmah
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PoemReader;
