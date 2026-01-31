import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            We are Guardians <br/> of the Digital Realm
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance"
          >
            Rivendell AI was founded on a simple premise: technology should enhance human life, not consume it. We stand against the noise, the clutter, and the chaos of modern software.
          </motion.p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-card border-y border-border py-24">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif">Our Creed</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                In an age of rapid acceleration, we choose intentionality. We believe that speed without direction is meaningless.
              </p>
              <p>
                We do not just write code; we author solutions. Every function, every component, every database schema is crafted with the understanding that it will be used by real people with real needs.
              </p>
              <p>
                Like the Elven sanctuaries of old, we create spaces of clarity in a chaotic world. When you work with us, you are not just hiring developers; you are entering a partnership dedicated to excellence.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-background/50 border border-white/5">
             {/* Abstract Team/Workplace representation */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-serif italic text-3xl opacity-20">Artistry in Code</span>
             </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years of Craft", value: "10+" },
            { label: "Client Retention", value: "95%" },
            { label: "Lines of Code", value: "1M+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-card/30 border border-border">
              <div className="text-4xl md:text-5xl font-serif text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
