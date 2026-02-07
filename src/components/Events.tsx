import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Ticket, Sparkles } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Rebel Tongues",
    subtitle: "A Diaspora Poetry Experience",
    date: "January 30th, 2026",
    location: "Minara Culture Salon × Café, Cambridge, MA",
    description:
      "An immersive poetry experience designed for neurotribe expansion. Featuring Brynna (poet) and Bunty Singh (musician). Doors 6PM, 6:30PM start. Open mic is first come first serve. All proceeds to Sudanese American Physicians Association.",
    featured: true,
    link: "https://partiful.com/e/9ciszAWI8M22mljmKrKE",
  },
  {
    id: 2,
    title: "Summer Open Mics",
    subtitle: "Poetry Events",
    date: "Summer 2026",
    location: "New York City",
    description:
      "Join Fathmah for upcoming open mic nights and poetry events across NYC. Follow @poeticallyfathmah for announcements.",
    featured: false,
  },
  {
    id: 3,
    title: "Urban Word NYC Events",
    subtitle: "NYC Youth Poet Laureate",
    date: "2024-2025",
    location: "Schomburg Center & More",
    description:
      "As NYC Youth Poet Laureate, Fathmah represents at various Urban Word events and competitions.",
    featured: false,
  },
];

const Events = () => {
  return (
    <section id="events" className="py-32 md:py-40 bg-gradient-section relative">
      {/* Atmospheric glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-rose/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-gold/4 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-burgundy/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-muted">
            Performances & Gatherings
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-foreground">
            Events
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-px mx-auto mt-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm" />
          </motion.div>
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
              className={`group relative p-8 md:p-10 border rounded-sm transition-all duration-500 overflow-hidden ${
                event.featured
                  ? "bg-gradient-to-br from-burgundy/12 via-burgundy/6 to-gold/5 border-burgundy/30 hover:border-gold/50 glow-burgundy"
                  : "bg-gradient-to-br from-card/40 to-card/20 border-border/30 hover:border-gold/30 hover:glow-gold"
              }`}
            >
              {/* Subtle hover shimmer */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  {event.featured && (
                    <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-rose mb-3">
                      <Sparkles size={12} className="text-rose" />
                      Featured Event
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
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:justify-end mt-2 px-5 py-2.5 bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/25 rounded-sm text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300 group/ticket"
                    >
                      <Ticket size={16} className="group-hover/ticket:scale-110 transition-transform duration-300" />
                      <span className="font-body font-medium">Get Tickets</span>
                    </a>
                  )}
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
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 border border-gold/25 text-gold hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 border-glow-gold"
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
