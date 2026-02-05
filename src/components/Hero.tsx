 import { motion } from "framer-motion";
 import heroBg from "@/assets/hero-bg.jpg";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
         <img
           src={heroBg}
           alt="Fathmah - NYC Youth Poet Laureate"
           className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-gradient-hero" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5 }}
           className="mb-6"
         >
           <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-gold/80 mb-4">
             NYC Youth Poet Laureate 2024
           </span>
         </motion.div>
 
         <motion.h1
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wide mb-6 text-gradient-gold"
         >
           Fathmah
         </motion.h1>
 
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="font-display text-xl md:text-2xl italic text-cream-muted mb-4"
         >
           also known as
           <span className="text-rose ml-2">Stain</span>
         </motion.p>
 
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.9 }}
           className="space-y-2 mt-8"
         >
           <p className="font-body text-lg text-foreground/80">
              Poet • Writer • Filmmaker 🌍
           </p>
           <p className="font-body text-base text-muted-foreground italic">
             "Always in a dress 💗"
           </p>
         </motion.div>
 
         {/* Decorative Line */}
         <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1.2, delay: 1.2 }}
           className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12"
         />
 
         {/* Featured Quote */}
         <motion.blockquote
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.5 }}
           className="mt-12 max-w-xl mx-auto"
         >
           <p className="font-display text-2xl md:text-3xl italic text-foreground/70 leading-relaxed">
             "Words are the only vessel
             <br />
             that can hold the weight of my world"
           </p>
         </motion.blockquote>
 
         {/* Scroll Indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 2 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2"
         >
           <div className="flex flex-col items-center gap-2 text-muted-foreground animate-float">
             <span className="font-body text-xs tracking-widest uppercase">Explore</span>
             <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Hero;