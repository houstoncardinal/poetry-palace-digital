import { motion } from "framer-motion";
import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-burgundy/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Name with gradient */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl text-gradient-gold text-shadow-glow hover:opacity-80 transition-opacity"
          >
            Fathmah
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/poeticallyfathmah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rose transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <div className="w-px h-4 bg-border/30" />
            <a
              href="mailto:poeticallyfathmah@gmail.com"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60 font-body">
            <span>Made with</span>
            <Heart size={12} className="text-rose fill-rose/40" />
            <span>for the love of words</span>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} Fathmah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
