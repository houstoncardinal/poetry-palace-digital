import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayText}
      {started && displayText.length < text.length && (
        <span className="animate-pulse text-gold">|</span>
      )}
    </span>
  );
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt="Abstract artistic background"
          className="w-full h-[130%] object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, hsl(20 15% 8% / 0.85) 100%)",
          }}
        />
        {/* Color accent overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 via-transparent to-gold/5" />
      </motion.div>

      {/* Floating accent orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-48 h-48 bg-burgundy/8 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ y: [15, -25, 15], x: [10, -15, 10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-[20%] w-56 h-56 bg-gold/6 rounded-full blur-[90px]"
        />
        <motion.div
          animate={{ y: [10, -15, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 h-40 bg-rose/5 rounded-full blur-[70px]"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
        style={{ y: textY, opacity }}
      >
        {/* Laureate badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <span className="inline-block font-body text-xs tracking-[0.4em] uppercase px-6 py-2.5 border border-gold/25 text-gold/90 backdrop-blur-md bg-background/20 border-glow-gold">
            NYC Youth Poet Laureate 2024
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] font-light tracking-wide mb-2 text-gradient-gold leading-none text-shadow-glow"
        >
          Fathmah
        </motion.h1>

        {/* Stage Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-xl md:text-2xl italic text-cream-muted mb-6"
        >
          also known as
          <span className="text-gradient-burgundy ml-2 not-italic font-medium text-shadow-rose">Stain</span>
        </motion.p>

        {/* Typewriter Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 mb-6"
        >
          <p className="font-body text-lg md:text-xl text-foreground/70 italic">
            "<TypewriterText text="Words are the only vessel that can hold the weight of my world" delay={1.5} />"
          </p>
        </motion.div>

        {/* Bio Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-2 mt-6"
        >
          <p className="font-body text-base text-foreground/60">
            Poet • Writer • Filmmaker 🌍
          </p>
          <p className="font-body text-sm text-rose/60 italic">
            "Always in a dress 💗"
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-48 h-px mx-auto mt-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/50 to-transparent blur-sm" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-16"
        >
          <a href="#poetry" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-gold transition-colors duration-500 group">
            <span className="font-body text-xs tracking-[0.4em] uppercase group-hover:tracking-[0.5em] transition-all duration-500">
              Enter
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
