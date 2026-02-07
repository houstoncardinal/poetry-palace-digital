import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const ScrollRevealText = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: ScrollRevealTextProps) => {
  const words = children.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                delay: delay + i * staggerDelay,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default ScrollRevealText;
