import { motion } from "framer-motion";
import { Award, Film, Mic, Pen, Sparkles } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

const achievements = [
  {
    icon: Award,
    title: "NYC Youth Poet Laureate",
    description: "2024 Title Holder — Urban Word NYC",
  },
  {
    icon: Pen,
    title: "Poet & Writer",
    description: "Exploring identity, diaspora, womanhood, and resilience",
  },
  {
    icon: Film,
    title: "Filmmaker",
    description: "Visual storyteller weaving cultural narratives",
  },
  {
    icon: Mic,
    title: "Rebel Tongues",
    description: "Curator of a diaspora poetry experience",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-muted">
              The Poet
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 mb-10 text-foreground">
              About <span className="text-gradient-rose">Fathmah</span>
            </h2>

            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/80">
              <p>
                <ScrollRevealText>
                  Fathmah, known artistically as Stain, is the 2024 NYC Youth Poet Laureate through Urban Word NYC. Her work explores the intersections of identity, diaspora, womanhood, and resilience — carrying the weight of two homelands in every verse.
                </ScrollRevealText>
              </p>
              <p>
                <ScrollRevealText delay={0.3}>
                  As a poet, writer, and filmmaker, she weaves together the threads of her heritage with the fabric of her New York City experience, creating art that speaks to the soul of those who carry multiple worlds within them.
                </ScrollRevealText>
              </p>
              <p>
                <ScrollRevealText delay={0.6}>
                  She is the creator and host of Rebel Tongues — an immersive diaspora poetry experience designed for neurotribe expansion, featuring poets and musicians from across the African and Arab diaspora.
                </ScrollRevealText>
              </p>
            </div>

            {/* Signature Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pl-6 border-l-2 border-gold/40"
            >
              <p className="font-display text-xl italic text-foreground/50">
                "I write to remember what we were never supposed to forget."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                className="group p-8 bg-card/30 border border-border/30 rounded-sm hover:border-gold/30 hover:glow-gold transition-all duration-500"
              >
                <achievement.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}

            {/* Extra element - Instagram CTA */}
            <motion.a
              href="https://instagram.com/poeticallyfathmah"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group sm:col-span-2 p-8 bg-gradient-to-br from-burgundy/15 to-gold/5 border border-burgundy/20 rounded-sm hover:border-gold/30 hover:glow-rose transition-all duration-500 flex items-center gap-4"
            >
              <Sparkles className="w-6 h-6 text-rose" />
              <div>
                <p className="font-display text-lg text-foreground group-hover:text-gold transition-colors">
                  Follow the journey
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  @poeticallyfathmah on Instagram
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
