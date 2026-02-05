 import { motion } from "framer-motion";
 
 const poems = [
   {
     id: 1,
     title: "Duniya",
     excerpt: `The world spins on axes we cannot see,
 yet we feel every tremor, every shift.
 I carry the weight of two homelands—
 one in my blood, one in my bones.`,
     theme: "Identity",
   },
   {
     id: 2,
     title: "Stain",
     excerpt: `They called me a stain,
 as if I were something to be washed away.
 But I am the ink that writes history,
 the mark that refuses to fade.`,
     theme: "Resilience",
   },
   {
     id: 3,
     title: "Inheritance",
     excerpt: `My mother's hands hold stories
 of villages left behind,
 of recipes passed through whispers,
 of love that crossed oceans.`,
     theme: "Heritage",
   },
 ];
 
 const PoetryShowcase = () => {
   return (
     <section id="poetry" className="py-24 md:py-32 bg-gradient-section">
       <div className="max-w-6xl mx-auto px-6">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-muted">
             Selected Works
           </span>
           <h2 className="font-display text-4xl md:text-6xl mt-4 text-foreground">
             Poetry
           </h2>
           <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6" />
         </motion.div>
 
         {/* Poetry Grid */}
         <div className="grid md:grid-cols-3 gap-8 md:gap-12">
           {poems.map((poem, index) => (
             <motion.article
               key={poem.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               className="group relative"
             >
               <div className="p-8 bg-card/50 border border-border/50 rounded-sm hover:border-gold/30 transition-all duration-500 hover:glow-rose">
                 {/* Theme Badge */}
                 <span className="inline-block font-body text-xs tracking-widest uppercase text-gold-muted mb-4">
                   {poem.theme}
                 </span>
 
                 {/* Title */}
                 <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 group-hover:text-gold transition-colors duration-300">
                   {poem.title}
                 </h3>
 
                 {/* Excerpt */}
                 <div className="poetry-quote">
                   <p className="font-body text-base leading-relaxed text-foreground/70 whitespace-pre-line">
                     {poem.excerpt}
                   </p>
                 </div>
 
                 {/* Read More */}
                 <div className="mt-8 pt-6 border-t border-border/30">
                   <span className="font-body text-sm text-muted-foreground group-hover:text-gold transition-colors duration-300 cursor-pointer">
                     Read full poem →
                   </span>
                 </div>
               </div>
             </motion.article>
           ))}
         </div>
 
         {/* View All CTA */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-center mt-16"
         >
           <a
             href="#"
             className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300"
           >
             View All Poetry
           </a>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default PoetryShowcase;