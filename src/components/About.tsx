 import { motion } from "framer-motion";
 import { Award, Film, Mic, Pen } from "lucide-react";
 
 const achievements = [
   {
     icon: Award,
     title: "NYC Youth Poet Laureate",
     description: "2024 Title Holder — Urban Word NYC",
   },
   {
     icon: Pen,
     title: "Poet & Writer",
     description: "Published works on identity, diaspora, and resilience",
   },
   {
     icon: Film,
     title: "Filmmaker",
     description: "Visual storyteller exploring cultural narratives",
   },
   {
     icon: Mic,
     title: "Event Host",
     description: "Curator of Rebel Tongues — A Diaspora Poetry Experience",
   },
 ];
 
 const About = () => {
   return (
     <section id="about" className="py-24 md:py-32 relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy rounded-full blur-3xl" />
         <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold rounded-full blur-3xl" />
       </div>
 
       <div className="max-w-6xl mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Left Column - Text */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-muted">
               The Poet
             </span>
             <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8 text-foreground">
               About <span className="text-gradient-rose">Fathmah</span>
             </h2>
 
             <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/80">
               <p>
                 Fathmah, known artistically as <span className="text-gold italic">Stain</span>,
                 is the 2024 NYC Youth Poet Laureate through Urban Word NYC. Her work explores
                 the intersections of identity, diaspora, womanhood, and resilience.
               </p>
               <p>
                 As a poet, writer, and filmmaker, she weaves together the threads of her
                 heritage with the fabric of her New York City experience, creating art that
                 speaks to the soul of those who carry multiple worlds within them.
               </p>
               <p>
                 Her performances have graced stages across the city, and she hosts
                 <span className="text-rose"> Rebel Tongues</span> — an immersive poetry
                 experience designed for cultural expansion and community connection.
               </p>
             </div>
 
             {/* Signature Quote */}
             <motion.blockquote
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-10 pl-6 border-l-2 border-gold/50"
             >
               <p className="font-display text-xl italic text-foreground/60">
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
                 transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                 className="p-6 bg-card/30 border border-border/30 rounded-sm hover:border-gold/30 hover:glow-gold transition-all duration-500"
               >
                 <achievement.icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
                 <h3 className="font-display text-lg text-foreground mb-2">
                   {achievement.title}
                 </h3>
                 <p className="font-body text-sm text-muted-foreground">
                   {achievement.description}
                 </p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;