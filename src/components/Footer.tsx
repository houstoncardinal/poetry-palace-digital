 import { motion } from "framer-motion";
 import { Heart } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="py-12 border-t border-border/30">
       <div className="max-w-6xl mx-auto px-6">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-center md:text-left">
             <p className="font-display text-2xl text-gold">Fathmah</p>
             <p className="font-body text-sm text-muted-foreground mt-1">
               NYC Youth Poet Laureate 2024
             </p>
           </div>
 
           <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
             <span>Made with</span>
             <Heart size={14} className="text-rose fill-rose" />
             <span>for the love of words</span>
           </div>
 
           <div className="text-center md:text-right">
             <p className="font-body text-xs text-muted-foreground/70">
               © {new Date().getFullYear()} Fathmah. All rights reserved.
             </p>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;