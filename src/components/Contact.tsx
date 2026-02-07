import { motion } from "framer-motion";
import { Instagram, Mail, Globe, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-muted">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            For bookings, collaborations, media inquiries, or just to share
            how poetry has touched your life — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <a
            href="https://instagram.com/poeticallyfathmah"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-card/50 border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
          >
            <Instagram size={20} className="text-gold" />
            <span className="font-body text-foreground group-hover:text-gold transition-colors">@poeticallyfathmah</span>
          </a>

          <a
            href="https://threads.net/@poeticallyfathmah"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-card/50 border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
          >
            <Globe size={20} className="text-gold" />
            <span className="font-body text-foreground group-hover:text-gold transition-colors">Threads</span>
          </a>

          <a
            href="mailto:poeticallyfathmah@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-card/50 border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
          >
            <Mail size={20} className="text-gold" />
            <span className="font-body text-foreground group-hover:text-gold transition-colors">Email</span>
          </a>
        </motion.div>

        {/* Final Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <p className="font-display text-3xl md:text-4xl italic text-foreground/40 leading-relaxed">
            "Poetry is the language of the soul speaking to souls—
            across time, across borders, across the silence between us."
          </p>
          <footer className="mt-6 font-body text-sm text-gold-muted">
            — Fathmah
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Contact;
