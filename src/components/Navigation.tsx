 import { motion } from "framer-motion";
 import { Instagram, Mail, BookOpen } from "lucide-react";
 
 const Navigation = () => {
   const navItems = [
     { label: "Poetry", href: "#poetry" },
     { label: "About", href: "#about" },
     { label: "Events", href: "#events" },
     { label: "Contact", href: "#contact" },
   ];
 
   return (
     <motion.nav
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.5 }}
       className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
     >
       <div className="max-w-6xl mx-auto flex items-center justify-between">
         <a href="#" className="font-display text-2xl tracking-wide text-gold">
           Fathmah
         </a>
         
         <div className="hidden md:flex items-center gap-8">
           {navItems.map((item) => (
             <a
               key={item.label}
               href={item.href}
               className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
             >
               {item.label}
             </a>
           ))}
         </div>
 
         <div className="flex items-center gap-4">
           <a
             href="https://instagram.com/poeticallyfathmah"
             target="_blank"
             rel="noopener noreferrer"
             className="text-muted-foreground hover:text-gold transition-colors duration-300"
           >
             <Instagram size={20} />
           </a>
           <a
             href="mailto:contact@fathmah.com"
             className="text-muted-foreground hover:text-gold transition-colors duration-300"
           >
             <Mail size={20} />
           </a>
         </div>
       </div>
     </motion.nav>
   );
 };
 
 export default Navigation;