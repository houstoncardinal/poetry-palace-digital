import { motion } from "framer-motion";
import { Instagram, Mail, Globe, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
      {/* Rich decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy/6 rounded-full blur-[180px]" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gold/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-rose/4 rounded-full blur-[100px]" />
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
            Get in <span className="text-gradient-gold">Touch</span>
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
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-rose/8 to-card/50 border border-rose/20 hover:border-gold/50 hover:bg-gold/5 hover:glow-rose transition-all duration-300"
          >
            <Instagram size={20} className="text-rose group-hover:text-gold transition-colors duration-300" />
            <span className="font-body text-foreground group-hover:text-gold transition-colors">@poeticallyfathmah</span>
          </a>

          <a
            href="https://threads.net/@poeticallyfathmah"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-gold/5 to-card/50 border border-border/50 hover:border-gold/50 hover:bg-gold/5 hover:glow-gold transition-all duration-300"
          >
            <Globe size={20} className="text-gold" />
            <span className="font-body text-foreground group-hover:text-gold transition-colors">Threads</span>
          </a>

          <a
            href="mailto:poeticallyfathmah@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-burgundy/8 to-card/50 border border-burgundy/20 hover:border-gold/50 hover:bg-gold/5 hover:glow-burgundy transition-all duration-300"
          >
            <Mail size={20} className="text-gold" />
            <span className="font-body text-foreground group-hover:text-gold transition-colors">Email</span>
          </a>
        </motion.div>

        {/* Final Quote with rich styling */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 max-w-2xl mx-auto relative"
        >
          {/* Decorative quote accent */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
          
          <p className="font-display text-3xl md:text-4xl italic leading-relaxed">
            <span className="text-foreground/30">"Poetry is the language of the </span>
            <span className="text-gradient-rose">soul speaking</span>
            <span className="text-foreground/30"> to souls—</span>
            <br />
            <span className="text-foreground/30">across time, across borders, across </span>
            <span className="text-gradient-gold">the silence</span>
            <span className="text-foreground/30"> between us."</span>
          </p>
          <footer className="mt-8 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <span className="font-body text-sm text-gold-muted">Fathmah</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Contact;
