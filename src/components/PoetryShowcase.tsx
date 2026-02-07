import { motion } from "framer-motion";
import { useState } from "react";
import ScrollRevealText from "./ScrollRevealText";
import PoemReader from "./PoemReader";

const poems = [
  {
    id: 1,
    title: "Duniya",
    excerpt: `The world spins on axes we cannot see,
yet we feel every tremor, every shift.
I carry the weight of two homelands—
one in my blood, one in my bones.`,
    fullText: `The world spins on axes we cannot see,
yet we feel every tremor, every shift.
I carry the weight of two homelands—
one in my blood, one in my bones.

My grandmother's prayers echo in rooms
I have never entered,
her voice a compass I follow blindly
through cities that don't know my name.

Duniya, they call it—
this whole spinning, aching, breathing thing.
And I am both its center
and its furthest edge.

Some days the world is so heavy
I forget I am allowed to set it down.
Other days I hold it up
like an offering to the sky,

and it becomes light.`,
    theme: "Identity & Diaspora",
    dedication: "for those who carry two worlds",
  },
  {
    id: 2,
    title: "Stain",
    excerpt: `They called me a stain,
as if I were something to be washed away.
But I am the ink that writes history,
the mark that refuses to fade.`,
    fullText: `They called me a stain,
as if I were something to be washed away.
But I am the ink that writes history,
the mark that refuses to fade.

I am the coffee ring
on your grandmother's table,
the turmeric on your mother's fingers,
the henna that darkens with time.

You tried to bleach me.
You tried to scrub me out of the narrative.
But a stain is proof
that something lived here.

That something touched this surface
and left its signature.

So yes — call me a stain.
Watch me spread.
Watch me seep into every fiber
of the fabric you thought was yours.

I am indelible.
I am evidence.
I am here.`,
    theme: "Resilience & Defiance",
    dedication: "for every girl they tried to erase",
  },
  {
    id: 3,
    title: "Inheritance",
    excerpt: `My mother's hands hold stories
of villages left behind,
of recipes passed through whispers,
of love that crossed oceans.`,
    fullText: `My mother's hands hold stories
of villages left behind,
of recipes passed through whispers,
of love that crossed oceans.

She gave me her eyes—
the ones that see through borders,
the ones that water seeds
in soil we'll never own.

My inheritance is not money.
It is not land.
It is the way my tongue curves
around syllables of a language
I'm still learning to pronounce.

It is the way I season my grief,
the way I fold my prayers,
the way I walk into a room
and carry the weight of everyone
who walked before me.

My mother's hands hold stories.
And mine—mine hold hers.`,
    theme: "Heritage & Memory",
    dedication: "for umma",
  },
  {
    id: 4,
    title: "Rebel Tongue",
    excerpt: `My tongue is a rebel.
It speaks in the language of the displaced,
in the dialect of those who were told
their words were too loud for this room.`,
    fullText: `My tongue is a rebel.
It speaks in the language of the displaced,
in the dialect of those who were told
their words were too loud for this room.

But this room was built
on the backs of our silence,
and I have decided
I am done being quiet.

Let my accent be the anthem.
Let my grammar be the revolution.
Let every syllable I mispronounce
be a door I kick open.

Because they want us polished.
They want us palatable.
They want our rebellion
to come in a language they can digest.

But my tongue is a rebel.
And it will speak in fire.`,
    theme: "Voice & Resistance",
  },
  {
    id: 5,
    title: "Dress Code",
    excerpt: `Always in a dress—
not because I am delicate,
but because fabric remembers
what skin tries to forget.`,
    fullText: `Always in a dress—
not because I am delicate,
but because fabric remembers
what skin tries to forget.

My hemline is a horizon.
My sleeves, two open arms.
Every fold a verse
of the woman I am becoming.

They ask why I dress this way—
as if softness is not a kind of armor,
as if beauty is not a form of warfare,
as if choosing yourself each morning
is not the most radical act.

I wear my body like a poem.
I wear my culture like a crown.
Always in a dress,
always in bloom,
always, always
taking up space.`,
    theme: "Womanhood & Self",
    dedication: "always in a dress 💗",
  },
];

const PoetryShowcase = () => {
  const [selectedPoem, setSelectedPoem] = useState<typeof poems[0] | null>(null);

  return (
    <>
      <PoemReader
        poem={selectedPoem}
        onClose={() => setSelectedPoem(null)}
      />

      <section id="poetry" className="py-32 md:py-40 bg-gradient-section relative">
        {/* Atmospheric overlays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-muted">
              Selected Works
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 text-foreground">
              Poetry
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-8"
            />
            <p className="font-body text-base text-muted-foreground mt-6 max-w-lg mx-auto italic">
              "I write to remember what we were never supposed to forget."
            </p>
          </motion.div>

          {/* Featured Poem - Large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div
              onClick={() => setSelectedPoem(poems[1])}
              className="group cursor-pointer relative p-10 md:p-16 bg-burgundy/10 border border-burgundy/20 rounded-sm hover:border-gold/40 transition-all duration-700 hover:glow-rose overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-rose mb-4">
                  ★ Featured — {poems[1].theme}
                </span>
                <h3 className="font-display text-4xl md:text-6xl text-foreground mb-8 group-hover:text-gradient-gold transition-colors duration-500">
                  {poems[1].title}
                </h3>
                <div className="poetry-quote">
                  <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/75 whitespace-pre-line">
                    <ScrollRevealText>{poems[1].excerpt}</ScrollRevealText>
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3">
                  <span className="font-body text-sm text-gold group-hover:tracking-wider transition-all duration-500">
                    Read the full poem
                  </span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gold"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Poetry Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {poems.filter((_, i) => i !== 1).map((poem, index) => (
              <motion.article
                key={poem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onClick={() => setSelectedPoem(poem)}
                className="group relative cursor-pointer"
              >
                <div className="p-8 md:p-10 bg-card/40 border border-border/40 rounded-sm hover:border-gold/30 transition-all duration-500 hover:glow-rose h-full flex flex-col">
                  {/* Theme Badge */}
                  <span className="inline-block font-body text-xs tracking-widest uppercase text-gold-muted mb-4">
                    {poem.theme}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6 group-hover:text-gold transition-colors duration-300">
                    {poem.title}
                  </h3>

                  {/* Excerpt */}
                  <div className="poetry-quote flex-1">
                    <p className="font-body text-base leading-relaxed text-foreground/70 whitespace-pre-line">
                      {poem.excerpt}
                    </p>
                  </div>

                  {/* Read More */}
                  <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
                    <span className="font-body text-sm text-muted-foreground group-hover:text-gold transition-colors duration-300">
                      Read full poem
                    </span>
                    <span className="text-gold/0 group-hover:text-gold/80 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PoetryShowcase;
