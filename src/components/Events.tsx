 import { motion } from "framer-motion";
 import { Calendar, MapPin, ExternalLink } from "lucide-react";
 
 const events = [
   {
     id: 1,
     title: "Rebel Tongues",
     subtitle: "A Diaspora Poetry Experience",
     date: "Ongoing Series",
     location: "Various Venues, NYC",
     description:
       "An immersive poetry experience designed for neurotribe expansion. Featuring poets, musicians, and cultural futurists.",
     featured: true,
   },
   {
     id: 2,
     title: "Open Mic Nights",
     subtitle: "Poetry & Performance",
     date: "Monthly",
     location: "New York City",
     description:
       "Join the community for an evening of spoken word, poetry, and artistic expression.",
     featured: false,
   },
   {
     id: 3,
     title: "Urban Word NYC Events",
     subtitle: "Youth Poetry Showcase",
     date: "Throughout 2024",
     location: "Schomburg Center & More",
     description:
       "As NYC Youth Poet Laureate, Fathmah represents at various Urban Word events and competitions.",
     featured: false,
   },
 ];
 
 const Events = () => {
   return (
     <section id="events" className="py-24 md:py-32 bg-gradient-section">
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
             Performances & Gatherings
           </span>
           <h2 className="font-display text-4xl md:text-6xl mt-4 text-foreground">
             Events
           </h2>
           <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6" />
         </motion.div>
 
         {/* Events List */}
         <div className="space-y-6">
           {events.map((event, index) => (
             <motion.article
               key={event.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: index * 0.15 }}
               className={`group p-8 md:p-10 border rounded-sm transition-all duration-500 ${
                 event.featured
                   ? "bg-burgundy/10 border-burgundy/30 hover:border-gold/50 glow-rose"
                   : "bg-card/30 border-border/30 hover:border-gold/30"
               }`}
             >
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                 <div className="flex-1">
                   {event.featured && (
                     <span className="inline-block font-body text-xs tracking-widest uppercase text-rose mb-3">
                       ★ Featured Event
                     </span>
                   )}
                   <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors duration-300">
                     {event.title}
                   </h3>
                   <p className="font-display text-lg italic text-muted-foreground mt-1">
                     {event.subtitle}
                   </p>
                   <p className="font-body text-base text-foreground/70 mt-4 max-w-2xl">
                     {event.description}
                   </p>
                 </div>
 
                 <div className="flex flex-col gap-3 text-sm text-muted-foreground md:text-right">
                   <div className="flex items-center gap-2 md:justify-end">
                     <Calendar size={16} className="text-gold/70" />
                     <span className="font-body">{event.date}</span>
                   </div>
                   <div className="flex items-center gap-2 md:justify-end">
                     <MapPin size={16} className="text-gold/70" />
                     <span className="font-body">{event.location}</span>
                   </div>
                 </div>
               </div>
             </motion.article>
           ))}
         </div>
 
         {/* CTA */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="text-center mt-12"
         >
           <a
             href="https://instagram.com/poeticallyfathmah"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300"
           >
             Follow for Updates
             <ExternalLink size={16} />
           </a>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Events;