import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Ticket } from "lucide-react";

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
      {/* Atmospheric glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-60 h-60 bg-rose/5 rounded-full blur-3xl" />
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
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6"
          />
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
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:justify-end text-gold hover:text-gold-muted transition-colors mt-2"
                    >
                      <Ticket size={16} />
                      <span className="font-body">Get Tickets</span>
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
