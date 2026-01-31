import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We begin by entering your world. We listen deeply to understand not just the problem, but the context, the stakeholders, and the ultimate vision.",
    details: ["Stakeholder Interviews", "Problem Definition", "Requirement Gathering"]
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Before a single pixel is placed, we chart the course. We align on the technical architecture, the user journey, and the success metrics.",
    details: ["Technical Roadmap", "User Journey Mapping", "Wireframing"]
  },
  {
    number: "03",
    title: "Execution",
    desc: "The forge heats up. Our craftsmen build your solution with clean, efficient code and pixel-perfect design, communicating progress at every step.",
    details: ["Agile Development", "Bi-weekly Sprints", "Continuous Testing"]
  },
  {
    number: "04",
    title: "Optimization",
    desc: "Launch is not the end. We observe how the system breathes in the wild, refining performance and smoothing rough edges based on real usage.",
    details: ["Performance Analytics", "User Feedback Loops", "Scaling Infrastructure"]
  }
];

export default function Process() {
  return (
    <div className="pb-24">
      <div className="bg-background border-b border-border/40 py-24 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">The Council of Rivendell</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our methodology is a journey. A structured path from the unknown to the concrete, ensuring clarity and precision at every turn.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Connecting Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden md:block" />

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col md:flex-row gap-8 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 md:text-right text-left">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-6xl md:text-8xl font-serif text-white/5 font-bold block -mb-8 relative z-0">
                    {step.number}
                  </span>
                  <h2 className="text-3xl font-medium relative z-10 text-primary">{step.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                  <ul className={`inline-flex flex-col gap-2 ${index % 2 === 1 ? 'md:items-start' : 'md:items-end'}`}>
                    {step.details.map((detail) => (
                      <li key={detail} className="text-sm font-medium text-foreground/70 bg-card px-3 py-1 rounded-full border border-border">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Node (Desktop) */}
              <div className="w-4 h-4 rounded-full bg-background border-2 border-primary relative z-10 hidden md:block ring-4 ring-background">
                <div className="absolute inset-0 bg-primary/50 animate-ping rounded-full" />
              </div>

              {/* Empty Side for Balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
