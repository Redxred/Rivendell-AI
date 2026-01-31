import { motion } from "framer-motion";
import { ArrowRight, Code, Brain, Sparkles, Layers } from "lucide-react";
import { Link } from "wouter";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 min-h-[80vh] flex items-center pt-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="max-w-4xl space-y-8"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase">
            <Sparkles className="w-3 h-3" />
            <span>The New Era of Intelligence</span>
          </motion.div>
          
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] text-balance">
            Sanctuary for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smart Technology</span>
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We build digital experiences that feel natural, intuitive, and profound. 
            Blending ancient wisdom with cutting-edge AI to forge the future of software.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1">
                Enter the Council
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 rounded-xl bg-card border border-border text-foreground font-medium text-lg hover:border-primary/50 transition-all">
                Explore Our Craft
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-white/5 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
            {/* Abstract nature/tech representation - CSS generated */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-48 h-48 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute w-32 h-32 bg-primary/5 backdrop-blur-3xl rounded-full" />
            </div>
            {/* Descriptive comment for Unsplash fallback if needed */}
            {/* <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Abstract connection network" className="w-full h-full object-cover opacity-40 mix-blend-overlay" /> */}
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">The Rivendell Way</h2>
            <div className="space-y-6">
              {[
                { title: "Listen", desc: "We begin with silence. Understanding your core needs before writing a single line of code." },
                { title: "Design", desc: "Crafting interfaces that breathe. We prioritize serenity and clarity over noise." },
                { title: "Build", desc: "Forging robust architectures with the strength of mithril and the flexibility of willow." },
                { title: "Support", desc: "An eternal alliance. We stand by our creations as they grow and evolve." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                    <span className="font-serif text-lg text-muted-foreground group-hover:text-primary transition-colors">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-6 bg-card/30 rounded-3xl p-8 md:p-16 border border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">Our Craft</h2>
          <p className="text-muted-foreground text-lg">
            We weave advanced technology into seamless experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Code, title: "Web & App Dev", desc: "Performant, accessible, and beautiful applications built with modern stacks." },
            { icon: Brain, title: "AI Automation", desc: "Intelligent workflows that reclaim your time and augment your capabilities." },
            { icon: Layers, title: "UI/UX Design", desc: "Interfaces that feel inevitable. Intuitive flows designed for human cognition." },
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                <service.icon strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3 font-serif">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 border border-white/10 p-12 md:p-24 text-center">
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif">Ready to begin your journey?</h2>
            <p className="text-xl text-muted-foreground">
              The Council is gathered. We await your challenge.
            </p>
            <div className="pt-8">
              <Link href="/contact">
                <button className="px-10 py-5 rounded-xl bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform">
                  Request a Council Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
