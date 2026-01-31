import { motion } from "framer-motion";
import { Check, Cpu, Globe, LayoutTemplate, Network, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "web-app",
    icon: Globe,
    title: "Web & Application Development",
    subtitle: "Forging Digital Foundations",
    description: "We build scalable, robust applications that serve as the backbone of your digital presence. Using modern frameworks and best practices, we ensure your software stands the test of time.",
    features: ["React & Next.js Ecosystems", "Progressive Web Apps (PWA)", "High-Performance API Design", "Cloud Architecture (AWS/GCP)"],
    color: "text-primary"
  },
  {
    id: "ai-auto",
    icon: Cpu,
    title: "AI & Automation",
    subtitle: "Breathing Intelligence into Systems",
    description: "Move beyond manual toil. We implement intelligent agents and automated workflows that handle the mundane, freeing your mind for higher pursuits.",
    features: ["LLM Integration (GPT/Claude)", "Automated Customer Support", "Data Analysis Pipelines", "Process Optimization"],
    color: "text-accent"
  },
  {
    id: "ui-ux",
    icon: LayoutTemplate,
    title: "UI/UX & Product Design",
    subtitle: "Crafting Serenity",
    description: "Technology should not shout; it should understand. Our design philosophy centers on calm, clarity, and intuition. We create interfaces that feel like second nature.",
    features: ["User Research & Strategy", "Design Systems", "Prototyping & Motion", "Accessibility First"],
    color: "text-secondary-foreground"
  },
  {
    id: "business-process",
    icon: Network,
    title: "Business Process Automation",
    subtitle: "Streamlining the Flow",
    description: "We analyze your operations to find bottlenecks and inefficiencies, replacing them with smooth, automated pathways that accelerate growth.",
    features: ["Workflow Audit", "Custom CRM Solutions", "Integration Middleware", "Reporting Dashboards"],
    color: "text-primary"
  },
  {
    id: "tech-support",
    icon: ShieldCheck,
    title: "Technical Support & Maintenance",
    subtitle: "The Eternal Watch",
    description: "Our relationship doesn't end at launch. We provide ongoing guardianship for your digital assets, ensuring security, stability, and continuous improvement.",
    features: ["24/7 Monitoring", "Security Audits", "Performance Tuning", "Feature Evolution"],
    color: "text-accent"
  }
];

export default function Services() {
  return (
    <div className="pb-24">
      <div className="bg-background border-b border-border/40 py-24 mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Craft</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each service we offer is a discipline mastered over years. We bring dedication, precision, and artistry to every line of code and every pixel.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 space-y-32">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
          >
            <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
              <div className={`w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-8 ${service.color}`}>
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">{service.subtitle}</h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium text-sm">
                  Discuss this Service
                </button>
              </Link>
            </div>
            
            <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-card/30 backdrop-blur-sm p-8 flex items-center justify-center group">
                {/* Abstract Visual Representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
                <div className="relative z-10 w-full h-full border border-white/5 rounded-xl bg-background/50 backdrop-blur-md p-6 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="space-y-3 opacity-50">
                    <div className="h-2 w-3/4 bg-current rounded-full" />
                    <div className="h-2 w-1/2 bg-current rounded-full" />
                    <div className="h-2 w-full bg-current rounded-full" />
                    <div className="h-2 w-5/6 bg-current rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-32">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-serif mb-4">Unsure what you need?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our Strategy Sessions are designed to uncover the path forward, even if the destination isn't yet clear.
          </p>
          <Link href="/contact">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Book a Strategy Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
