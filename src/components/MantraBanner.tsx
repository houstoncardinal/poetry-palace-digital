import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MantraBanner = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-gradient-mantra">
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-burgundy/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-gold/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose/5 rounded-full blur-[80px]" />
      </div>

      {/* Scrolling text rows */}
      <div className="relative z-10 space-y-6 select-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <p className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground/[0.04] tracking-wider inline-block">
            POET • WRITER • FILMMAKER • STAIN • REBEL TONGUE • DUNIYA • POET • WRITER • FILMMAKER • STAIN •
          </p>
        </motion.div>

        <motion.div style={{ scale }} className="text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl italic leading-tight max-w-4xl mx-auto"
          >
            <span className="text-foreground/60">"Words are the only vessel</span>
            <br />
            <span className="text-gradient-gold text-shadow-glow">that can hold the weight</span>
            <br />
            <span className="text-foreground/60">of my world"</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-rose/70">— Fathmah "Stain"</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
          <p className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground/[0.04] tracking-wider inline-block">
            ALWAYS IN A DRESS 💗 • INDELIBLE • EVIDENCE • NYC YOUTH POET LAUREATE • ALWAYS IN A DRESS 💗 •
          </p>
        </motion.div>
      </div>

      {/* Bottom edge gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" />
    </section>
  );
};

export default MantraBanner;
